import React, { useContext } from 'react';
import "./index.css";
import Logo from "../../assets/img/golf-logo-header-transparent.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import DataAreaContext from "../../utils/DataAreaContext";

function HomeSearchForm() {
  const { golfClub, setGolfClub } = useContext(DataAreaContext);

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { value } = event.target;
    setGolfClub({...golfClub, value})
  };

  return (
    <div className="hero-content">
      <Container className="search-form-container">
        <Row>
          <Col className="search-form-col">
            <div>
              <a href="home">
                <img src={ Logo } alt="logo"></img>
              </a>
            </div>
            <div>
              <h2>Find your next golf club</h2>
            </div>
            <InputGroup className="mb-3">
              <InputGroup.Append>
                <div className="search-icon">
                  <FontAwesomeIcon icon={ faSearch } />
                </div>
              </InputGroup.Append>
              <FormControl
                onChange={ handleInputChange }
                placeholder="Search by course or county"
                aria-label="Search by course or county"
                aria-describedby="basic-addon2"
                className="search-form-input"
              />
              <InputGroup.Append>
                <Button variant="outline-light" className="search-form-button">Search</Button>
              </InputGroup.Append>
            </InputGroup>
            <div>
              <p>Featured image: Newbridge Golf Club</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeSearchForm;