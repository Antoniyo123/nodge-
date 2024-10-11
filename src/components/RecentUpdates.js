import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import '../css/RecentUpdates.css';

const RecentUpdates = () => {
  const [activeTab, setActiveTab] = useState('all');

  const content = [
    {
      type: 'article',
      title: "The Evolution of Urban Design in Melbourne",
      excerpt: "Exploring the changing face of Melbourne's cityscape and its impact on community living.",
      image: require('../img/hero/music.jpg'),
      category: "Urban Planning",
      author: "Jane Smith",
      date: "16 May 2023"
    },
    {
      type: 'video',
      title: "Sustainable Architecture: Building for the Future",
      excerpt: "A look into innovative sustainable building practices shaping our cities.",
      image: require('../img/hero/music.jpg'),
      category: "Architecture",
      author: "John Doe",
      date: "14 May 2023"
    },
    {
      type: 'article',
      title: "The Rise of Community Gardens in Inner City Suburbs",
      excerpt: "How urban farming is transforming unused spaces and bringing communities together.",
      image: require('../img/hero/music.jpg'),
      category: "Community",
      author: "Sarah Johnson",
      date: "12 May 2023"
    },
    {
      type: 'article',
      title: "Preserving Heritage: Balancing Progress and History",
      excerpt: "The challenges and triumphs of maintaining historical architecture in a growing city.",
      image: require('../img/hero/music.jpg'),
      category: "Heritage",
      author: "Michael Brown",
      date: "10 May 2023"
    },
    {
      type: 'video',
      title: "Street Art: The Voice of Urban Culture",
      excerpt: "Exploring the vibrant street art scene and its role in urban expression.",
      image: require('../img/hero/music.jpg'),
      category: "Culture",
      author: "Emily Chen",
      date: "8 May 2023"
    },
    {
      type: 'article',
      title: "The Future of Public Transportation",
      excerpt: "Innovative solutions for efficient and sustainable city transit systems.",
      image: require('../img/hero/music.jpg'),
      category: "Infrastructure",
      author: "David Wilson",
      date: "6 May 2023"
    }
  ];

  const filteredContent = activeTab === 'all' 
    ? content 
    : content.filter(item => item.type === activeTab);

  return (
    <section className="recent-updates">
      <div className="section-header">
        <h2>Recent</h2>
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'all' ? 'active' : ''}`} 
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button 
            className={`tab ${activeTab === 'article' ? 'active' : ''}`} 
            onClick={() => setActiveTab('article')}
          >
            Articles
          </button>
          <button 
            className={`tab ${activeTab === 'video' ? 'active' : ''}`} 
            onClick={() => setActiveTab('video')}
          >
            Videos
          </button>
        </div>
      </div>
      <div className="content-grid">
        {filteredContent.map((item, index) => (
          <div key={index} className={`content-card ${item.type}-card`}>
            <div className="card-image-container">
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="image-overlay">
                <span className="category">{item.category}</span>
                {item.type === 'video' && <span className="video-indicator">Video</span>}
              </div>
            </div>
            <div className="card-content">
              <h3>{item.title}</h3>
              <p className="excerpt">{item.excerpt}</p>
              <div className="card-meta">
                <span className="author">{item.author}</span>
                <span className="date">{item.date}</span>
              </div>
              <a href="#" className="read-more">
                Read more <ChevronRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentUpdates;