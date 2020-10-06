import React from 'react';
import Header from "../components/HeaderMain";
import Row from 'react-bootstrap/Row';
import Grid from "../components/GolfClubGrid";

// This page displays the list of golf clubs returned from the user search
function Favorites() {
  return (
    <>
      <Header />
      <Row>
        <Grid />
      </Row>
    </>
  )
}

export default Favorites;