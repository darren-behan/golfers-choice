import React, { useContext, useState } from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DataAreaContext from "../../utils/DataAreaContext";
import GolfClubModal from "../GolfClubModal";

function GolfClub() {
  const { searchResults, golfClubs, setGolfClubModal } = useContext(DataAreaContext);
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
                    <strong>No. of holes: </strong>{ golfClub.num_holes }
                    <br/>
                    <strong>Par: </strong>{ golfClub.par }
                  </Card.Text>
                  <Button variant="outline-dark" onClick={() => viewGolfClubClick(golfClub) }>View more</Button>
                  <GolfClubModal show={modalShow} onHide={() => setModalShow(false)} />
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </>
  )
}

export default GolfClub;