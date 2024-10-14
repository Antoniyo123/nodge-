import React, { useState, useEffect, useRef } from 'react';
import '../css/HomePage.css';
import blackPeopleImg from '../img/hero/black-people.jpg';
import photoshootImg from '../img/hero/photoshoot.jpg';
import articleImg from '../img/hero/article.jpg';
import oldImg from '../img/hero/old.jpg';

const HomePage = () => {
  const slides = [
    {
      groupPhoto: blackPeopleImg,
      profilePhoto: photoshootImg,
      title: 'IYAS LAWRENCE',
      subtitle: '"MAKE IT"',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      getToKnow: 'GET TO KNOW IYAS LAWRENCE'
    },
    {
      groupPhoto: articleImg,
      profilePhoto: oldImg,
      title: 'NEW TITLE',
      subtitle: '"NEW SUBTITLE"',
      description: 'This is a new description for the second slide. You can add more content here.',
      getToKnow: 'DISCOVER MORE ABOUT NEW TITLE'
    },
    // Tambahkan slide lainnya sesuai kebutuhan
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState('next');
  const [isHovering, setIsHovering] = useState(false);
  const homePageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (homePageRef.current && homePageRef.current.contains(e.target)) {
        const rect = homePageRef.current.getBoundingClientRect();
        setCursorPosition({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
        setCursorText(e.clientX < window.innerWidth / 2 ? 'prev' : 'next');
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    if (homePageRef.current) {
      homePageRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (homePageRef.current) {
        homePageRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const handleClick = () => {
    if (cursorText === 'next') {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    } else {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="home-page" onClick={handleClick} ref={homePageRef}>
      <div className="left-section">
        <div className="group-photo">
          <img src={currentSlideData.groupPhoto} alt="Group of women" />
          <div className="overlay-home"></div>
        </div>
        <div className="text-content-home">
          <h1>{currentSlideData.title}</h1>
          <h2>{currentSlideData.subtitle}</h2>
          <p>{currentSlideData.description}</p>
        </div>
      </div>
      <div className="right-section">
        <div className="profile-photo">
          <img src={currentSlideData.profilePhoto} alt="Profile" />
          <div className="comb-overlay"></div>
          <div className="get-to-know">
            <h3>{currentSlideData.getToKnow}</h3>
            <div className="blue-square"></div>
          </div>
        </div>
      </div>
      {isHovering && (
        <div 
          className="custom-cursor"
          style={{ 
            left: `${cursorPosition.x}px`, 
            top: `${cursorPosition.y}px`
          }}
        >
          {cursorText}
        </div>
      )}
    </div>
  );
};

export default HomePage;