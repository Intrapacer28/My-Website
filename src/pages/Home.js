import React from 'react';
import '../globalStyles.css';
import backgroundVideo from '../assets/new-bg.mp4';
import backgroundGif from '../assets/home.jpg';

function Home() {
  const textLines = [
    "Welcome to my PORTFOLIO,",
    "I am Pranav, A NET-Ninja..."
  ];

  return (
    <div className="home-page">
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img className="background-gif" src={backgroundGif} alt="Background GIF" />

      {/* Display the welcoming text */}
      <div className="welcoming-text">
        {textLines.map((line, lineIndex) => (
          <div key={lineIndex} className="line">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
