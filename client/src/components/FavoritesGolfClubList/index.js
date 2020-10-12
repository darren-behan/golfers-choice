import React, { useContext } from 'react';
import './index.css';
import DataAreaContext from "../../utils/DataAreaContext";
import GolfClubModal from "../ModalGolfClub";
import GolfClubCard from "../FavoritesGolfClubCard";

function GolfClub() {
  const { favorites, modalShow, loggedInUserObject, golfClubs, setModalShow } = useContext(DataAreaContext);

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
        <h3>No Results to Display</h3>
      )}
    </>
  )
}

export default GolfClub;