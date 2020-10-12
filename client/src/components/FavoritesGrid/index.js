import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GolfClub from '../FavoritesGolfClubList';

function Grid() {
  
  return (
    <Container>
      <Row style={{ padding: "15px 10px" }}>
        <Col md={12}>
          <GolfClub />
        </Col>
      </Row>
    </Container>
  )
}

export default Grid;