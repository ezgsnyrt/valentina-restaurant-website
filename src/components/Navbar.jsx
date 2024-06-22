import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faV } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navigation-logo">
        <FontAwesomeIcon icon={faV} size={"xl"} />
        <a href="brand">alentina</a>
      </div>
      <div className="navigation-menu">
        <ul className="navigation-links">
          <li><Link to="/./pages/">Home</Link></li>
          <li><Link to="/./pages/about">Our Story</Link></li>
          <li><Link to="/./pages/menu">Menu</Link></li>
          <li><Link to="/./pages/services">Services</Link></li>
          <li><Link to="/./pages/reservation">Reservation</Link></li>
          <li><Link to="/./pages/blog">Blog</Link></li>
          <li><Link to="/./pages/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;