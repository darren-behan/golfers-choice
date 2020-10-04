import React from 'react';
import "./index.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function HomeSearchForm() {
  return (
    <div className="hero-content">
      <Container className="search-form-container">
        <Row>
          <Col className="search-form-col">
            <h2>Find your next golf club</h2>
            <InputGroup className="mb-3">
              <InputGroup.Append>
                <div className="search-icon">
                  <FontAwesomeIcon icon={ faSearch } />
                </div>
              </InputGroup.Append>
              <FormControl
                placeholder="Search by county or town"
                aria-label="Search by county or town"
                aria-describedby="basic-addon2"
                className="search-form-input"
              />
              <InputGroup.Append>
                <Button variant="outline-light" className="search-form-button">Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeSearchForm;