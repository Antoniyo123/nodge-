import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import '../css/HomePage.css';
import '../css/Transition.css';
import blackPeopleImg from '../img/hero/black-people.jpg';
import photoshootImg from '../img/hero/photoshoot.jpg';
import articleImg from '../img/hero/article.jpg';
import oldImg from '../img/hero/old.jpg';

const HomePage = () => {
  const navigate = useNavigate();
  const slides = [
    {
      groupPhoto: blackPeopleImg,
      profilePhoto: photoshootImg,
      title: 'IYAS LAWRENCE',
      subtitle: '"MAKE IT"',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      getToKnow: 'GET TO KNOW IYAS LAWRENCE',
      link: '/article/iyas-lawrence'
    },
    {
      groupPhoto: articleImg,
      profilePhoto: oldImg,
      title: 'NEW TITLE',
      subtitle: '"NEW SUBTITLE"',
      description: 'This is a new description for the second slide. You can add more content here.',
      getToKnow: 'DISCOVER MORE ABOUT NEW TITLE',
      link: '/article/new-title'
    },
    // Tambahkan slide lainnya sesuai kebutuhan
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
      
      // Check if hovering over clickable content
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
    }, 500); // Adjust this timing to match your transition duration
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
            <img src={currentSlideData.groupPhoto} alt="Group of women" />
            <div className="overlay-home"></div>
          </div>
          <div 
            className="clickable-content text-content-home"
            onClick={() => handleContentClick(currentSlideData)}
          >
            <h1>{currentSlideData.title}</h1>
            <h2>{currentSlideData.subtitle}</h2>
            <p>{currentSlideData.description}</p>
          </div>
        </div>
        <div className="right-section">
          <div className="profile-photo">
            <img src={currentSlideData.profilePhoto} alt="Profile" />
            <div className="comb-overlay"></div>
            <div 
              className="clickable-content get-to-know"
              onClick={() => handleContentClick(currentSlideData)}
            >
              <h3>{currentSlideData.getToKnow}</h3>
              <div className="blue-square"></div>
            </div>
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