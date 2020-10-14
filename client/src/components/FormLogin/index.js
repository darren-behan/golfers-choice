import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './index.css';
import API from "../../utils/API";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Logo from "../../assets/img/golf-logo-header.jpg";
import DataAreaContext from "../../utils/DataAreaContext";

function LoginForm() {
  const { loggedInUserObject, setIsAuthenticated, setLoggedInUserObject, loginErrResStatus, setLoginErrResStatus } = useContext(DataAreaContext);

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setLoggedInUserObject({...loggedInUserObject, [name]: value})
  };

  const handleSignupFormSubmit = (event) => {
    event.preventDefault();

    API.loginUser({
      email: loggedInUserObject.email,
      password: loggedInUserObject.password
    })
      .then((res) => setLoggedInUserObject(res.data))
      .then(() => setIsAuthenticated(true))
      .catch(err => setLoginErrResStatus(err.response.status));
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
            <h2 style={{color: '#697684', fontWeight: 400}}>Sign in</h2>
          </Col>
          <Col sm={12}>
            <Form pt={20} onSubmit={handleSignupFormSubmit}>
              <Form.Group as={Row} id="formHorizontalEmail">
                <Col sm={12}>
                  <Form.Control 
                    onChange={handleInputChange}
                    type="email" 
                    name="email"
                    placeholder="Email" 
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} id="formHorizontalPassword">
                <Col sm={12}>
                  <Form.Control 
                    onChange={handleInputChange}
                    type="password"
                    name="password"
                    placeholder="Password" 
                  />
                </Col>
              </Form.Group>

              {loginErrResStatus === 401 ? (
                <div>Invalid username or password, please try again</div>
              ) : (
                <>
                  { setLoginErrResStatus(false) }
                </>
              )}

              <Form.Group as={Row}>
                <Col sm={{ span: 10 }}>
                  <Button variant="outline-dark" type="submit">Sign in</Button>
                </Col>
              </Form.Group>


            </Form>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginForm;