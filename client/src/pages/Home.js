import React, { useContext, useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeroImage from '../assets/img/home-hero.jpg';
import HomeSearchForm from "../components/FormHome";
import DeleteAccountModal from "../components/ModalDeleteAccount";
import DataAreaContext from "../utils/DataAreaContext";

function Login() { 
  const { golfClubs } = useContext(DataAreaContext);
  const [imagePath, setImagePath] = useState('url(' + HeroImage + ')');

  useEffect(() => {
    // setTimeout(f1, 1000);
  }, [golfClubs]);

  function f1() {
    // golfClubs.forEach(golfClub => {
    //   let image = "";
    //   image = golfClub.image;
    //   setImages(`"url(${image})"`);
    // });
    console.log(golfClubs);
    for (let i = 0; i < golfClubs.length; i++) {
      let image = "";
      image = golfClubs[i].image;
      setImagePath(`"url(${image})"`);
    }
  }
  

  const RowStyles ={
    backgroundImage: imagePath,
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