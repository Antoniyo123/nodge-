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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
          setIsVisible(false);
        } else { // if scroll up show the navbar
          setIsVisible(true);
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="navbar-container">
        <div className="navbar-brand">NODGE +</div>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        {isMenuOpen && (
          <div className="menu-overlay">
            <button className="close-button" onClick={toggleMenu}>
              &times;
            </button>
            <div className="grid-menu">
              {categories.map((category) => (
                <div key={category.name} className="menu-item">
                  <img src={category.image} alt={category.name} />
                  <div className="menu-item-overlay">
                    <span className="menu-item-text">{category.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;