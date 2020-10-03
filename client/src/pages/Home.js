import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import HeroImage from '../assets/img/home-hero.jpg';

function Login() {
  const styles ={
    backgroundImage: 'url(' + HeroImage + ')'
  };

  return (
    <Jumbotron fluid style={ styles }>
      <Container>
        <h2>Golfers Choice</h2>
      </Container>
    </Jumbotron>
  )
}

export default Login;