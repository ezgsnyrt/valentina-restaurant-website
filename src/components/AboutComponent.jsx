import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function AboutComponent () {
  return (
    <section id="section-about">
      <h2 className="section-title">About Valentina</h2>
      <Container className="section-container">
        <Row className="bottom-section-container">
          <Col className="inner-container-left">
            <h4 className="section-subtitle">The Art of Culinary Expression </h4>
            <p className="section-explanation">At Valentina, an exclusive dining experience awaits you.
            Here, the bold Italian cuisine menu comes to life with an exceptionally elegant decoration. </p>
            <p className="section-explanation">Discover Valentina, where you can experience the richness of Italian
            cuisine in its most magnificent form; a place where grand design, elegance, and culinary tradition come
            together in perfect harmony. Every detail is designed to make your visit unforgettable and leave you with
            lasting memories. </p>
            <p className="section-explanation">Valentina invites you to enjoy a unique menu crafted with Italian ingredients and
            savor an extraordinary Italian dining experience in this splendid atmosphere with your loved ones. </p>
            <p className="section-explanation">Experience Valentina's bold Italian cuisine featuring meticulously crafted dishes
            using high-quality ingredients and robust, authentic flavors that cater to diverse tastes. Alongside our exquisite
            meals, savor our signature cocktails! With three distinguished locations across Sweden, gourmet dining is always just
            around the corner.</p>
            <Button variant="primary">LEARN MORE</Button>{' '}
          </Col>
          <Col className="inner-container-right">
            <Image className="container-image" src=".././assets/about-image-one.jpg" fluid />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutComponent;

// <a href="https://www.vecteezy.com/free-photos/person">Person Stock photos by Vecteezy</a>
// Photo by <a href="https://unsplash.com/@thibaultpenin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Thibault Penin</a> on <a href="https://unsplash.com/photos/brown-pendant-light-uqd-Eq1_TtE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
