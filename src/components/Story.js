import React, { useState, useEffect } from 'react';
import '../css/Story.css';

const Story = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const tales = [
    { title: "The Rise of Modern Design", date: "June 12, 2023" },
    { title: "Embracing Art in Everyday Life", date: "July 24, 2023" },
    { title: "A Journey Through Color", date: "August 15, 2023" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % tales.length);
    }, 3000); // Change tale every 3 seconds

    return () => clearInterval(interval);
  }, [tales.length]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const opacity = Math.min(scrollPosition / 500, 1);
      document.documentElement.style.setProperty('--scroll-opacity', opacity.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="story-section">
      <h2 className="story-title">Our Story</h2>
      <p className="story-description">
        A collection of tales that celebrate creativity, innovation, and the art of storytelling.
      </p>

      <div className="tales-container">
        {tales.map((tale, index) => (
          <div 
            key={index} 
            className={`tale-item ${index === visibleIndex ? 'visible' : ''}`}
          >
            <h4 className="tale-title">{tale.title}</h4>
            <p className="tale-date">{tale.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Story;