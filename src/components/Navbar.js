import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../css/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Ubah nilai ini sesuai dengan kapan Anda ingin background muncul
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo">NODGE+</a>
        <nav className="navbar-content">
          <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
            <a href="#artists" className="navbar-link">Artists</a>
            <a href="#exhibitions" className="navbar-link">Exhibitions</a>
            <a href="#gallery" className="navbar-link">Gallery</a>
            <a href="#about" className="navbar-link">About</a>
            <a href="#contact" className="navbar-link">Contact</a>
          </div>
          <button className="navbar-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;