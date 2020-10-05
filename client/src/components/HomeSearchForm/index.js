import React, { useContext } from 'react';
import "./index.css";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/img/golf-logo-header-transparent.png";
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

function HomeSearchForm() {
  let history = useHistory();
  const { searchResults, golfClub, setGolfClub, setSearchResults } = useContext(DataAreaContext);

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setGolfClub({...golfClub, [name]: value})
  };

  const handleSignupFormSubmit = (event) => {
    event.preventDefault();

    API.findGolfClub({
      county: golfClub.county
    })
      .then(res => {
          if(res.data.length > 0 && res.data != null) {
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
        <Row>
          <Col className="search-form-col">
            <Form onSubmit={ handleSignupFormSubmit }>
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
                  name="county"
                  placeholder="Search by county"
                  aria-label="Search by county"
                  aria-describedby="basic-addon2"
                  className="search-form-input"
                />
                <InputGroup.Append>
                  <Button variant="outline-light" className="search-form-button" onClick={ handleSignupFormSubmit }>Search</Button>
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