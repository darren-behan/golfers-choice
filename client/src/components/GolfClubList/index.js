import React, { useContext } from 'react';
import './index.css';
import DataAreaContext from "../../utils/DataAreaContext";
import GolfClubModal from "../ModalGolfClub";
import GolfClubCard from "../GolfClubCard";

function GolfClub() {
  const { searchResults, modalShow, setModalShow } = useContext(DataAreaContext);

  return (
    <>
      {searchResults.length ? (
        <ul className="golf-club-ul">
          {searchResults.map(golfClub => (
            <li key={ golfClub._id } className="golf-club-li">
              <GolfClubCard 
                golfClub={ golfClub }
              />
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