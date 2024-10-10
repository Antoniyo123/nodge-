import React, { useState, useRef } from 'react';
import { ChevronRight, Play, Pause } from 'lucide-react';
import '../css/RecentUpdates.css';

const RecentUpdates = () => {
  const [activeTab, setActiveTab] = useState('articles');
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});
  
  const handleVideoPlay = (index) => {
    if (playingVideo !== null && playingVideo !== index) {
      videoRefs.current[playingVideo].pause();
    }
    if (playingVideo === index) {
      videoRefs.current[index].pause();
      setPlayingVideo(null);
    } else {
      videoRefs.current[index].play();
      setPlayingVideo(index);
    }
  };
  const articles = [
    {
      title: "Zanele Muholi at Norval Foundation",
      date: "16.05.2023",
      excerpt: "Zanele Muholi's solo exhibition Kwanele opens at Norval Foundation on 2 June 2023.",
      image: require('../img/hero/article.jpg'),
      category: "News"
    },
    {
      title: "Rich Mnisi in Cape Town",
      date: "03.05.2023",
      excerpt: "Rich Mnisi presents new furniture designs at Southern Guild's Cape Town gallery.",
      image: require('../img/hero/article.jpg'),
      category: "Exhibition"
    },
    {
      title: "Andile Dyalvane: iThongo",
      date: "20.04.2023",
      excerpt: "Andile Dyalvane's solo exhibition iThongo opens in New York.",
      image: require('../img/hero/article.jpg'),
      category: "Exhibition"
    },
    {
        title: "Zanele Muholi at Norval Foundation",
        date: "16.05.2023",
        excerpt: "Zanele Muholi's solo exhibition Kwanele opens at Norval Foundation on 2 June 2023.",
        image: require('../img/hero/article.jpg'),
        category: "News"
      },
      {
        title: "Zanele Muholi at Norval Foundation",
        date: "16.05.2023",
        excerpt: "Zanele Muholi's solo exhibition Kwanele opens at Norval Foundation on 2 June 2023.",
        image: require('../img/hero/article.jpg'),
        category: "News"
      },
      {
        title: "Zanele Muholi at Norval Foundation",
        date: "16.05.2023",
        excerpt: "Zanele Muholi's solo exhibition Kwanele opens at Norval Foundation on 2 June 2023.",
        image: require('../img/hero/article.jpg'),
        category: "News"
      },
  ];

  const shots = [
    { image: require('../img/hero/img_3.jpg'), title: "Bronze Sculpture by Atang Tshikare" },
    { image: require('../img/hero/img_3.jpg'), title: "Ceramic Vessel by Zizipho Poswa" },
    { image: require('../img/hero/img_3.jpg'), title: "Woven Tapestry by Portia Mvubu" },
    { image: require('../img/hero/img_3.jpg'), title: "Glass Installation by Lukhanyo Mdingi" },
    { image: require('../img/hero/img_3.jpg'), title: "Furniture Piece by Dokter and Misses" },
    { image: require('../img/hero/img_3.jpg'), title: "Lighting Design by Conrad Hicks" }
  ];

  const videos = [
    {
      title: "Rich Mnisi | Nyoka",
      duration: "1:08",
      thumbnail: require('../video/video-satu.mp4'),
      description: "Rich Mnisi introduces Nyoka, a new collection of collectible furniture."
    },
    {
      title: "Porky Hefer | Molecules",
      duration: "1:22",
      thumbnail: require('../video/video-satu.mp4'),
      description: "Porky Hefer discusses his Molecules collection, inspired by chemical compounds."
    },
    {
      title: "Zizipho Poswa | Umthwalo",
      duration: "1:15",
      thumbnail: require('../video/video-satu.mp4'),
      description: "Zizipho Poswa talks about her Umthwalo series of ceramic sculptures."
    },
    {
      title: "Andile Dyalvane | iThongo",
      duration: "2:05",
      thumbnail: require('../video/video-satu.mp4'),
      description: "Andile Dyalvane explains the inspiration behind his iThongo collection."
    },
    {
      title: "Justine Mahoney | Mage",
      duration: "1:47",
      thumbnail: require('../video/video-satu.mp4'),
      description: "Justine Mahoney introduces her Mage series of sculptural works."
    },
    {
      title: "Atang Tshikare | Oa Mpona",
      duration: "1:30",
      thumbnail: require('../video/video-satu.mp4'),
      description: "Atang Tshikare discusses his Oa Mpona collection of functional art pieces."
    }
  ];

  const renderArticles = () => (
    <div className="content-grid articles-grid">
      {articles.map((article, index) => (
        <div key={index} className="content-card article-card">
          <img src={article.image} alt={article.title} className="card-image" />
          <div className="card-content">
            <span className="category">{article.category}</span>
            <h3>{article.title}</h3>
            <p className="date">{article.date}</p>
            <p className="excerpt">{article.excerpt}</p>
            <a href="#" className="read-more">
              Read more <ChevronRight size={16} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  const renderShots = () => (
    <div className="content-grid shots-grid">
      {shots.map((shot, index) => (
        <div key={index} className="content-card shot-card">
          <img src={shot.image} alt={shot.title} className="card-image" />
          <div className="card-content">
            <h3>{shot.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );

  const renderVideos = () => (
    <div className="content-grid videos-grid">
      {videos.map((video, index) => (
        <div key={index} className="content-card video-card">
          <div className="video-thumbnail">
            <video
              ref={el => videoRefs.current[index] = el}
              src={video.thumbnail}
              poster={`${video.thumbnail}#t=0.1`}
              preload="metadata"
            />
            <div className="play-button" onClick={() => handleVideoPlay(index)}>
              {playingVideo === index ? <Pause size={24} /> : <Play size={24} />}
            </div>
          </div>
          <div className="card-content">
            <h3>{video.title}</h3>
            <p className="duration">{video.duration}</p>
            <p className="description">{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'articles':
        return renderArticles();
      case 'shots':
        return renderShots();
      case 'videos':
        return renderVideos();
      default:
        return null;
    }
  };

  return (
    <section className="recent-updates">
      <div className="section-header">
        <h2>Recent Updates</h2>
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'articles' ? 'active' : ''}`} 
            onClick={() => setActiveTab('articles')}
          >
            Articles
          </button>
          <button 
            className={`tab ${activeTab === 'shots' ? 'active' : ''}`} 
            onClick={() => setActiveTab('shots')}
          >
            Shots
          </button>
          <button 
            className={`tab ${activeTab === 'videos' ? 'active' : ''}`} 
            onClick={() => setActiveTab('videos')}
          >
            Videos
          </button>
        </div>
      </div>
      <div className="content-area">
        {renderContent()}
      </div>
    </section>
  );
};

export default RecentUpdates;