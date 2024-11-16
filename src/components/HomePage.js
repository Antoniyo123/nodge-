import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import '../css/HomePage.css';
import '../css/Transition.css';
import blackPeopleVideo from '../video/home-page/24 JUNI 2024.mov';
import photoshootVideo from '../video/home-page/LOGO.mov';
import microgram from '../video/microgram 2.mov';
import Footage from '../img/hero/FOO+AGE_LOGO.png';
// import articleVideo from '../video/hero/article.mp4';
// import oldVideo from '../video/hero/old.mp4';

const HomePage = () => {
  const navigate = useNavigate();
  const slides = [
    {
      groupPhoto: blackPeopleVideo,
      profilePhoto: photoshootVideo,
      titleImage: null, // Tidak menggunakan gambar untuk title di slide pertama
      showTitleOnVideo: false // Flag untuk menunjukkan title tidak ditampilkan di atas video
    },
    {
      groupPhoto: microgram,
      profilePhoto: microgram,
      titleImage: Footage, // Menggunakan gambar untuk title
    },
  ];
  
  const [isExiting, setIsExiting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState('next');
  const [isHovering, setIsHovering] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const homePageRef = useRef(null);
  const [fadeDirection, setFadeDirection] = useState('');
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (homePageRef.current && homePageRef.current.contains(e.target)) {
      const rect = homePageRef.current.getBoundingClientRect();
      setCursorPosition({ 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      });
      
      const isOverClickable = e.target.closest('.clickable-content') !== null;
      setIsHoveringClickable(isOverClickable);
      
      if (!isOverClickable) {
        setCursorText(e.clientX < window.innerWidth / 2 ? 'prev' : 'next');
      } else {
        setCursorText('');
      }
      setIsHovering(true);
    } else {
      setIsHovering(false);
      setIsHoveringClickable(false);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setIsHoveringClickable(false);
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    const currentHomePageRef = homePageRef.current;
    
    if (currentHomePageRef) {
      currentHomePageRef.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (currentHomePageRef) {
        currentHomePageRef.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [handleMouseMove, handleMouseLeave]);

  const handleSlideChange = (direction) => {
    setIsFading(true);
    setFadeDirection(direction);
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      } else {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      }
      setIsFading(false);
      setFadeDirection('');
    }, 900);
  };

  const handleBackgroundClick = (e) => {
    if (!isHoveringClickable) {
      const clickX = e.clientX;
      const direction = clickX < window.innerWidth / 2 ? 'prev' : 'next';
      handleSlideChange(direction);
    }
  };

  const handleContentClick = (slideData) => {
    setIsExiting(true);
    setTimeout(() => {
      navigate('/frontpage', { state: { article: slideData } });
    }, 500);
  };

  const currentSlideData = slides[currentSlide];

  return (
<CSSTransition
      in={!isExiting}
      timeout={500}
      classNames="page"
      unmountOnExit
    >
      <div className="home-page-container">
        <div 
          className={`home-page ${isFading ? 'fading' : ''} ${fadeDirection}`} 
          onClick={handleBackgroundClick} 
          ref={homePageRef}
        >
          <div className="left-section">
            <div className="group-photo">
              <video 
                src={currentSlideData.profilePhoto} 
                autoPlay 
                loop 
                muted 
                playsInline
                type="video/mp4"
              />
              <div className="overlay-home"></div>
              
            </div>
          </div>
          <div className="right-section">
            <div className="profile-photo">
              <video 
                src={currentSlideData.groupPhoto} 
                autoPlay 
                loop 
                muted 
                playsInline
                type="video/mp4"
              />
              {currentSlideData.profilePhoto === microgram && (
                <img 
                  src={currentSlideData.titleImage} 
                  className="title-image-bottom-left"
                  alt="Title"
                />
              )}
              <div className="comb-overlay"></div>
            </div>
          </div>
          {isHovering && (
            <div 
              className={`custom-cursor ${isHoveringClickable ? 'clickable' : ''}`}
              style={{ 
                left: `${cursorPosition.x}px`, 
                top: `${cursorPosition.y}px`
              }}
            >
              {cursorText}
            </div>
          )}
        </div>
      </div>
    </CSSTransition>
  );
};

export default HomePage;