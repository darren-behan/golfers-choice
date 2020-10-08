import React, { useContext } from 'react';
import Modal from 'react-bootstrap/esm/Modal';
import Button from 'react-bootstrap/Button';
import DataAreaContext from "../../utils/DataAreaContext";
import API from "../../utils/API";

function ModalDeleteAccount() {
  const { modalDeleteAccountShow, loggedInUserObject, setIsAuthenticated, setModalDeleteAccountShow, setLoggedInUserObject } = useContext(DataAreaContext);

  const handleButtonClick = (event) => {
    event.preventDefault();

    API.deleteUser({
      id: loggedInUserObject.id
    })
      .then(() => setIsAuthenticated(false))
      .then(() => setModalDeleteAccountShow(false))
      .then(() => setLoggedInUserObject({}))
      .catch(err => console.log(err));
  };

  return(
    <Modal show={modalDeleteAccountShow} onHide={() => setModalDeleteAccountShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>We're sad to see you leave <span role="img" aria-label="disappointed-emoji">😞</span></Modal.Title>
      </Modal.Header>

      <Modal.Body closeButton>
        <p>Are you sure you want to delete your account?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={ handleButtonClick }>Delete account</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalDeleteAccount;

