import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "./index.css";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import DataAreaContext from "../../utils/DataAreaContext";

function HeaderAuthenticated() {
  const { setIsAuthenticated, setModalDeleteAccountShow, setLoggedInUserObject, setFavorites, loggedInUserObject } = useContext(DataAreaContext);

  const handleOnClickLogout = () => {
    setIsAuthenticated(false);
    setLoggedInUserObject({});
    setFavorites({});
  };

  const handleOnClickDeleteAccount = () => {
    setModalDeleteAccountShow(true);
  };

  return(
    <>
    <div className="welcome-div">Welcome, { loggedInUserObject.firstName }</div>
    <DropdownButton
      alignRight
      title={ <FontAwesomeIcon icon={ faUser }/> }
      id="dropdown-menu-align-right"
      variant="outline-dark"
    >
      <Dropdown.Item eventKey="1" as={ Link } to="favorites">Favorite clubs</Dropdown.Item>
      <Dropdown.Item eventKey="2" as={ Link } to="reset-password">Reset password</Dropdown.Item>
      <Dropdown.Item eventKey="3" onClick={ handleOnClickDeleteAccount }>Delete account</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4" as={ Link } to="home" onClick={ handleOnClickLogout }>Logout</Dropdown.Item>
    </DropdownButton>
    </>
  )
}

export default HeaderAuthenticated;