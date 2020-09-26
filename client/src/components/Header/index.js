import React from 'react';
import './index.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Logo from "../../assets/img/golf-logo-header.jpg";

function Header() {
  return (
    <Navbar id="navbar" expand="md" sticky="top">
      <a href="home">
        <img src={ Logo } alt="logo"></img>
      </a>
      <Navbar.Toggle className="toggle-icon ml-auto" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link className="nav-link" href="login" style={{color: '#697684', fontWeight: 400}}>
              <Button variant="outline-dark">Login</Button>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link" href="signup" style={{ color: '#697684', fontWeight: 400 }}>
              <Button variant="outline-dark">Join</Button>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
