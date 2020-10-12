import React from 'react';
import Header from "../components/HeaderMain";
import Grid from "../components/GolfClubGrid";
import DeleteAccountModal from "../components/ModalDeleteAccount";

// This page displays the list of golf clubs returned from the user search
function Login() {
  return (
    <>
      <Header />
      <Grid />
      <DeleteAccountModal />
    </>
  )
}

export default Login;