import React from 'react';
import '../styles/Skills.css';

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React.js', level: 80 },
  { name: 'Spring Boot', level: 75 },
  { name: 'MySQL', level: 80 },
  { name: 'Git & GitHub', level: 85 },
  { name: 'Tailwind CSS', level: 70 },
];

function Skills() {
  return (
    <div className="skills-container">
      <h1>My Skills</h1>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-title">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
