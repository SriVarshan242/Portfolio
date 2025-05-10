import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="intro">
        <h1>Hi, I'm <span>Sri Varshan</span></h1>
        <h2>Aspiring Full Stack Developer</h2>
        <p>
          I’m currently pursuing my B.E. in Computer Science at Sri Krishna College of Engineering and Technology. I’m driven by a deep passion for building modern, scalable web applications that combine elegant design and robust functionality.
        </p>
      </div>

      <div className="section">
        <h3>🎓 Education</h3>
        <ul>
          <li><strong>Sri Krishna College of Engineering and Technology</strong> – B.E. CSE, CGPA: 8.52 (2027)</li>
          <li><strong>Bharathi Vidya Bhavan Hr. Sec. School</strong> – Class XII, 95.5% (2023)</li>
        </ul>
      </div>

      <div className="section">
        <h3>🌟 My Goal</h3>
        <p>
          My ultimate ambition is to become a professional Full Stack Developer. I aim to master both frontend and backend technologies, work on real-world scalable systems, and contribute to innovative tech solutions that make a meaningful impact.
          I’m particularly interested in cloud deployment, system architecture, and delivering seamless user experiences.
        </p>
      </div>

      <div className="section">
        <h3>🏅 Achievements</h3>
        <ul>
          <li>Finalist – GDGC Hackathon 2025</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
