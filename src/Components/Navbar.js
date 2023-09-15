import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import CSS styles
import LanguageSelector from './LanguageSeclector';

// Import 'Link' component from 'react-router-dom' for navigation

function Navbar() {
  return (
    <nav className="navbar">
      {/* Navigation Links */}
      <ul className="nav-list">
        <li className="nav-item">
          {/* Link to the Home page */}
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          {/* Link to the About Us page */}
          <Link to="/about" className="nav-link">About Us</Link>
        </li>
        
      </ul>
      
      {/* Language Selector Component */}
      <LanguageSelector />
    </nav>
  );
}

export default Navbar;
