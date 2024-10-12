import React, { useState, useEffect } from 'react';
import '../css/Brand.css';

const ExactLayout = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    [require('../img/hero/article.jpg'), require('../img/hero/old.jpg'), require('../img/hero/article.jpg')],
    [require('../img/hero/black-people.jpg'), require('../img/hero/music.jpg'), require('../img/hero/article.jpg')],
    [require('../img/hero/old.jpg'), require('../img/hero/read-book.jpg'), require('../img/hero/article.jpg')],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="layout-container">
      <div className="column column-left">
        <img src={images[currentImageIndex][0]} alt="Shots" />
        <div className="text-overlay top-left">
          <h2></h2>
        </div>
      </div>
      <div className="column column-center">
        <img src={images[currentImageIndex][1]} alt="Tales" />
        <div className="text-overlay bottom-left">
          <h2></h2>
        </div>
      </div>
      <div className="column column-right">
        <img src={images[currentImageIndex][2]} alt="Footage" />
        <div className="text-overlay bottom-right">
          <h2></h2>
        </div>
      </div>
    </div>
  );
};

export default ExactLayout;