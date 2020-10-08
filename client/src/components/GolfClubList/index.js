import React, { useContext, useState } from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DataAreaContext from "../../utils/DataAreaContext";
import GolfClubModal from "../ModalGolfClub";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { faStar } from '@fortawesome/free-regular-svg-icons';

function GolfClub() {
  const { searchResults, setGolfClubModal, starIconColor, setStarIconColor } = useContext(DataAreaContext);
  const [modalShow, setModalShow] = useState(false);

  const viewGolfClubClick = (golfClubObject) => {
    setGolfClubModal(golfClubObject);
    setModalShow(true);
  }

  const onClickStar = (e) => {
    e.preventDefault();
    if (starIconColor) {
      setStarIconColor(false);
      e.target.style.color = '#046307';
    } else {
      setStarIconColor(true);
      e.target.style.color = '#ffa500';
    }
  }

  return (
    <>
      {searchResults.length ? (
        <ul className="golf-club-ul">
          {searchResults.map(golfClub => (
            <li key={ golfClub._id } className="golf-club-li">
              <Card>
                <Card.Body>
                  <Card.Title>
                    { golfClub.name.toUpperCase() }
                    <span style={{ float: "right", color: "#046307", cursor: "pointer" }} onClick={ onClickStar }>
                      <FontAwesomeIcon icon={ faStar } />
                    </span>
                  </Card.Title>
                  <Card.Text className="golf-club-li-description">
                    { golfClub.description }
                  </Card.Text>
                  <div style={{ textAlign: "right" }}>
                    <Button variant="outline-dark" onClick={() => viewGolfClubClick(golfClub) }>View more</Button>
                  </div>
                </Card.Body>
              </Card>
            </li>
          ))}
          <GolfClubModal show={modalShow} onHide={() => setModalShow(false)} />
        </ul>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </>
  )
}

export default GolfClub;