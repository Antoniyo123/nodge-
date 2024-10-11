import React from 'react';
import '../css/Shots.css';

const Shots = () => {
  const newsItems = [
    {
      id: 1,
      category: 'FASHION',
      title: 'The New Elegance',
      image: require('../img/hero/black-people.jpg'),
      link: '#'
    },
    {
      id: 2,
      category: 'BEAUTY',
      title: 'Radiant Skin Secrets',
      image: require('../img/hero/black-people.jpg'),
      link: '#'
    },
    {
      id: 3,
      category: 'LIFESTYLE',
      title: 'Modern Living Spaces',
      image: require('../img/hero/black-people.jpg'),
      link: '#'
    },
    {
      id: 4,
      category: 'CULTURE',
      title: 'Art in the Digital Age',
      image: require('../img/hero/black-people.jpg'),
      link: '#'
    },
    {
      id: 5,
      category: 'FOOD',
      title: 'Culinary Adventures',
      image: require('../img/hero/black-people.jpg'),
      link: '#'
    },
    {
      id: 6,
      category: 'TRAVEL',
      title: 'Exploring Hidden Gems',
      image: require('../img/hero/black-people.jpg'),
      link: '#'
    },
  ];

  return (
    <section className="shots">
      <h2 className="shots-title">SHOTS</h2>
      <div className="news-grid">
        {newsItems.map((item) => (
          <a href={item.link} key={item.id} className="news-item">
            <div className="image-container">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="news-content">
              <span className="news-category">{item.category}</span>
              <h3 className="news-title">{item.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Shots;