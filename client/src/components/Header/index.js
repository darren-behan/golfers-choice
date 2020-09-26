import React from 'react';
import './index.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <Navbar id="navbar" expand="md" sticky="top">
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-dark">Search</Button>
      </Form>
      <Navbar.Toggle className="toggle-icon ml-auto" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link className="nav-link" href="login" id="login" style={{color: '#697684', fontWeight: 400}}>
              <Button variant="outline-dark">Login</Button>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link" href="sign-up" id="sign-up" style={{ color: '#697684', fontWeight: 400 }}>
              <Button variant="outline-dark">Sign up</Button>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
