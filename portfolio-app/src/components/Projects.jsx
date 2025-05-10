
import React, { useState } from 'react';
import '../styles/Projects.css';
import bgVideo from '../assets/projects-bg1.mp4';

const projects = [
  {
    title: 'Comprehensive Healthcare Management System',
    tech: ['Spring Boot', 'React', 'MySQL', 'REST API'],
    description:
      'Developed a full-stack healthcare system to manage patients, doctors, appointments, and prescriptions with RESTful APIs and seamless frontend-backend interaction.',
  },
  {
    title: 'Notes App',
    tech: ['React', 'Vite', 'Tailwind CSS', 'MongoDB'],
    description:
      'Created a secure notes application with authentication, responsive design using Tailwind CSS, and full CRUD functionality connected to MongoDB.',
  },
  {
    title: 'Food Management Platform',
    tech: ['React', 'Spring Boot', 'MySQL'],
    description:
      'Designed a real-time food donation and waste tracking system with intuitive UI and secure backend operations.',
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="projects-section">
      <div className="projects-left">
        <h1>My Projects</h1>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => setActiveProject(project)}
            >
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="projects-right">
        <video autoPlay muted loop>
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {activeProject && (
        <div className="project-modal" onClick={() => setActiveProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{activeProject.title}</h2>
            <p>{activeProject.description}</p>
            <h4>Tech Stack:</h4>
            <ul>
              {activeProject.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <button onClick={() => setActiveProject(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
