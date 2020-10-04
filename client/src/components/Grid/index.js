import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Grid() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
        </Col>
        <Col xs={12} md={4}>
        </Col>
      </Row>
    </Container>
  )
}

export default Grid;