import React, { useEffect, useRef, useState } from 'react';
import '../css/TalesComponent.css';

const TalesComponent = () => {
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={componentRef} 
      className={`tales-container ${isVisible ? 'visible' : ''} ${isHovered ? 'hovered' : ''}`}
    >
      <div className="background-image">
      <div className="background-overlay"></div>

      </div>
      <div className="vertical-lines"></div>
      <div className="content">
        <h1 className="tales-title">+ales</h1>
        <p className="tales-subtitle">DIVINE TRUTH BY MOMENTS</p>
        <button 
          className="read-more-btn"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default TalesComponent;