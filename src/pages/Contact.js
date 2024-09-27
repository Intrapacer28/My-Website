// src/pages/Contact.js
import React from 'react';
import '../globalStyles.css'; // Ensure this import is at the top
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contact-heading">Get in Touch</h1>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <h2>Email</h2>
          <a href="mailto:pranav@example.com">1234pranavgo@gmail.com</a>
        </div>
        <div className="contact-item">
          <FaPhone className="icon" />
          <h2>Phone</h2>
          <p>+91-9766644429</p>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <h2>Address</h2>
          <p>At Post Fagne, Tal. Dist. Dhule, Maharashtra, India</p>
        </div>
        <div className="contact-item">
          <FaLinkedin className="icon" />
          <h2>LinkedIn</h2>
          <a href="https://www.linkedin.com/in/pranav/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/pranav-ahire-a660b11a0</a>
        </div>
        <div className="contact-item">
          <FaGithub className="icon" />
          <h2>GitHub</h2>
          <a href="https://github.com/pranav" target="_blank" rel="noopener noreferrer">https://github.com/Intrapacer28/</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
