// src/pages/Home.js
import React from 'react';
import '../globalStyles.css'; // Ensure this import is at the top

// Import the video file
import backgroundVideo from '../assets/home-bg.mp4';

function Home() {
  return (
    <div className="home-page">
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Yo, I am Pranav</h1>
        <p className="typing-animation">Exploring the World of Code</p>
      </div>
    </div>
  );
}

export default Home;
