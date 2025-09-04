// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css'; // Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/community">Community</a></li>
        <li><a href="/query">Raise Query</a></li>
        <li><a href="/notices">Notices</a></li>
        <li><a href="/farmplan">Farm Planning</a></li>
        <li><a href="/discheck">Disease Checking</a></li>
        <li><a href="/retail">Retail Connect</a></li>
        <li><a href="/loginsignup">Log In/Sign Up</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
