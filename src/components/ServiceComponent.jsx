import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function ServiceComponent () {
  return (
    <section id="section-service">
      <div className="inner-section-container">
        <h2 className="section-title">Our Services</h2>
          <CardGroup className="card-set">
            <Card className="individual-card">
              <Card.Img variant="top" src=".././assets/service-image-one.jpg" />
              <Card.Body>
                <Card.Title>Exclusive Tasting Experience</Card.Title>
                <Card.Text>
                Delight in a meticulously curated tasting menu and Chef's Signature Menu, showcasing the finest
                and most innovative dishes prepared by our expert chefs.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="individual-card">
              <Card.Img variant="top" src=".././assets/service-image-two.jpg" />
              <Card.Body>
                <Card.Title>Exquisite Fine Dining</Card.Title>
                <Card.Text>
                Experience culinary excellence in an elegant setting. Our menu features seasonal ingredients and
                gourmet dishes.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="individual-card">
              <Card.Img variant="top" src=".././assets/service-image-three.jpg" />
              <Card.Body>
                <Card.Title>Private Dining & Special Events</Card.Title>
                <Card.Text>
                Enjoy intimate gatherings in our elegantly decorated private dining rooms, complete with
                customized menus crafted to your preferences. Celebrate weddings, corporate events, and milestones
                in our stylish event spaces with the help of our dedicated event team, ensuring a flawless and memorable
                occasion.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="individual-card">
              <Card.Img variant="top" src=".././assets/service-image-four.jpg" />
              <Card.Body>
                <Card.Title>Gourmet Catering Services</Card.Title>
                <Card.Text>
                Experience our exquisite cuisine directly to your event location, offering customizable menus tailored to
                suit any occasion, ensuring a delightful culinary experience for all attendees.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
      </div>
    </section>
  )
}

export default ServiceComponent;

//<a href="https://www.vecteezy.com/free-photos/chef">Chef Stock photos by Vecteezy</a>
//<a href="https://www.vecteezy.com/free-photos/seafood">Seafood Stock photos by Vecteezy</a>
//<a href="https://www.vecteezy.com/free-photos/ai-generated">Ai Generated Stock photos by Vecteezy</a>
//<a href="https://www.vecteezy.com/free-photos/white">White Stock photos by Vecteezy</a>