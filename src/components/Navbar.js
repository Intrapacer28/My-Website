import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; // Import the CSS file for Navbar styles

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">Pranav A.</Link> {/* Use Link here */}
        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li> {/* Use Link here */}
          <li><Link to="/about">About</Link></li> {/* Use Link here */}
          <li><Link to="/portfolio">Portfolio</Link></li> {/* Use Link here */}
          <li><Link to="/resume">Resume</Link></li> {/* Use Link here */}
          <li><Link to="/contact">Contact</Link></li> {/* Use Link here */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
