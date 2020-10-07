import React, { useContext } from 'react';
import Modal from 'react-bootstrap/esm/Modal';
import Button from 'react-bootstrap/Button';
import DataAreaContext from "../../utils/DataAreaContext";

function ModalDeleteAccount() {
  const { modalDeleteAccountShow, setModalDeleteAccountShow } = useContext(DataAreaContext);
  return(
    <Modal show={modalDeleteAccountShow} onHide={() => setModalDeleteAccountShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>We're sad to see you leave 😞</Modal.Title>
      </Modal.Header>

      <Modal.Body closeButton>
        <p>Are you sure you want to delete your account?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger">Delete account</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalDeleteAccount;

