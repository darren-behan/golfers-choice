import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './index.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Logo from "../../assets/img/golf-logo-header.jpg";
import HeaderAuthenticated from "../HeaderAuthenticated";
import DataAreaContext from "../../utils/DataAreaContext";

function Header() {
  const { isAuthenticated } = useContext(DataAreaContext);

  return (
    <Navbar id="navbar" expand="md" sticky="top">
      <Link to="home">
        <img src={ Logo } alt="logo"></img>
      </Link>
      <Navbar.Toggle className="toggle-icon ml-auto" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {!isAuthenticated ? (
            <>
              <Nav.Item>
                <Nav.Link className="nav-link" as={ Link } to="login" style={{color: '#697684', fontWeight: 400}}>
                  <Button variant="outline-dark">Login</Button>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="nav-link" as={ Link } to="signup" style={{ color: '#697684', fontWeight: 400 }}>
                  <Button variant="outline-dark">Join</Button>
                </Nav.Link>
              </Nav.Item>
            </>
          ) : (
            <HeaderAuthenticated />
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
