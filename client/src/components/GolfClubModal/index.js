import React, { useContext } from 'react';
import './index.css';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DataAreaContext from "../../utils/DataAreaContext";

function GolfClubModal(props) {
  const { golfClubModal } = useContext(DataAreaContext);

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          { golfClubModal.name }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              { golfClubModal.name }
            </Col>
            <Col xs={6} md={4}>
              <strong>No. of holes: </strong>{ golfClubModal.num_holes }
              <br/>
              <strong>Par: </strong>{ golfClubModal.par }
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default GolfClubModal;