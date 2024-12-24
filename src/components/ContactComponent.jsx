import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ContactComponent = () => {
    return (
        <section id="section-contact">
            <div className="inner-section-container">
                <h2 className="section-title">Contact Us</h2>
            </div>
            <Container className="mb-5">
                <Card className="contact-card">
                    <Row className="align-items-center">
                        <Col lg={6} className="contact-image-container">
                            <img
                                src=".././assets/contact-image.jpg"
                                alt="Contact"
                                className="img-fluid contact-image"
                            />
                        </Col>
                        <Col lg={6} className="contact-text-container">
                            <h2 className="contact-title">Get in Touch</h2>
                            <p className="contact-description">
                                We'd love to hear from you! Whether you have a
                                question about reservations, services, or
                                anything else, our team is ready to answer all
                                your questions.
                            </p>
                            <p className="contact-details">
                                <strong>Phone:</strong> +46 070 567 890
                                <br />
                                <strong>Email:</strong> contact@restaurant.com
                                <br />
                                <strong>Address:</strong> 123 Flavor Avenue,
                                Gothenburg, Sweden
                            </p>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </section>
    );
};

export default ContactComponent;

{/* <a href="https://www.vecteezy.com/free-photos/people-eating-at-restaurant">People Eating At Restaurant Stock photos by Vecteezy</a> */}