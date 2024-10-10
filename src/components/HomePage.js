import React, { useEffect, useState } from 'react';
import '../css/HomePage.css';

const HomePage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
<div className="home-page-section">
  {/* Overlay tambahan untuk seluruh section */}
  <div className="section-overlay"></div>
  
  <div className="text-content">
    <h1 className="title">NODGE +</h1>
    <p className="description">
      Chairman Bang, the man behind BTS, is bringing his formula for creating K-pop idols to America.
      <span className="author"> Alexander Barasch </span>
      reports.
    </p>
    <button className="read-more-button">Read More</button>
  </div>

  <div className="image-container">
    <img
      src={require('../img/hero/music.jpg')}
      alt="K-pop group photo"
      className={`group-image ${imageLoaded ? 'loaded' : ''}`}
      onLoad={() => setImageLoaded(true)}
    />
    <div className="background-overlay"></div>
    <div className="image-text-overlay">
      <h2>The K-pop Journey</h2>
      <p>An inside look at the rise of K-pop.</p>
    </div>
  </div>

  <nav className="navigation">
    {/* Navigation content here */}
  </nav>
</div>


  );
};

export default HomePage;