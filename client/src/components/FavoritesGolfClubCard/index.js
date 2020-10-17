import React, { useContext } from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DataAreaContext from "../../utils/DataAreaContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function GolfClubCard(props) {
  const { setGolfClubModal, setModalShow, onClickStar } = useContext(DataAreaContext);

  const viewGolfClubClick = (golfClubObject) => {
    setGolfClubModal(golfClubObject);
    setModalShow(true);
  }

  function FavoritedStar() {
    return  <span style={{ float: "right", color: "#ffa500", cursor: "pointer" }}>
              <FontAwesomeIcon icon={ faStar } id={ props.golfClub._id } onClick={(e) => onClickStar(e) }/>
            </span>
  }
  
  return (
    <>
      <Card>
        <Card.Img variant="top" src={ props.golfClub.image }/>
        <Card.Body>
          <Card.Title>
            { props.golfClub.name }
            <FavoritedStar /> 
          </Card.Title>
          <Card.Text className="golf-club-li-description">
            { props.golfClub.description }
          </Card.Text>
          <div style={{ textAlign: "right" }}>
            <Button variant="outline-dark" onClick={() => viewGolfClubClick(props.golfClub) }>View more</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}


export default GolfClubCard;