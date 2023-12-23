import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import 'typeface-roboto';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="Logo-container">
        <img src="src\assets\hero.png" alt="Description" className="image" />
      </div>
      <div className='footer-bar'>
        <Link to="/link1">Home</Link>
        <Link to="/link2">About Us</Link>
        <Link to="/link3">Privacy Policy</Link>
        <Link to="/link4">Sitemap</Link>
      </div>
      <div className='Address-Container'>
      9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
      </div>
      <div className="social-icon">
        <Link to="https://example.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter}  size="1.5x" color="white"  />
        </Link>
        <Link to="https://example.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} size="1.5x" color="white" />
        </Link>
      </div>
      <div className='Address-Container'>
      © 2022. Ntwist Inc.</div>
    </footer> 
  );
};

export default Footer;