import React from 'react';
import './Header.css'; // Import the CSS file with styles
import { Link } from 'react-router-dom';
import 'typeface-roboto';
const Header = ({ isScrolled }) => {
  const logoImage = isScrolled ? 'https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png' : 'https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png';
  const linkColor = isScrolled ? '#003358' : '#ffffff'; // Change the colors as needed
  return (
    <header className={`header ${isScrolled ? 'sticky' : ''}`}>
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
      <div className="navigation">
      <Link to="/" style={{ color: linkColor }}>Home</Link>
      <Link to="/about" style={{ color: linkColor }}>Industries</Link>
      <Link to="/contact" style={{ color: linkColor }}>AI Software</Link>
      <Link to="/contact" style={{ color: linkColor }}>Blog</Link>
      <Link to="/contact" style={{ color: linkColor }}>Contact Us</Link>
      </div>
    </header>
  );
};

export default Header;