import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Navbar1.css';

const categories = [
  { name: 'ABOUT US', path: '/' },
  { name: 'STORY', path: '/StoryPage' },
  { name: 'FRONTPAGE', path: '/frontpage' },
  { name: 'FOOTAGE', path: '/footage' },
  { name: 'TONES', path: '/tones' },
  { name: 'TALES', path: '/nodge' },
  { name: 'SHOTS', path: '/shots' },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <Link to="/" className="navbar-brand" onClick={() => handleNavigation('/')}>
        <img src={require('../img/hero/NODGE LOGO.png')} alt="Logo" />
      </Link>
      <button className="hamburger" onClick={toggleMenu}>
        <div className="hamburger-icon-wrapper">
          <img className="hamburger-icon" src={require('../img/hero/LOGO GRAM WARNA-01.png')} alt="Menu" />
          <img className="hamburger-icon-rotated" src={require('../img/hero/LOGO GRAM WARNA-01.png')} alt="Menu Rotated" />
        </div>
      </button>
      {isMenuOpen && (
  <div className="menu-overlay menu-open">
    <div className="vertical-menu">
      {categories.map((category, index) => (
        <div
          key={index}
          className="vertical-menu-item"
          onClick={() => handleNavigation(category.path)}
        >
          {category.name}
        </div>
      ))}
    </div>
  </div>
)}
    </nav>
  );
};

export default NavBar;