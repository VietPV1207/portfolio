import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Viet Portfolio. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:your.email@example.com">Email</a>
      </div>
    </footer>
  );
}

export default Footer;
