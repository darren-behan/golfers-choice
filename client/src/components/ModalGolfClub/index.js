import React, { useContext, useState, useEffect } from 'react';
import './index.css';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DataAreaContext from "../../utils/DataAreaContext";
import Image from "../../assets/img/home-hero.jpg";

function GolfClubModal(props) {
  const { golfClubModal, localDate, setLocalDate } = useContext(DataAreaContext);

  // useEffect is listening on load of site
  // If golfClubModal changes, setLocalDate executes 
  useEffect(() => {
    setLocalDate(new Date(golfClubModal.modified_at));
  }, [golfClubModal]);

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{ textTransform: "capitalize" }}>
          { golfClubModal.name }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid" style={{ padding: "16px 1px" }}>
        <Container>
          <Row>
            <Col xs={12} style={{ borderBottom: "1px solid #dee2e6"}}>
              <div style={{ textAlign: "center", paddingBottom: "15px" }}>
                <img src={ Image } alt="hero-img-golf-club" className="golf-club-image"/>
              </div>
            </Col>
            <Col xs={12} style={{ borderBottom: "1px solid #dee2e6", padding: "16px 16px" }}>
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
            <Col xs={12} style={{ padding: "16px 16px 0px 16px" }} className="text-muted">
              <strong>Last updated: </strong>{ localDate.toLocaleString() }
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default GolfClubModal;