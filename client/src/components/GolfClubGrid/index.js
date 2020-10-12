import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GolfClub from '../GolfClubList';
import WeatherWidget from '../WidgetWeather';
import DataAreaContext from "../../utils/DataAreaContext";

function Grid() {
  const { searchResults } = useContext(DataAreaContext);
  
  return (
    <Container>
      <Row className="golf-club-grid-row" style={{ padding: "15px 10px" }}>
        {searchResults.length ? (
          <>
            <Col lg={{ span: 8, order: 1 }} md={{ span: 12, order: 2 }} xs={{ span: 12, order: 2 }}>
              <GolfClub />
            </Col>
            <Col lg={{ span: 4, order: 2 }} md={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>
              <WeatherWidget />
            </Col>
          </>
        ) : (
          <Col>
            <h3 style={{ textAlign: "center" }}>No Results to Display</h3>
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default Grid;