import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import DataAreaContext from "../src/utils/DataAreaContext";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GolfClub from "./pages/GolfClub";
import Wrapper from "./components/Wrapper";

function App() {
  let history = useHistory();

  // This is used to confirm that the values entered into the login and sign up form inputs are validated
  const [validated, setValidated] = useState(false);
  // This is used to create an object to capture the new user details so we can send the data to the server and create their account
  const [newUserObject, setNewUserObject] = useState({});
  // This is used to create an object to capture the login details so we can send the data to the server, confirm the user and proceed to log them in
  const [loggedInUserObject, setLoggedInUserObject] = useState({});
  // This is used to confirm the user is logged in and redirect them to the home page
  const [isAuthenticated, setIsAuthenticated] = useState( false );
  // This is used to create an object to capture the county searched so we can send the data to the server and return the golf clubs in that county and display to the user
  const [golfClub, setGolfClub] = useState({});
  // This is used to store the response from the user search for golf clubs in a certain county
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if(isAuthenticated) {
      history.push("/home");
    }
  }, [isAuthenticated])

  console.log(golfClub);
  return (
    <DataAreaContext.Provider
    value={{ loggedInUserObject, newUserObject, validated, golfClub, searchResults, setValidated, setNewUserObject, setLoggedInUserObject, setIsAuthenticated, setGolfClub, setSearchResults }}
    >
      <Wrapper>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/golfclub" component={GolfClub} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Wrapper>
    </DataAreaContext.Provider>
  );
}

export default App;
