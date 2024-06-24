import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faSquareInstagram, faSquareYoutube} from '@fortawesome/free-brands-svg-icons';


function ChefComponent () {
  return(
    <section id="section-chef">
      <h2 className="section-title">Master Chefs</h2>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src=".././assets/chef-image-one.jpg" />
        <Card.Body>
          <Card.Title>Luca Bianchi</Card.Title>
          <Card.Text>
            Executive Chef
          </Card.Text>
          <Card.Text>
            <FontAwesomeIcon icon={faFacebookF} size={"xl"} color={"black"} />
            <FontAwesomeIcon icon={faSquareInstagram} size={"xl"} color={"black"} />
            <FontAwesomeIcon icon={faSquareYoutube} size={"xl"} color={"black"} />
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src=".././assets/chef-image-two.jpg" />
        <Card.Body>
          <Card.Title>Marco Rossi</Card.Title>
          <Card.Text>
            Kitchen Leader
          </Card.Text>
          <Card.Text>
            <FontAwesomeIcon icon={faFacebookF} size={"xl"} color={"black"} />
            <FontAwesomeIcon icon={faSquareInstagram} size={"xl"} color={"black"} />
            <FontAwesomeIcon icon={faSquareYoutube} size={"xl"} color={"black"} />
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src=".././assets/chef-image-three.jpg" />
        <Card.Body>
          <Card.Title>Isabella Romano</Card.Title>
          <Card.Text>
            Pastry Chef
          </Card.Text>
          <Card.Text>
            <FontAwesomeIcon icon={faFacebookF} size={"xl"} color={"black"} />
            <FontAwesomeIcon icon={faSquareInstagram} size={"xl"} color={"black"} />
            <FontAwesomeIcon icon={faSquareYoutube} size={"xl"} color={"black"} />
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src=".././assets/chef-image-four.jpg" />
        <Card.Body>
          <Card.Title>Alessandro Moretti</Card.Title>
          <Card.Text>
            Commis Chef
          </Card.Text>
          <Card.Text>
            <FontAwesomeIcon icon={faFacebookF} size={"xl"} color={"black"} />
            <FontAwesomeIcon icon={faSquareInstagram} size={"xl"} color={"black"} />
            <FontAwesomeIcon icon={faSquareYoutube} size={"xl"} color={"black"} />
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </section>
  );
}

export default ChefComponent;

// <a href="https://www.vecteezy.com/free-photos/man">Man Stock photos by Vecteezy</a>
// <a href="https://www.vecteezy.com/free-photos/smiling">Smiling Stock photos by Vecteezy</a>
// <a href="https://www.vecteezy.com/free-photos/woman-chef">Woman Chef Stock photos by Vecteezy</a>
//<a href="https://www.vecteezy.com/free-photos/women-chef">Women Chef Stock photos by Vecteezy</a>

