// src/pages/Home.js
import React from 'react';
import '../globalStyles.css'; // Ensure this import is at the top

// Import the new background video file
import backgroundVideo from '../assets/new-bg.mp4'; // Replace with your new video file path

// Import the GIF file
import backgroundGif from '../assets/home-bg.gif';

function Home() {
  return (
    <div className="home-page">
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img className="background-gif" src={backgroundGif} alt="Background GIF" />
    </div>
  );
}

export default Home;
