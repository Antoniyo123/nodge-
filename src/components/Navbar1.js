import React, { useState, useEffect } from 'react';
import '../css/Navbar1.css';

const categories = [
  { name: 'HOME', image: require('../img/hero/black-people.jpg') },
  { name: 'STORY', image: require('../img/hero/photoshoot.jpg') },
  { name: 'TALES', image: require('../img/hero/img_2.jpg') },
  { name: 'FRONTPAGE', image: require('../img/hero/music.jpg') },
  { name: 'SHOTS', image: require('../img/hero/photoshoot.jpg') },
  { name: 'NODGE', image: require('../img/hero/img_1.jpg') },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'} ${isVisible ? 'navbar-visible' : 'navbar-hidden'} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className={`navbar-container ${isMenuOpen ? 'hidden' : ''}`}>
        <a href="/" className="navbar-brand">
          <img src={require('../img/hero/NODGE LOGO.png')} alt="Logo" />
        </a>
        <button className="hamburger" onClick={toggleMenu}>
          <div className="hamburger-icon-wrapper">
            <img className="hamburger-icon" src={require('../img/hero/NODGE+.png')} alt="Menu" />
            <img className="hamburger-icon-rotated" src={require('../img/hero/NODGE+.png')} alt="Menu Rotated" />
          </div>
        </button>
      </div>
      <div className={`menu-overlay ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="menu-content">
          <button className="close-button" onClick={toggleMenu}>×</button>
          <div className="grid-menu">
            {categories.map((category, index) => (
              <div key={index} className="menu-item" style={{transitionDelay: `${index * 0.05}s`}}>
                <img src={category.image} alt={category.name} />
                <div className="menu-item-overlay">
                  <span className="menu-item-text">{category.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;