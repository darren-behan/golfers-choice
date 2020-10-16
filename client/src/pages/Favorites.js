import React from 'react';
import Header from "../components/HeaderMain";
import Row from 'react-bootstrap/Row';
import Grid from "../components/FavoritesGrid";
import DeleteAccountModal from "../components/ModalDeleteAccount";
import Filters from "../components/Filters";

// This page displays the list of golf clubs returned from the user search
function Favorites() {
  return (
    <>
      <Header />
      <Filters />
      <Row>
        <Grid />
      </Row>
      <DeleteAccountModal />
    </>
  )
}

export default Favorites;