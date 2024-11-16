import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Brand.css';

const ExactLayout = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [hoveredColumn, setHoveredColumn] = useState(null);
  const navigate = useNavigate();

  // Media array dengan objek yang memiliki type (image/video) dan source
  const mediaContent = [
    [
      {
        type: 'image',
        source: require('../img/brand/suster.JPG'),
        thumbnail: require('../img/brand/photoshot.jpeg')
      },
      {
        type: 'image',
        source: require('../img/brand/photoshot.jpeg')
      },
      {
        type: 'video',
        source: require('../video/TONES1.mov'),
        // thumbnail: require('../img/hero/article.jpg')
      }
    ]
  ];

  const titleImages = [
    require('../img/hero/story_LOGO.png'),
    require('../img/hero/+ALES_LOGO.png'),
    require('../img/hero/tones_LOGO.png'),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % mediaContent.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleViewMore = (page) => {
    navigate(`/${page}`);
  };

  const renderMedia = (media) => {
    if (media.type === 'video') {
      return (
        <div className="video-container">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={media.thumbnail}
            className="media-content"
          >
            <source src={media.source} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    } else {
      return <img src={media.source} alt="" className="media-content" />;
    }
  };

  const renderColumn = (index, position, page) => (
    <div
      className={`column column-${position}`}
      onMouseEnter={() => setHoveredColumn(index)}
      onMouseLeave={() => setHoveredColumn(null)}
    >
      <div className="image-container">
        {renderMedia(mediaContent[currentMediaIndex][index])}
        <div className="image-overlay"></div>
      </div>
      <div className={`content-overlay ${position === 'left' ? 'top-left' : 'bottom-' + position}`}>
        <img src={titleImages[index]} alt={page} className="title-image" />
        {hoveredColumn === index && (
          <button className="view-more-btn-footage" onClick={() => handleViewMore(page)}>
            View More
          </button>
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