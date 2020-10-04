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
  const history = useHistory();

  const [validated, setValidated] = useState(false);
  const [newUserObject, setNewUserObject] = useState({});
  const [loggedInUserObject, setLoggedInUserObject] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState( false );

  useEffect(() => {
    if(isAuthenticated) {
      history.push("/home");
    }
  }, [isAuthenticated])

  return (
    <DataAreaContext.Provider
    value={{ loggedInUserObject, newUserObject, validated, setValidated, setNewUserObject, setLoggedInUserObject, setIsAuthenticated }}
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
