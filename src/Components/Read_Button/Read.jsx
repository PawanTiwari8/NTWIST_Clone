import React from 'react';
import { Link } from 'react-router-dom';

// Define the ButtonLink component
const Read= ({ to, color }) => {
  const buttonStyle = {
    backgroundColor: color || '#007bff', // Default color is blue, change it as needed
    color: '#fff', // Text color is white, change it as needed
    padding: '10px 25px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <Link to={to}>
      <button style={buttonStyle}>Read More</button>
    </Link>
  );
};

// Example usage:
// <ButtonLink to="/path" color="#ff6347" />

export default Read;