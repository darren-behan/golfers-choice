import React, { useContext } from 'react';
import './index.css';
import DataAreaContext from "../../utils/DataAreaContext";
import GolfClubModal from "../ModalGolfClub";
import GolfClubCard from "../GolfClubCard";
import JoinModal from "../ModalJoin";

function GolfClub() {
  const { searchResults, modalShow, setModalShow, joinModalShow, setJoinModalShow, filterValue } = useContext(DataAreaContext);
  
  return (
    <>
      <ul className="golf-club-ul">
        {searchResults.map(golfClub => 
          golfClub.name.includes(filterValue.toLowerCase())
          ?
          (
          <li key={ golfClub._id } className="golf-club-li golf-club-li-main">
            <GolfClubCard 
              golfClub={ golfClub }
            />
          </li>
          ) : 
          null
          )
        }
        <GolfClubModal show={modalShow} onHide={() => setModalShow(false)} />
        <JoinModal show={joinModalShow} onHide={() => setJoinModalShow(false)} />
      </ul>
    </>
  )
}

export default GolfClub;