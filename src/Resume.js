import React from 'react';
import linkedinLogo from './LinkedIn_logo.webp';
import githubLogo from './GitHub_Logo.png';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <div className="header">
        <h1>My Resume</h1>
      </div>
      <div className="content">
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
        <a
          href="https://github.com/JoelTul"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          <img src={githubLogo} alt="GitHub" className="github-logo" />
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Resume;
