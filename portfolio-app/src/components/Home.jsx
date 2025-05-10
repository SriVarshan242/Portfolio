import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import bgVideo from '../assets/portfolio-bg.mp4'; // Add video to src/assets

function Home() {
  return (
    <div className="home-video-wrapper">
      <video className="bg-video" autoPlay muted loop>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="home-overlay">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my journey, skills, and work</p>
        <button className="cta-button"><Link to="/projects">View My Projects</Link></button>
      </div>
    </div>
  );
}

export default Home;
