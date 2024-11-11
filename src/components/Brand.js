import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Brand.css';

const ExactLayout = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredColumn, setHoveredColumn] = useState(null);
  const navigate = useNavigate();

  const images = [
    [require('../img/brand/suster.JPG'), require('../img/hero/old.jpg'), require('../img/hero/article.jpg')],
    // [require('../img/hero/black-people.jpg'), require('../img/hero/music.jpg'), require('../img/hero/article.jpg')],
    // [require('../img/hero/old.jpg'), require('../img/hero/read-book.jpg'), require('../img/hero/article.jpg')],
  ];

  const titleImages = [
    require('../img/hero/story_LOGO.png'),
    require('../img/hero/+ALES_LOGO.png'),
    require('../img/hero/tones_LOGO.png'),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleViewMore = (page) => {
    navigate(`/${page}`);
  };

  const renderColumn = (index, position, page) => (
    <div
      className={`column column-${position}`}
      onMouseEnter={() => setHoveredColumn(index)}
      onMouseLeave={() => setHoveredColumn(null)}
    >
      <div className="image-container">
        <img src={images[currentImageIndex][index]} alt={page} />
        <div className="image-overlay"></div>
      </div>
      <div className={`content-overlay ${position === 'left' ? 'top-left' : 'bottom-' + position}`}>
        <img src={titleImages[index]} alt={page} className="title-image" />
        {hoveredColumn === index && (
          <button className="view-more-btn-footage" onClick={() => handleViewMore(page)}>View More</button>
        )}
      </div>
    </div>
  );

  return (
    <div className="layout-container">
      {renderColumn(0, 'left', 'footage')}
      {renderColumn(1, 'center', 'tones')}
      {renderColumn(2, 'right', 'frontpage')}
    </div>
  );
};

export default ExactLayout;