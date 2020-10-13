import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DataAreaContext from "../../utils/DataAreaContext";

function GolfClubModal() {
  const { joinModalShow, setJoinModalShow } = useContext(DataAreaContext);

  return (
    <Modal show={joinModalShow} onHide={() => setJoinModalShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Please login to add this golf club to your favorites <span role="img" aria-label="disappointed-emoji">🏌️‍♂️ 🏌️‍♀️</span></Modal.Title>
      </Modal.Header>

      <Modal.Footer>
        <Button variant="outline-dark" as={ Link } to="login" onClick={() => setJoinModalShow(false)}>Login</Button>
        <Button variant="outline-dark" as={ Link } to="signup" onClick={() => setJoinModalShow(false)}>Join</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default GolfClubModal;