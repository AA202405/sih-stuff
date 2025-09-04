import React from 'react';
import Navbar from './navbar';  // adjust path if needed
import './Header.css';          // your header styles here

// Import the logo image
import logo from '../assets/logo.png';  // adjust path as needed

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="KrishiSeva Logo" className="logo-image" />
        <div className="title">KrishiSeva</div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
