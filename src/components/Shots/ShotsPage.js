import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Shots/ShotPage.css';

const ShotsPage = () => {
  const allPhotos = [
    { id: 1, image: require('../../img/shots/consert.jpg'), alt: 'Elegant portrait' },
    { id: 2, image: require('../../img/shots/drink.jpg'), alt: 'Stylish fashion' },
    { id: 3, image: require('../../img/shots/street.jpg'), alt: 'Minimalist interior' },
    { id: 4, image: require('../../img/shots/peoplelanyard.jpg'), alt: 'Urban landscape' },
    { id: 5, image: require('../../img/shots/consert.jpg'), alt: 'Abstract art' },
    { id: 6, image: require('../../img/shots/consert.jpg'), alt: 'Nature close-up' },
    { id: 7, image: require('../../img/shots/consert.jpg'), alt: 'Portrait' },
    { id: 8, image: require('../../img/shots/consert.jpg'), alt: 'Landscape' },
    { id: 9, image: require('../../img/shots/consert.jpg'), alt: 'Street art' },
    { id: 10, image: require('../../img/shots/consert.jpg'), alt: 'Architecture' },
    { id: 11, image: require('../../img/shots/consert.jpg'), alt: 'Food photography' },
    { id: 12, image: require('../../img/shots/consert.jpg'), alt: 'Wildlife' },
  ];

  const [visiblePhotos, setVisiblePhotos] = useState(allPhotos.slice(0, 6));
  const [isLoading, setIsLoading] = useState(false);

  const loadMorePhotos = () => {
    setIsLoading(true);
    setTimeout(() => {
      const currentLength = visiblePhotos.length;
      const nextPhotos = allPhotos.slice(currentLength, currentLength + 6);
      setVisiblePhotos([...visiblePhotos, ...nextPhotos]);
      setIsLoading(false);
    }, 1000); // Simulating network delay
  };

  useEffect(() => {
    const resizeGridItems = () => {
      const grid = document.querySelector('.photo-grid');
      const items = grid.querySelectorAll('.photo-item');
      items.forEach(item => {
        const image = item.querySelector('img');
        image.style.width = '100%';
        image.style.height = 'auto';
      });
    };

    resizeGridItems();
    window.addEventListener('resize', resizeGridItems);

    return () => {
      window.removeEventListener('resize', resizeGridItems);
    };
  }, [visiblePhotos]);

  return (
    <div className="shots-page">
      <h1 className="shots-page-title">
        <span className="sho">SHO</span>
        <span className="rotating-t">
          <img src={require('../../img/hero/NODGE+.png')} alt="Rotating +" />
        </span>
        <span className="s">S</span>
      </h1>
      <div className="photo-grid">
        {visiblePhotos.map((photo, index) => (
          <div key={photo.id} className={`photo-item ${index % 6 < 3 ? 'top-row' : 'bottom-row'}`}>
            <img src={photo.image} alt={photo.alt} />
          </div>
        ))}
      </div>
      {visiblePhotos.length < allPhotos.length && (
        <button 
          className={`load-more-btn ${isLoading ? 'loading' : ''}`} 
          onClick={loadMorePhotos}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
};

export default ShotsPage;