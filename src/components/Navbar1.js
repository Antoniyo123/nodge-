import React, { useState } from 'react';
import '../css/Navbar1.css';

const categories = [
  { name: 'NEWS', image: require('../img/hero/black-people.jpg') },
  { name: 'FASHION', image: require('../img/hero/photoshoot.jpg') },
  { name: 'MUSIC', image: require('../img/hero/img_2.jpg') },
  { name: 'FILM & TV', image: require('../img/hero/music.jpg') },
  { name: 'FEATURES', image: require('../img/hero/photoshoot.jpg') },
  { name: 'BEAUTY', image: require('../img/hero/img_1.jpg') },
  { name: 'LIFE & CULTURE', image: require('../img/hero/black-people.jpg') },
  { name: 'ART & PHOTOGRAPHY', image: require('../img/hero/photoshoot.jpg') },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
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
                <span>{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;