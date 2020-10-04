import React from 'react';
import './index.css';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function GolfClub() {
  return (
    <ul>
      <li>
        <Card>
          <Card.Body>
            <Card.Title>Newbridge Golf Club</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate velit non tortor porttitor viverra. Suspendisse porttitor odio id vulputate convallis. Suspendisse malesuada aliquam ipsum vitae porttitor. Maecenas pharetra erat justo, sed aliquam magna imperdiet at.
            </Card.Text>
            <Button variant="outline-dark">View more</Button>
          </Card.Body>
        </Card>
      </li>
    </ul>
  )
}

export default GolfClub;