import React, { useContext, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import './index.css';
import API from "../../utils/API";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Logo from "../../assets/img/golf-logo-header.jpg";
import DataAreaContext from "../../utils/DataAreaContext";

function ResetPasswordForm() {
  let history = useHistory();
  const { loggedInUserObject, updatePasswordUserObject, setIsAuthenticated, setUpdatePasswordUserObject } = useContext(DataAreaContext);

  // This is used to store the status of the error when a USER attempts to reset their password
  const [resetPasswordErrResStatus, setResetPasswordErrResStatus] = useState(200);

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setUpdatePasswordUserObject({...updatePasswordUserObject, [name]: value})
  };

  const handleResetPasswordFormSubmit = (event) => {
    event.preventDefault();
    if (updatePasswordUserObject.oldPassword === updatePasswordUserObject.newPassword) {
      alert("Old & new password can't match. Please ensure you're new password is different!");
    } else {
      API.updateUser({
        id: loggedInUserObject.id,
        oldPassword: updatePasswordUserObject.oldPassword,
        newPassword: updatePasswordUserObject.newPassword
      })
        .then((res) => {
          if(res.status === 200) {
            history.push("/home")
          }
        })
        .then(() => setIsAuthenticated(true))
        .catch(err => setResetPasswordErrResStatus(err.response.status));
    }
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
            <h2 style={{color: '#697684', fontWeight: 400}}>Reset Password</h2>
          </Col>
          <Col sm={12}>
            <Form pt={20} onSubmit={handleResetPasswordFormSubmit}>
              <Form.Group as={Row} id="formHorizontalPassword">
                <Col sm={12}>
                  <Form.Control 
                    onChange={handleInputChange}
                    type="password" 
                    name="oldPassword"
                    placeholder="Enter your old password" 
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} id="formHorizontalPassword">
                <Col sm={12}>
                  <Form.Control 
                    onChange={handleInputChange}
                    type="password"
                    name="newPassword"
                    placeholder="Enter your new password" 
                  />
                </Col>
              </Form.Group>

              {resetPasswordErrResStatus === 422 ? (
                <div>Your existing password is incorrect. For security reasons, this is required to match in order to proceed in updating your password. Please try again</div>
              ) : (
                null
              )}

              <Form.Group as={Row} style={{ textAlign: "right" }}>
                <Col sm={{ span: 12 }}>
                  <Button variant="outline-dark" type="submit">Reset Password</Button>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default ResetPasswordForm;