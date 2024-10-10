import React from 'react';
import '../css/Shots.css';

const Shots = () => {
  // Mock data for news items
  const newsItems = [
    {
      id: 1,
      category: 'NEWS',
      title: 'New Album Release: Rock Giants Return with Explosive Tracks',
      image: require('../img/hero/black-people.jpg'),
      excerpt: 'The wait is over as the legendary rock band drops their highly anticipated album...'
    },
    {
      id: 2,
      category: 'FEATURES',
      title: 'Behind the Scenes: A Day in the Life of a Touring Musician',
      image: require('../img/hero/black-people.jpg'),
      excerpt: 'Ever wondered what it s like to live on the road? We follow a rising star...'
    },
    {
      id: 3,
      category: 'REVIEWS',
      title: 'Concert Review: Electrifying Performance Leaves Crowd in Awe',
      image: require('../img/hero/black-people.jpg'),
      excerpt: 'Last night s show was a testament to the power of live music...'
    },
    {
      id: 4,
      category: 'INTERVIEWS',
      title: 'Exclusive: Rising Star Opens Up About Creative Process',
      image: require('../img/hero/black-people.jpg'),
      excerpt: 'In a candid conversation, the breakout artist discusses inspiration, challenges...'
    },
    {
      id: 5,
      category: 'NEWS',
      title: 'Major Festival Announces Lineup: Surprises and Fan Favorites',
      image: require('../img/hero/black-people.jpg'),
      excerpt: 'The music world is buzzing with excitement as the lineup for this years...'
    },
    {
      id: 6,
      category: 'FEATURES',
      title: 'The Evolution of Rock: From Classics to Modern Twists',
      image: require('../img/hero/black-people.jpg'),
      excerpt: 'We take a deep dive into how rock music has transformed over the decades...'
    },
  ];

  return (
    <div className="shots">
      <h1 className="shots-title">WHAT'S HAPPENING</h1>
      <div className="news-grid">
        {newsItems.map((item, index) => (
          <div key={item.id} className={`news-item ${index === 0 ? 'featured' : ''}`}>
            <img src={item.image} alt={item.title} />
            <div className="news-content">
              <span className="news-category">{item.category}</span>
              <h2 className="news-title">{item.title}</h2>
              <p className="news-excerpt">{item.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shots;