import React, { useContext } from 'react';
import "./index.css";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import DataAreaContext from "../../utils/DataAreaContext";
import HomeHeader from "../HeaderHome";

function HomeSearchForm() {
  let history = useHistory();
  const { golfClub, setGolfClub, setSearchResults } = useContext(DataAreaContext);

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setGolfClub({...golfClub, [name]: value.toLowerCase()})
  };

  const handleSignupFormSubmit = (event) => {
    event.preventDefault();

    API.findGolfClub({
      county: golfClub.county
    })
      .then(res => {
          if(res.status === 200) {
            history.push("/golfclub")
          }
          setSearchResults(res.data);
        }
      )
      .catch(err => console.log(err));
  };

  return (
    <div className="hero-content">
      <Container className="search-form-container">
        <Row className="hero-header-row">
          <Col className="hero-header-col">
            <HomeHeader />
          </Col>
        </Row>
        <Row className="search-form-row">
          <Col className="search-form-col">
            <Form onSubmit={ handleSignupFormSubmit }>
              <div>
                <h4>Find your next golf club</h4>
              </div>
              <InputGroup className="mb-3">
                <FormControl
                  onChange={ handleInputChange }
                  as="select"
                  size="lg"
                  name="county"
                  placeholder="Search by county"
                  aria-label="Search by county"
                  aria-describedby="basic-addon2"
                  className="search-form-input home-search-option"
                >
                  <option value="default" selected>Search by county</option>
                  <option value="carlow">Carlow</option>
                  <option value="dublin">Dublin</option>
                  <option value="kildare">Kildare</option>
                  <option value="laois">Laois</option>
                  <option value="waterford">Waterford</option>
                  <option value="wicklow">Wicklow</option>
                </FormControl>
                <InputGroup.Append>
                  <Button variant="outline-light" className="search-form-button" onClick={ handleSignupFormSubmit }><FontAwesomeIcon icon={ faSearch }/> Search</Button>
                </InputGroup.Append>
              </InputGroup>
              <div>
                <p>Featured image: Newbridge Golf Club</p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeSearchForm;