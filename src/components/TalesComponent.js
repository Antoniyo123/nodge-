import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/TalesComponent.css';

const TalesComponent = () => {
  const componentRef = useRef(null);
  const leftVideoRef = useRef(null);
  const rightVideoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();

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
    handleScroll();

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Auto-play videos when they become visible
    if (isVisible) {
      if (leftVideoRef.current) leftVideoRef.current.play();
      if (rightVideoRef.current) rightVideoRef.current.play();
    }
  }, [isVisible]);

  const handleViewMore = (section) => {
    navigate('/StoryPage', { state: { section } });
  };

  const handleMouseEnter = (videoRef, setHovered) => {
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = (videoRef, setHovered) => {
    setHovered(false);
    if (videoRef.current) {
      // Optional: you can pause the video on mouse leave or let it continue playing
      videoRef.current.pause();
    }
  };

  return (
    <div 
      ref={componentRef} 
      className={`tales-container ${isVisible ? 'visible' : ''}`}
    >
      <div 
        className={`story-text-overlay ${isVisible ? 'visible' : ''}`}
        style={{
          transform: `translate(-50%, calc(-50% - ${scrollPosition * 200}%))`,
          transition: 'transform 0.1s ease-out'
        }}
      >
      </div>
      <div 
        className="tales-left"
        onMouseEnter={() => handleMouseEnter(leftVideoRef, setIsLeftHovered)}
        onMouseLeave={() => handleMouseLeave(leftVideoRef, setIsLeftHovered)}
      >
        <video 
          ref={leftVideoRef}
          className="tales-video"
          loop
          muted
          playsInline
          src={require('../video/NODGE VIDEO 2.mp4')}
        />
        <div className="tales-overlay">
          <div className='footage-custom'>
            <img src={require('../img/hero/FOO+AGE_LOGO.png')} className=''></img>
          </div>
          <h2 className="tales-subtitle">LEFT SECTION</h2>
          <h1 className="tales-title">First Story</h1>
          <p className="tales-description">
            Discover the beauty of our first tale, where moments of truth unfold.
          </p>
          {isLeftHovered && (
            <button className="view-more-btn-story" onClick={() => handleViewMore('left')}>View More</button>
          )}
        </div>
      </div>
      <div 
        className="tales-right"
        onMouseEnter={() => handleMouseEnter(rightVideoRef, setIsRightHovered)}
        onMouseLeave={() => handleMouseLeave(rightVideoRef, setIsRightHovered)}
      >
        <video 
          ref={rightVideoRef}
          className="tales-video"
          loop
          muted
          playsInline
          src={require('../video/NODGE VIDEO 1.mp4')}
        />
        <div className="tales-overlay">
          <div className='footage-custom'>
            <img src={require('../img/hero/forntpage.png')} className=''></img>
          </div>
          <h2 className="tales-subtitle">RIGHT SECTION</h2>
          <h1 className="tales-title">Second Story</h1>
          <p className="tales-description">
            Explore our collection of captivating stories that reveal divine truths through everyday moments.
          </p>
          {isRightHovered && (
            <button className="view-more-btn-story" onClick={() => handleViewMore('right')}>View More</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TalesComponent;