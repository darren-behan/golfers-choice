import React, { useContext, useState } from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DataAreaContext from "../../utils/DataAreaContext";
import GolfClubModal from "../ModalGolfClub";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import API from "../../utils/API";

function GolfClub() {
  const { loggedInUserObject, searchResults, setGolfClubModal, starIconColor, setStarIconColor } = useContext(DataAreaContext);
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
    
    const golfClubId = e.target.parentNode.id;
    const loggedInUserId = loggedInUserObject.id;

    API.favoriteGolfClub({
      golfClubId: golfClubId,
      loggedInUserId: loggedInUserId
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));

  }

  // with the API, send the golfClubId and the userId
  // use a PUT request and pass through the userId
  // add below to Schema:
    // favorites: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Note"
    //   }
    // ]
  // findOneAndUpdate the golfClubId - example below:
    // db.User.findOneAndUpdate({req.id}, { $push: { favorites: id } }, { new: true }))

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
                    <span style={{ float: "right", color: "#046307", cursor: "pointer" }}>
                      <FontAwesomeIcon icon={ faStar } id={ golfClub._id } onClick={ onClickStar }/>
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