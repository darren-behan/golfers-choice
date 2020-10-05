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
        <Col md={{ span: 8, order: "1" }} xs={{ span: 12, order: "2" }}>
          <GolfClub />
        </Col>
        <Col md={{ span: 4, order: "2" }} xs={{ span: 12, order: "1" }}>
          <WeatherWidget />
        </Col>
      </Row>
    </Container>
  )
}

export default Grid;