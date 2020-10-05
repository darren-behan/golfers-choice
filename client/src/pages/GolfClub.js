import React from 'react';
import Header from "../components/Header";
import Row from 'react-bootstrap/Row';
import Grid from "../components/GolfClubGrid";

// This page displays the list of golf clubs returned from the user search
function Login() {
  return (
    <>
      <Header />
      <Row>
        <Grid />
      </Row>
    </>
  )
}

export default Login;