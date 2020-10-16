import React, { useContext } from 'react';
import './index.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import DataAreaContext from "../../utils/DataAreaContext";

function Header() {
  const { setFilterValue } = useContext(DataAreaContext);

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    console.log(event.target.value);
    setFilterValue(event.target.value);
  };

  return (
    <Navbar id="navbar" expand="md">
      <Navbar.Toggle className="toggle-icon mx-auto toggle-icon-filter" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="mx-auto">
          <FormControl size="sm" type="text" placeholder="Find by golf club name" className="mr-sm-2" onChange={ handleInputChange }/>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
