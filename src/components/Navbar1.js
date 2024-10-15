import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Navbar1.css';

const categories = [
  { name: 'HOME', image: require('../img/hero/black-people.jpg'), path: '/' },
  { name: 'STORY', image: require('../img/hero/photoshoot.jpg'), path: '/StoryPage' },
  { name: 'TALES', image: require('../img/hero/img_2.jpg'), path: '/tales' },
  { name: 'FRONTPAGE', image: require('../img/hero/music.jpg'), path: '/frontpage' },
  { name: 'SHOTS', image: require('../img/hero/photoshoot.jpg'), path: '/shots' },
  { name: 'NODGE', image: require('../img/hero/img_1.jpg'), path: '/nodge' },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    console.log('Navigating to:', path); // Debug log
    navigate(path);
    setIsMenuOpen(false);
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
        <Link to="/" className="navbar-brand" onClick={() => handleNavigation('/')}>
          <img src={require('../img/hero/NODGE LOGO.png')} alt="Logo" />
        </Link>
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
              <div 
                key={index} 
                className="menu-item" 
                style={{transitionDelay: `${index * 0.05}s`}}
                onClick={() => handleNavigation(category.path)}
              >
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