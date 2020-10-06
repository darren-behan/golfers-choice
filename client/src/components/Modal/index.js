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
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          { golfClubModal.name }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} style={{ borderBottom: "1px solid #dee2e6"}}>
              <div style={{ textAlign: "center", paddingBottom: "15px" }}>
                <img src="https://via.placeholder.com/400x400" alt="hero-img-golf-club"/>
              </div>
            </Col>
            <Col xs={12}>
              <strong>Description: </strong>{ golfClubModal.description }
              <br/>
              <strong>No. of holes: </strong>{ golfClubModal.num_holes }
              <br/>
              <strong>Par: </strong>{ golfClubModal.par }
              <br/>
              <strong>Length: </strong>{ golfClubModal.length } yards
              <br/>
              <strong>Members: </strong>{ golfClubModal.members }
              <br/>
              <strong>Full Membership Cost: </strong>€{ golfClubModal.membership_full_men }
              <br/>
              <strong>Summer Green Fee: </strong>€{ golfClubModal.green_fees_summer }
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