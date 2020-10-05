import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GolfClub from '../GolfClubList';
import WeatherWidget from '../WidgetWeather';

function Grid() {
  
  return (
    <Container>
      <Row style={{ padding: "15px 10px" }}>
        <Col md={8} xs={12}>
          <GolfClub />
        </Col>
        <Col md={4} xs={12}>
          <WeatherWidget />
        </Col>
      </Row>
    </Container>
  )
}

export default Grid;