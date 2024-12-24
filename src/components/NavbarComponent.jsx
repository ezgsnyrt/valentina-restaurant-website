import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faV } from "@fortawesome/free-solid-svg-icons";

function NavbarComponent() {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            data-bs-theme="dark"
            className="bg-body-tertiary sticky-top"
        >
            <Container>
                <Navbar.Brand href="#home" className="navigation-logo">
                    <FontAwesomeIcon
                        icon={faV}
                        size={"xl"}
                        color={"white"}
                        className="me-1"
                    />
                    <span>ALENTINA</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto navigation-menu">
                        <Nav.Link href="#about" className="nav-link-custom mb-2 mt-2">
                            About
                        </Nav.Link>
                        <Nav.Link href="#chefs" className="nav-link-custom mb-2 mt-2">
                            Chefs
                        </Nav.Link>
                        <Nav.Link href="#menu" className="nav-link-custom mb-2 mt-2">
                            Menu
                        </Nav.Link>
                        <Nav.Link href="#services" className="nav-link-custom mb-2 mt-2">
                            Services
                        </Nav.Link>
                        <Nav.Link
                            href="#reservation"
                            className="nav-link-custom mb-2 mt-2"
                        >
                            Reservation
                        </Nav.Link>
                        <Nav.Link href="#contact" className="nav-link-custom mb-2 mt-2">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;