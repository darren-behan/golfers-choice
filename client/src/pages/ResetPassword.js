import React from 'react';
import Header from "../components/HeaderMain";
import ResetPasswordForm from '../components/FormResetPassword';
import DeleteAccountModal from "../components/ModalDeleteAccount";

function ResetPassword() {
  return (
    <>
      <Header />
      <ResetPasswordForm />
      <DeleteAccountModal />
    </>
  )
}

export default ResetPassword;