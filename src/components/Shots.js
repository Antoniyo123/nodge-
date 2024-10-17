import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Shots.css';

const Shots = () => {
  const navigate = useNavigate();
  const previewPhotos = [
    { id: 1, image: require('../img/shots/consert.jpg'), alt: 'Elegant portrait' },
    { id: 2, image: require('../img/shots/drink.jpg'), alt: 'Stylish fashion' },
    { id: 3, image: require('../img/shots/street.jpg'), alt: 'Minimalist interior' },
    { id: 4, image: require('../img/shots/peoplelanyard.jpg'), alt: 'Urban landscape' },
    { id: 5, image: require('../img/shots/consert.jpg'), alt: 'Abstract art' },
    { id: 6, image: require('../img/shots/consert.jpg'), alt: 'Nature close-up' },
  ];

  const handleViewMore = () => {
    navigate('/shots');
  };

  useEffect(() => {
    const resizeGridItems = () => {
      const grid = document.querySelector('.photo-grid');
      const items = grid.querySelectorAll('.photo-item');
      items.forEach(item => {
        const image = item.querySelector('img');
        image.style.width = 'auto';
        image.style.height = '500px';
      });
    };

    resizeGridItems();
    window.addEventListener('resize', resizeGridItems);

    return () => {
      window.removeEventListener('resize', resizeGridItems);
    };
  }, []);

  return (
    <section className="shots">
      <div className="shots-header">
        <div className="shots-title">
          <img src={require('../img/hero/SHO+S_LOGO.png')} alt="SHOTS" className="shots-title-image" />
        </div>
        <button className="view-more-btn-shots" onClick={handleViewMore}>View More Shots</button>
      </div>
      <div className="photo-grid">
        {previewPhotos.map((photo, index) => (
          <div key={photo.id} className={`photo-item ${index % 6 < 3 ? 'top-row' : 'bottom-row'}`}>
            <img src={photo.image} alt={photo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shots;