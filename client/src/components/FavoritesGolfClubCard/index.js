import React, { useContext, useEffect, useState } from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DataAreaContext from "../../utils/DataAreaContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {isEmpty} from "lodash";

function GolfClubCard(props) {
  const { setGolfClubModal, favorites, golfClubs, setModalShow, onClickStar } = useContext(DataAreaContext);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

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
      {favorites.includes(props.golfClub._id) ?
      <Card>
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
      :
      null
      }
    </>
  )
}


export default GolfClubCard;