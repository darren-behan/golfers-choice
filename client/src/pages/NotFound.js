import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/HeaderMain";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

function PageNotFound() {
  return (
    <>
      <Header />
      <Jumbotron style={{ backgroundColor: "#fff", textAlign: "center", marginTop: "32px" }}>
        <h1>404 - Page not found!</h1>
        <Button variant="outline-dark" as={ Link } to="home">Home</Button>
      </Jumbotron>
    </>
  )
}

export default PageNotFound;