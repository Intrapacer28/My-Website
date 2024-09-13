import React from 'react';
import resumePDF from '../assets/Pranav-Resume.pdf'; // Adjust path as needed

function Resume() {
  return (
    <div className="resume-page">
      <h1 className="resume-heading">My Resume</h1>
      <p className="resume-intro">
        Below you can download my resume to learn more about my professional background and skills. Feel free to reach out if you have any questions or opportunities.
      </p>
      <div className="resume-link">
        <a href={resumePDF} download>Download Resume</a>
      </div>
    </div>
  );
}

export default Resume;
