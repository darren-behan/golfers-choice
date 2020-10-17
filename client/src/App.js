import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import DataAreaContext from "../src/utils/DataAreaContext";
import API from "./utils/API";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GolfClub from "./pages/GolfClub";
import Favorites from "./pages/Favorites";
import ResetPassword from "./pages/ResetPassword";
import PageNotFound from "./pages/NotFound";
import Wrapper from "./components/Wrapper";

function App() {
  let history = useHistory();

  // This is used to confirm that the values entered into the login and sign up form inputs are validated
  const [validated, setValidated] = useState(false);
  // This is used to create an object to capture the new user details so we can send the data to the server and create their account
  const [newUserObject, setNewUserObject] = useState({});
  // This is used to create an object to capture the login details so we can send the data to the server, confirm the user and proceed to log them in
  const [loggedInUserObject, setLoggedInUserObject] = useState({});
  // This is used to create an object to capture the old & new password so we can send the data to the server and proceed to th password
  const [updatePasswordUserObject, setUpdatePasswordUserObject] = useState({});
  // This is used to confirm the user is logged in and redirect them to the home page
  const [isAuthenticated, setIsAuthenticated] = useState( false );
  // This is used to create an object to capture the county searched so we can send the data to the server and return the golf clubs in that county and display to the user
  const [golfClub, setGolfClub] = useState({});
  // This is used to store the response from the user search for golf clubs in a certain county
  const [searchResults, setSearchResults] = useState([]);
  // This is used to store all golf clubs returned on app load
  const [golfClubs, setGolfClubs] = useState([]);
  // This is used to store the golf club details when you want to view that specific golf club
  const [golfClubModal, setGolfClubModal] = useState({});
  // This is used to store a boolean value for when a USER clicks delete account, it will be set to true and a modal will show
  const [modalDeleteAccountShow, setModalDeleteAccountShow] = useState(false);
  // This is used to store an object which has the golf club the user wants to favorite and a boolean value to show if that star should be green(false) or yellow(true)
  const [favorites, setFavorites] = useState([]);
  // This sets modalShow to true which pops up the modal to show the golf club details
  const [modalShow, setModalShow] = useState(false);
  // This sets joinModalShow to true which pops out a modal to ask the user to sign in or join so they can favorite an account
  const [joinModalShow, setJoinModalShow] = useState(false);
  // This is used to store the status of the error when a USER attempts to reset their password
  const [resetPasswordErrResStatus, setResetPasswordErrResStatus] = useState(false);
  // This holds the last modified date returned from the golf club record
  const [localDate, setLocalDate] = useState("");
  // This stores the value the user inputs to filter the results
  const [filterValue, setFilterValue] = useState("");

  // useEffect is listening on load of site
  // If isAuthenticated changes to true, the user is navigated to the home page 
  useEffect(() => {
    if(isAuthenticated) {
      history.push("/home");
      setFavorites( loggedInUserObject.favorites );
    };
  }, [history, isAuthenticated, loggedInUserObject.favorites]);

  useEffect(() => {
    loadGolfClubs();
  }, []);

  // Loads all golf clubs and sets them to searchResults
  function loadGolfClubs() {
    API.getGolfClubs()
      .then(res => 
        setGolfClubs(res.data)
      )
      .catch(err => console.log(err));
  };

  const onClickStar = (e) => {
    e.preventDefault();

    const loggedInUserId = loggedInUserObject.id;
    const golfClubId = e.target.parentNode.id;

    if(!isAuthenticated) {
      setJoinModalShow(true);
    } else {
      API.favoriteGolfClub({
        golfClubId: golfClubId,
        loggedInUserId: loggedInUserId
      })
      .then(res =>
        setFavorites(res.data.favorites) 
      )
      .catch(err => console.log(err));
    }
  };

  return (
    <DataAreaContext.Provider
    value={{ history, loggedInUserObject, newUserObject, validated, golfClub, isAuthenticated, searchResults, golfClubs, golfClubModal, updatePasswordUserObject, modalDeleteAccountShow, favorites, modalShow, joinModalShow, localDate, resetPasswordErrResStatus, filterValue, loadGolfClubs, setValidated, setNewUserObject, setLoggedInUserObject, setIsAuthenticated, setGolfClub, setSearchResults, setGolfClubs, setGolfClubModal, setUpdatePasswordUserObject, setModalDeleteAccountShow, setFavorites, setModalShow, onClickStar, setJoinModalShow, setLocalDate, setResetPasswordErrResStatus, setFilterValue }}
    >
      <Wrapper>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/golfclub" component={GolfClub} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {
            isAuthenticated && (
              <>
                <Route exact path="/reset-password" component={ResetPassword} />
                <Route exact path="/favorites" component={Favorites} />
              </>
            )
          }
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </Wrapper>
    </DataAreaContext.Provider>
  );
}

export default App;
