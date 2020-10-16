import React, { useContext, useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeroImage from '../assets/img/home-hero.jpg';
import HomeSearchForm from "../components/FormHome";
import DeleteAccountModal from "../components/ModalDeleteAccount";
import DataAreaContext from "../utils/DataAreaContext";

function Login() { 
  const { golfClubs, loadGolfClubs } = useContext(DataAreaContext);
  const [images, setImages] = useState([]);
  const [imagePath, setImagePath] = useState('url(' + HeroImage + ')');

  useEffect(() => {
    loadGolfClubs();
  }, []);

  function f1() {
    golfClubs.forEach(golfClub => {
      let image = "";
      image = golfClub.image;
      setImages(`"url(${image})"`);
    });
    // for (let i = 0; i < golfClubs.length; i++) {
    //   let image = "";
    //   image = golfClubs.image[i];
    //   setImagePath(`"url(${image})"`);
    // }
  }
  // setTimeout(f1, 5000);

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