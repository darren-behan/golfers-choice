import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeroImage from '../assets/img/home-hero.jpg';
import HomeSearchForm from "../components/FormHome";
import DeleteAccountModal from "../components/ModalDeleteAccount";

function Login() {

  const RowStyles ={
    backgroundImage: 'url(' + HeroImage + ')',
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    margin: 0
  };

  return (
    <>
      <Row className="hero-home-row" style={ RowStyles }>
        <Col className="hero-home-col" md={12}>
          <HomeSearchForm />
          <DeleteAccountModal />
        </Col>
      </Row>
    </>
  )
}

export default Login;