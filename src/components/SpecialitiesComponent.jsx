import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import React, { useEffect, useRef } from 'react';

let cards = document.querySelectorAll('.image-card')

cards.forEach(card => card.addEventListener('click', () => {
  cards.forEach(card => card.classList.remove('active'));
  card.classList.add('active');
}));


function SpecialitiesComponent () {
  return (
    <section id="section-specialities">
      <div className="inner-section-container">
        <h2 className="section-title">Our Specialities</h2>
      </div>
      <Container>
          <Row>
            <Col>1 of 1</Col>
          </Row>
          <Row className="bottom-row">
            <Col className="bottom-col">
            <article className="image-card active">
              <Image className="individual-image" src=".././assets/service-image-three.jpg"  alt="chef" />
              <div className="image-card-details">
                <div className="card-profile">
                  <Image src=".././assets/service-image-two.jpg"  alt="user" fluid />
                </div>
                <div className="card-profile-info">
                  <h2>Food Name</h2>
                  <p>Image description here</p>
                </div>
              </div>
            </article>
            <article className="image-card active">
              <Image className="individual-image" src=".././assets/service-image-one.jpg"  alt="chef" />
              <div className="image-card-details">
                <div className="card-profile">
                  <Image src=".././assets/service-image-two.jpg"  alt="user" fluid />
                </div>
                <div className="card-profile-info">
                  <h2>Food Name</h2>
                  <p>Image description here</p>
                </div>
              </div>
            </article>
            <article className="image-card active">
              <Image className="individual-image" src=".././assets/service-image-one.jpg"  alt="chef" />
              <div className="image-card-details">
                <div className="card-profile">
                  <Image src=".././assets/service-image-two.jpg"  alt="user" fluid />
                </div>
                <div className="card-profile-info">
                  <h2>Food Name</h2>
                  <p>Image description here</p>
                </div>
              </div>
            </article>
            </Col>
          </Row>
      </Container>
    </section>
  )
}

export default SpecialitiesComponent;