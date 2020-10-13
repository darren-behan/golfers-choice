import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './index.css';
import API from "../../utils/API";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Logo from "../../assets/img/golf-logo-header.jpg";
import DataAreaContext from "../../utils/DataAreaContext";

function SignUpForm() {
  const { newUserObject, validated, setNewUserObject, setValidated, setIsAuthenticated, setLoggedInUserObject } = useContext(DataAreaContext);

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewUserObject({...newUserObject, [name]: value})
  };

  const handleSignupFormSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    API.createUser({
      first_name: newUserObject.first_name,
      last_name: newUserObject.last_name,
      email: newUserObject.email,
      username: newUserObject.username,
      password: newUserObject.password
    })
      .then((res) => setLoggedInUserObject(res.data))
      .then(() => setIsAuthenticated(true))
      .catch(err => console.log(err));
  };

  return (
    <Container fluid="sm" className="p-5">
      <Row className="p-2">
        <Col className="p-2" style={{ backgroundColor: "#fff", borderRadius: "5px", boxShadow: "5px 5px 5px #046307" }}>
          <Col sm={12} style={{ textAlign: "center" }}>
            <Link to="home">
              <img src={ Logo } alt="logo"></img>
            </Link>
          </Col>
          <Col className="pt-3" sm={12}>
            <h2 style={{color: '#697684', fontWeight: 400}}>Create account</h2>
          </Col>
          <Col sm={12}>
            <Form pt={20} noValidate validated={validated} onSubmit={handleSignupFormSubmit}>
              <Form.Group as={Row} id="validationCustom01">
                <Col sm={12}>
                  <Form.Control
                    onChange={handleInputChange}
                    required
                    name="first_name"
                    value={ newUserObject.first_name }
                    type="text"
                    placeholder="First name"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group as={Row} id="validationCustom02">
                <Col sm={12}>
                  <Form.Control
                    onChange={handleInputChange}
                    required
                    name="last_name"
                    value={ newUserObject.last_name }
                    type="text"
                    placeholder="Last name"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} id="formHorizontalEmail">
                <Col sm={12}>
                  <Form.Control 
                    onChange={handleInputChange} 
                    name="email"
                    value={ newUserObject.email } 
                    type="email" 
                    placeholder="Email" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} id="validationCustomUsername">
                <InputGroup>
                  <Col sm={12}>
                    <Form.Control
                      onChange={handleInputChange}
                      name="username"
                      value={ newUserObject.username }
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a username.
                    </Form.Control.Feedback>
                  </Col>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Row} id="formHorizontalPassword">
                <Col sm={12}>
                  <Form.Control 
                    onChange={handleInputChange} 
                    name="password" 
                    value={ newUserObject.password }
                    type="password" 
                    placeholder="Password" />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm={{ span: 10 }}>
                  <Button variant="outline-dark" type="submit">Create account</Button>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default SignUpForm;