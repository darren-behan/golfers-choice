import React, { useContext } from 'react';
import './index.css';
import DataAreaContext from "../../utils/DataAreaContext";
import GolfClubModal from "../ModalGolfClub";
import GolfClubCard from "../FavoritesGolfClubCard";
import Col from 'react-bootstrap/Col';

function GolfClub() {
  const { favorites, modalShow, golfClubs, setModalShow } = useContext(DataAreaContext);

  return (
    <>
      {favorites.length || favorites === undefined ? (
        <ul className="golf-club-ul">
          {golfClubs.map(golfClub => 
            <li key={ golfClub._id } className="golf-club-li">
              <GolfClubCard 
                golfClub={ golfClub }
              />
            </li>
          )}
          <GolfClubModal show={modalShow} onHide={() => setModalShow(false)} />
        </ul>
      ) : (
        <Col>
          <h3 style={{ textAlign: "center" }}>No Results to Display</h3>
        </Col>
      )}
    </>
  )
}

export default GolfClub;