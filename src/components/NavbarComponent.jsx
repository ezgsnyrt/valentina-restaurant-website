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
            className="bg-body-tertiary"
        >
            <Container>
                <Navbar.Brand href="#home" className="navigation-logo">
                    <FontAwesomeIcon
                        icon={faV}
                        size={"lg"}
                        color={"white"}
                        className="me-2"
                    />
                    <span>ALENTINA</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto navigation-menu">
                        <Nav.Link href="#about" className="nav-link-custom">
                            About
                        </Nav.Link>
                        <Nav.Link href="#chefs" className="nav-link-custom">
                            Chefs
                        </Nav.Link>
                        <Nav.Link href="#menu" className="nav-link-custom">
                            Menu
                        </Nav.Link>
                        <Nav.Link href="#services" className="nav-link-custom">
                            Services
                        </Nav.Link>
                        <Nav.Link
                            href="#reservation"
                            className="nav-link-custom"
                        >
                            Reservation
                        </Nav.Link>
                        <Nav.Link href="#contact" className="nav-link-custom">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;