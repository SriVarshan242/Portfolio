import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // For icons
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h1>Contact Me</h1>
        <p>Feel free to reach out to me via email, phone, or connect on my social media profiles!</p>
        
        <div className="contact-details">
          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <a href="tel:+918778017360">+91 8778017360</a>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <a href="mailto:varshansri0123@gmail.com">varshansri0123@gmail.com</a>
          </div>
        </div>

        <div className="social-links">
          <a href="https://github.com/SriVarshan242" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/sri-varshan-606595284" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
