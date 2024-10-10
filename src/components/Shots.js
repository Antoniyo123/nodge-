import React, { useState, useEffect } from 'react';
import '../css/Shots.css';

const Shots = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Mock data for gallery images
  const images = [
    { id: 1, src: require('../img/hero/black-people.jpg'), alt: 'Image 1' },
    { id: 2, src: require('../img/hero/black-people.jpg'), alt: 'Image 2' },
    { id: 3, src: require('../img/hero/black-people.jpg'), alt: 'Image 3' },
    { id: 4, src: require('../img/hero/black-people.jpg'), alt: 'Image 4' },
    { id: 5, src: require('../img/hero/black-people.jpg'), alt: 'Image 5' },
    { id: 5, src: require('../img/hero/black-people.jpg'), alt: 'Image 5' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const opacity = Math.min(scrollPosition / 500, 1);
      document.documentElement.style.setProperty('--scroll-opacity', opacity.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="shots">
      <h1 className="shots-title">SHOTS</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <div 
            key={image.id} 
            className="gallery-item"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={image.src} alt={image.alt} />
            <div className={`overlay ${hoveredIndex === index ? 'active' : ''}`}>
              <p>{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shots;