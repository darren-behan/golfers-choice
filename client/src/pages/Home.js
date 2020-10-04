import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeroImage from '../assets/img/home-hero.jpg';
import HomeSearchForm from "../components/HomeSearchForm";
import Grid from "../components/Grid";

function Login() {
  const RowStyles ={
    backgroundImage: 'url(' + HeroImage + ')',
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    margin: 0
  };

  return (
    <Row style={ RowStyles }>
      <Col className="md-12">
        <HomeSearchForm />
        <Grid>
          
        </Grid>
      </Col>
    </Row>
  )
}

export default Login;