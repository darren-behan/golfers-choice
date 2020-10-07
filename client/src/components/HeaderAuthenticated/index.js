import React, { useContext } from 'react';
import "./index.css";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import DataAreaContext from "../../utils/DataAreaContext";

function HeaderAuthenticated() {
  const { setIsAuthenticated, setModalDeleteAccountShow } = useContext(DataAreaContext);

  const handleOnClickLogout = () => {
    setIsAuthenticated(false);
  };

  const handleOnClickDeleteAccount = () => {
    setModalDeleteAccountShow(true);
  };

  return(
    <>
    <DropdownButton
      alignRight
      title={ <FontAwesomeIcon icon={ faUser }/> }
      id="dropdown-menu-align-right"
      variant="outline-dark"
    >
      <Dropdown.Item eventKey="1" href="favorites">Favorite clubs</Dropdown.Item>
      <Dropdown.Item eventKey="2" href="reset-password">Reset password</Dropdown.Item>
      <Dropdown.Item eventKey="3" onClick={ handleOnClickDeleteAccount }>Delete account</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4" href="home" onClick={ handleOnClickLogout }>Logout</Dropdown.Item>
    </DropdownButton>
    </>
  )
}

export default HeaderAuthenticated;