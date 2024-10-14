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
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'} ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
        <div className="navbar-brand">
          <img src={require('../img/hero/NODGE LOGO.png')} alt="NODGE+" />
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          <img src={require('../img/hero/NODGE+.png')} alt="Menu" />
        </button>
        {isMenuOpen && (
          <div className={`menu-overlay ${isMenuOpen ? 'menu-open' : ''}`}>
            <button className="close-button" onClick={toggleMenu}>
              &times;
            </button>
            <div className="grid-menu">
              {categories.map((category, index) => (
                <div key={category.name} className={`menu-item ${isMenuOpen ? 'menu-item-visible' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
                  <img src={category.image} alt={category.name} />
                  <div className="menu-item-overlay">
                    <span className="menu-item-text">{category.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
   
  );
};

export default NavBar;
