// src/pages/Portfolio.js
import React from 'react';
import Slider from 'react-slick';
import '../globalStyles.css'; // Ensure this import is at the top

const projects = [
  {
    title: 'Tenor-GIF-Ranking-Automation',
    description: 'Developed a React App after studying the GIF ranking logic.',
    technologies: ['React', 'Node.js'],
    repoLink: 'https://github.com/Intrapacer28/Gif-Ranking-Automation',
    image: './assets/project1.jpg'
  },
  {
    title: 'Person Detection and Tracking',
    description: 'Developed an application which detects, classifies, and tracks people.',
    technologies: ['Python', 'pytorch', 'Yolov5'],
    repoLink: 'https://github.com/Intrapacer28/CogniAble-Assignment',
    image: './assets/project2.jpg'
  },
  {
    title: 'Discord-Python-Automation',
    description: 'Developed a Discord Bot and automated it with Python and MySQL.',
    technologies: ['Python', 'Discord', 'MySQL'],
    repoLink: 'https://github.com/Intrapacer28/Discord-Python-Automation',
    image: './assets/project3.jpg'
  },
  {
    title: 'Reminder-React-App',
    description: 'Developed a reminder application with various functionalities.',
    technologies: ['React', 'Node.js', 'CSS'],
    repoLink: 'https://github.com/Intrapacer28/Reminder-React-App',
    image: './assets/project4.jpg'
  },
  {
    title: 'Data-Scraping-with-Python',
    description: 'Performed scraping on fashion sites like Pryka to collect data.',
    technologies: ['Python', 'Selenium'],
    repoLink: 'https://github.com/Intrapacer28/Data-Scraping-using-Python',
    image: './assets/project5.jpg'
  },
  {
    title: 'Text-analysis-Python',
    description: 'Performed text analysis on specific Excel data using Python.',
    technologies: ['Python', 'NLTK'],
    repoLink: 'https://github.com/Intrapacer28/Text-Analysis-with-Python',
    image: './assets/project6.jpg'
  }
];

function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <div className="slick-arrow slick-prev">‹</div>,
    nextArrow: <div className="slick-arrow slick-next">›</div>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="portfolio-page">
      <h1 className="portfolio-heading">My Projects</h1>
      <Slider {...settings} className="projects-slider">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
              <a href={project.repoLink} className="button" target="_blank" rel="noopener noreferrer">Show Code</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Portfolio;
