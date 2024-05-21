import React from 'react';
import linkedinLogo from './LinkedIn_logo.webp';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <h1>My Resume</h1>
      <p>Here is the content of my resume.</p>
      <a
        href="https://www.linkedin.com/in/joel-tulanowski"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-button"
      >
        <img src={linkedinLogo} alt="LinkedIn" className="linkedin-logo" />
        LinkedIn
      </a>
    </div>
  );
}

export default Resume;
