import React, { useEffect, useRef, useState } from 'react';
import '../css/TalesComponent.css';

const TalesComponent = () => {
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const relativePosition = (windowHeight - rect.top) / (windowHeight + rect.height);
        const clampedPosition = Math.max(0, Math.min(1, relativePosition));
        setScrollPosition(clampedPosition);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once for initialization

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={componentRef} 
      className={`tales-container ${isVisible ? 'visible' : ''}`}
    >
<div 
        className={`story-text-overlay ${isVisible ? 'visible' : ''}`}
        style={{
          transform: `translate(-50%, calc(-50% - ${scrollPosition * 50}%))`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <span>S</span>
        <img src={require('../img/hero/NODGE+.png')} alt="T" className="rotating-t" />
        <span>ORY</span>
      </div>
      <div 
        className="tales-left"
        onMouseEnter={() => setIsLeftHovered(true)}
        onMouseLeave={() => setIsLeftHovered(false)}
      >
        <img src={require('../img/hero/read-book.jpg')} alt="Left Section" className="tales-image" />
        <div className="tales-overlay">
          <h2 className="tales-subtitle">LEFT SECTION</h2>
          <h1 className="tales-title">First Story</h1>
          <p className="tales-description">
            Discover the beauty of our first tale, where moments of truth unfold.
          </p>
          {isLeftHovered && (
            <button className="view-more-btn">View More</button>
          )}
        </div>
      </div>
      <div 
        className="tales-right"
        onMouseEnter={() => setIsRightHovered(true)}
        onMouseLeave={() => setIsRightHovered(false)}
      >
        <img src={require('../img/hero/photoshoot.jpg')} alt="Right Section" className="tales-image" />
        <div className="tales-overlay">
          <h2 className="tales-subtitle">RIGHT SECTION</h2>
          <h1 className="tales-title">Second Story</h1>
          <p className="tales-description">
            Explore our collection of captivating stories that reveal divine truths through everyday moments.
          </p>
          {isRightHovered && (
            <button className="view-more-btn">View More</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TalesComponent;