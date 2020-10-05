import React, { useContext } from 'react';
import './index.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DataAreaContext from "../../utils/DataAreaContext";

function GolfClub() {
  const { golfClubs } = useContext(DataAreaContext);

  return (
    <>
      {golfClubs.length ? (
        <ul>
          {golfClubs.map(golfClub => (
            <li key={ golfClub._id } className="golf-club-li">
              <Card>
                <Card.Body>
                  <Card.Title> { golfClub.name.toUpperCase() } </Card.Title>
                  <Card.Text>
                    <strong>No. of holes: </strong>{ golfClub.num_holes }
                    <br/>
                    <strong>Par: </strong>{ golfClub.par }
                  </Card.Text>
                  <Button variant="outline-dark">View more</Button>
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