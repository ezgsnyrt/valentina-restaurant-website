import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faV } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="navigation-logo">
          <FontAwesomeIcon icon={faV} size={"lg"} color={"white"} className="me-2" />
          <span>ALENTINA</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navigation-menu">
            <Nav.Link as={Link} to="/./pages/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/./pages/about" className="nav-link-custom">Our Story</Nav.Link>
            <Nav.Link as={Link} to="/./pages/menu" className="nav-link-custom">Menu</Nav.Link>
            <Nav.Link as={Link} to="/./pages/services" className="nav-link-custom">Services</Nav.Link>
            <Nav.Link as={Link} to="/./pages/reservation" className="nav-link-custom">Reservation</Nav.Link>
            <Nav.Link as={Link} to="/./pages/contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;