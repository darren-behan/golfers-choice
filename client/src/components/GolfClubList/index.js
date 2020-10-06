import React, { useContext, useState } from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DataAreaContext from "../../utils/DataAreaContext";
import GolfClubModal from "../Modal";

function GolfClub() {
  const { searchResults, setGolfClubModal } = useContext(DataAreaContext);
  const [modalShow, setModalShow] = useState(false);

  const viewGolfClubClick = (golfClubObject) => {
    setGolfClubModal(golfClubObject);
    setModalShow(true);
  }

  return (
    <>
      {searchResults.length ? (
        <ul className="golf-club-ul">
          {searchResults.map(golfClub => (
            <li key={ golfClub._id } className="golf-club-li">
              <Card>
                <Card.Body>
                  <Card.Title> { golfClub.name.toUpperCase() } </Card.Title>
                  <Card.Text>
                  <div className="golf-club-li-description">
                    { golfClub.description }
                  </div>
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