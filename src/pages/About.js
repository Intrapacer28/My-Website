// src/pages/About.js
import React from 'react';
import '../globalStyles.css'; // Ensure this import is at the top
import { FaCogs, FaLightbulb, FaCode } from 'react-icons/fa'; // Importing icons

function About() {
  return (
    <div className="about-page">
      <div className="text">
        <h1 className="about-heading">About Me</h1>
        <p className="about-description">
          I'm Pranav Ahire, a passionate innovator in software engineering. Let's dive into the details when we connect!
        </p>
        <div className="icons">
          <div className="icon-item">
            <FaCogs className="icon" />
            <p>Tech Enthusiast</p>
          </div>
          <div className="icon-item">
            <FaLightbulb className="icon" />
            <p>Creative Problem Solver</p>
          </div>
          <div className="icon-item">
            <FaCode className="icon" />
            <p>Full-Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
