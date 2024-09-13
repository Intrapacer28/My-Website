// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file for Navbar styles

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">Pranav A.</a>
        <ul className="nav-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/resume">Resume</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
