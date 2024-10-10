import React, { useState, useEffect } from 'react';
import '../css/Story.css';

const Story = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const stories = [
    {
      title: "The Rise of Modern Design",
      date: "June 12, 2023",
      excerpt: "Exploring the evolution of design principles in the digital age.",
      image: require('../img/hero/photoshoot.jpg')
    },
    {
      title: "Embracing Art in Everyday Life",
      date: "July 24, 2023",
      excerpt: "Discovering how art influences our daily experiences and perceptions.",
      image: require('../img/hero/photoshoot.jpg')
    },
    {
      title: "A Journey Through Color",
      date: "August 15, 2023",
      excerpt: "Unraveling the psychology and impact of color in various cultures.",
      image: require('../img/hero/photoshoot.jpg')
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % stories.length);
    }, 5000); // Change story every 5 seconds

    return () => clearInterval(interval);
  }, [stories.length]);

  return (
    <section className="story-section">
      <h2 className="story-title">Featured Stories</h2>
      
      <div className="stories-container">
        {stories.map((story, index) => (
          <div 
            key={index} 
            className={`story-item ${index === activeIndex ? 'active' : ''}`}
            style={{backgroundImage: `url(${story.image})`}}
          >
            <div className="story-content">
              <h3 className="story-item-title">{story.title}</h3>
              <p className="story-date">{story.date}</p>
              <p className="story-excerpt">{story.excerpt}</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>

      <div className="story-nav">
        {stories.map((_, index) => (
          <button 
            key={index} 
            className={`nav-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Story;