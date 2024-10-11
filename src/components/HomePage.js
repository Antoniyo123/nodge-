import React, { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../css/HomePage.css';

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const articles = [
    {
      title: "The Evolution of Rock: From Classics to Modern Era",
      subtitle: "A journey through the decades of rock music",
      author: "Alex Johnson",
      date: "May 15, 2024",
      image: require('../img/hero/music.jpg'),
      category: "Features"
    },
    {
      title: "The Rise of Indie Music in the Digital Age",
      subtitle: "How technology is shaping the indie music scene",
      author: "Sarah Lee",
      date: "May 18, 2024",
      image: require('../img/hero/photoshoot.jpg'),
      category: "Trends"
    },
    {
      title: "Exploring the Roots of Blues",
      subtitle: "A deep dive into the origins of blues music",
      author: "Michael Brown",
      date: "May 20, 2024",
      image: require('../img/hero/black-people.jpg'),
      category: "History"
    }
  ];

  const changeArticle = useCallback((direction) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === 'next') {
          return (prevIndex + 1) % articles.length;
        } else {
          return (prevIndex - 1 + articles.length) % articles.length;
        }
      });
      setIsTransitioning(false);
    }, 500);
  }, [articles.length]);

  useEffect(() => {
    const autoRotate = setInterval(() => changeArticle('next'), 5000);
    return () => clearInterval(autoRotate);
  }, [changeArticle]);

  const currentArticle = articles[currentIndex];

  return (
    <div className="home-page">
      <div className={`hero-image ${isTransitioning ? 'transitioning' : ''}`}>
        <img 
          src={currentArticle.image} 
          alt={currentArticle.title}
        />
        <div className="image-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className={`content-wrapper ${isTransitioning ? 'transitioning' : ''}`}>
          <span className="article-category">{currentArticle.category}</span>
          <h2 className="article-title">{currentArticle.title}</h2>
          <p className="article-subtitle">{currentArticle.subtitle}</p>
          <div className="article-meta">
            <span>By {currentArticle.author}</span>
            <span className="date-separator">|</span>
            <span>{currentArticle.date}</span>
          </div>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
      
      <div className="nav-buttons">
        <button 
          onClick={() => changeArticle('prev')}
          className="nav-btn prev"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => changeArticle('next')}
          className="nav-btn next"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default HomePage;