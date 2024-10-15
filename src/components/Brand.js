import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Brand.css';

const ExactLayout = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredColumn, setHoveredColumn] = useState(null);
  const navigate = useNavigate();

  const images = [
    [require('../img/hero/article.jpg'), require('../img/hero/old.jpg'), require('../img/hero/article.jpg')],
    [require('../img/hero/black-people.jpg'), require('../img/hero/music.jpg'), require('../img/hero/article.jpg')],
    [require('../img/hero/old.jpg'), require('../img/hero/read-book.jpg'), require('../img/hero/article.jpg')],
  ];

  const plusImage = require('../img/hero/NODGE+.png');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleViewMore = (page) => {
    navigate(`/${page}`);
  };

  const renderColumn = (index, position, title, page) => (
    <div 
      className={`column column-${position}`}
      onMouseEnter={() => setHoveredColumn(index)}
      onMouseLeave={() => setHoveredColumn(null)}
    >
      <img src={images[currentImageIndex][index]} alt={title} />
      <div className={`text-overlay ${position === 'left' ? 'top-left' : 'bottom-' + position}`}>
        <h2>
          {title.split('+').map((part, i) => (
            <React.Fragment key={i}>
              {i > 0 && (
                <span className="plus-icon">
                  <img src={plusImage} alt="+" />
                </span>
              )}
              {part}
            </React.Fragment>
          ))}
        </h2>
        {hoveredColumn === index && (
          <button className="view-more-btn" onClick={() => handleViewMore(page)}>View More</button>
        )}
      </div>
    </div>
  );

  return (
    <div className="layout-container">
      {renderColumn(0, 'left', 'foo+age', 'footage')}
      {renderColumn(1, 'center', '+ones', 'tones')}
      {renderColumn(2, 'right', 'fron+page', 'frontpage')}
    </div>
  );
};

export default ExactLayout;