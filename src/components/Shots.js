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
        image.style.width = '100%';
        image.style.height = 'auto';
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
        <h2 className="shots-title">
          <span className="sho">SHO</span>
          <span className="rotating-t">
            <img src={require('../img/hero/NODGE+.png')} alt="Rotating +" />
          </span>
          <span className="s">S</span>
        </h2>
        <button className="view-more-btn" onClick={handleViewMore}>View More Shots</button>
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