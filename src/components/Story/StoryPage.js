import React, { useState } from 'react';
import '../../css/Story/StoryPage.css';

const articles = [
  {
    id: 1,
    category: 'COLUMN',
    date: '12.09.24',
    headline: 'Sudah Pernah Berdesakan di Manggarai, Tuan?',
    excerpt: 'Dalam submisi Open Column ini, Reva Bagja Andriano, mengeksposisikan keresahannya mengenaiwacana aturan baru yang...',
    image: require('../../img/shots/street.jpg')
  },
  {
    id: 2,
    category: 'MUSIC',
    date: '11.09.24',
    headline: 'Artist on Artist: St. Vincent Interviewed By Indonesian Female Musicians',
    excerpt: 'During our interview, excitement filled the air as Annie Clark\'s lush, soothing voice resonated...',
    image: require('../../img/shots/street.jpg')
  },
  {
    id: 3,
    category: 'COLUMN',
    date: '05.06.24',
    headline: 'Mendengarkan Tutur Nusantara, Memetakan Masa Depan',
    excerpt: 'Dalam submisi Open Column kali ini, Melati Suryodarmo, selaku Direktur Artistik Indonesia...',
    image: require('../../img/shots/street.jpg')
  },
  {
    id: 4,
    category: 'COLUMN',
    date: '12.09.24',
    headline: 'Sudah Pernah Berdesakan di Manggarai, Tuan?',
    excerpt: 'Dalam submisi Open Column ini, Reva Bagja Andriano, mengeksposisikan keresahannya mengenaiwacana aturan baru yang...',
    image: require('../../img/shots/street.jpg')
  },
  {
    id: 5,
    category: 'MUSIC',
    date: '11.09.24',
    headline: 'Artist on Artist: St. Vincent Interviewed By Indonesian Female Musicians',
    excerpt: 'During our interview, excitement filled the air as Annie Clark\'s lush, soothing voice resonated...',
    image: require('../../img/shots/street.jpg')
  },
  {
    id: 6,
    category: 'COLUMN',
    date: '05.06.24',
    headline: 'Mendengarkan Tutur Nusantara, Memetakan Masa Depan',
    excerpt: 'Dalam submisi Open Column kali ini, Melati Suryodarmo, selaku Direktur Artistik Indonesia...',
    image: require('../../img/shots/street.jpg')
  }
];

const categories = ['ALL', 'COLUMN', 'MUSIC', 'ART', 'CULTURE'];

const ArticlePage = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredArticles = activeCategory === 'ALL' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className='story__container'>
      <header className="page-header">
        <h1 className="page-title">Our Stories</h1>
        <p className="page-subtitle">Discover the latest stories, interviews, and insights</p>
      </header>

      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="articles-container">
        <div className="articles-grid">
          {filteredArticles.map((article) => (
            <div key={article.id} className="article-card">
              <div className="article-image-wrapper">
                <img 
                  src={article.image}
                  alt={article.headline}
                  className="article-image"
                />
                <div className="article-overlay" />
                
                <div className="article-content">
                  <div className="article-meta">
                    <span>{article.category}</span>
                    <span>{article.date}</span>
                  </div>
                  <h2 className="article-headline">
                    {article.headline}
                  </h2>

                </div>
              </div>
              <p className="article-excerpt">
                    {article.excerpt}
                  </p>
                  <a href="#" className="read-more">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;