import React , { useState, useEffect }from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';


export default function Bouquet(props) {

  const [isBooked, setIsBooked] = useState(false);
  const handleBooking = () => {
    // Call a function to handle the booking here
    console.log(`Booked Bouquet ${props.id}`);
    setIsBooked(true);
    props.onBooked(props.id);
    localStorage.setItem("Bouquet_id",props.id)
  };
  return (
    <div>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Color: {props.color}</ListGroup.Item>
        <ListGroup.Item>Price: {props.price} BD</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Text>
        <a href="#" variant="light" onClick={handleBooking} class={`btn ${isBooked ? 'btn-success' : 'btn-light'}`} disabled={isBooked} style={{position: "relative", bottom: "0", width: "100%", fontSize: "1.2rem"}}>
  {isBooked ? 'Booked' : 'Book'}
</a>
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  );
}
