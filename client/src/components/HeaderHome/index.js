import React, { useContext } from 'react';
import './index.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Logo from "../../assets/img/golf-logo-header-transparent.png";
import HeaderAuthenticated from "../HeaderAuthenticated";
import DataAreaContext from "../../utils/DataAreaContext";

function HomeHeader() {
  const { isAuthenticated } = useContext(DataAreaContext);

  return (
    <Navbar className="hero-navbar">
      <a href="home">
        <img src={ Logo } alt="logo"></img>
      </a>
      <h4 style={{ color: "#fff", fontWeight: "900" }}>olfers Choice</h4>
      <Nav className="ml-auto">
        {!isAuthenticated ? (
          <>
          <Nav.Item>
            <Nav.Link className="nav-link" href="login" style={{color: '#697684', fontWeight: 400}}>
              <Button variant="outline-light" style={{ border: "none" }}>Login</Button>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id="nav-link-join" className="nav-link" href="signup" style={{ color: '#697684', fontWeight: 400 }}>
              <Button variant="outline-light">Join</Button>
            </Nav.Link>
          </Nav.Item>
          </>
        ) : (
          <HeaderAuthenticated className="hero-header-authenticated"/>
        )}
      </Nav>
    </Navbar>
  );
}

export default HomeHeader;
