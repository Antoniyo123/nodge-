// DocumentaryChannel.jsx
import React, { useState } from 'react';
import '../css/FootageComponent.css';
const DocumentaryChannel = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const documentaries = [
    {
      id: 1,
      title: "From the Near East to the Far East",
      subtitle: "Celebrating 100 Years of Turkish-Japanese Friendship",
      thumbnail: require('../img/hero/read-book.jpg'),
      category: "Culture, History",
      youtubeId: "example1"
    },
    {
      id: 2,
      title: "When Modern Modern Aesthetics Meet Not-So-Modern Anime",
      subtitle: "Balletcore and Modern Manga",
      thumbnail: require('../img/hero/read-book.jpg'),
      category: "Culture, Art",
      youtubeId: "example2"
    },
    {
      id: 3,
      title: "Coffee and Cabinets",
      subtitle: "London's Hidden Arcade Scene",
      thumbnail: require('../img/hero/read-book.jpg'),
      category: "Gaming, Culture",
      youtubeId: "example3"
    },
    {
      id: 4,
      title: "From the Near East to the Far East",
      subtitle: "Celebrating 100 Years of Turkish-Japanese Friendship",
      thumbnail: require('../img/hero/read-book.jpg'),
      category: "Culture, History",
      youtubeId: "example1"
    },
    {
      id: 5,
      title: "When Modern Modern Aesthetics Meet Not-So-Modern Anime",
      subtitle: "Balletcore and Modern Manga",
      thumbnail: require('../img/hero/read-book.jpg'),
      category: "Culture, Art",
      youtubeId: "example2"
    },
    {
      id: 6,
      title: "Coffee and Cabinets",
      subtitle: "London's Hidden Arcade Scene",
      thumbnail: require('../img/hero/read-book.jpg'),
      category: "Gaming, Culture",
      youtubeId: "example3"
    },
    {
      id: 7,
      title: "From the Near East to the Far East",
      subtitle: "Celebrating 100 Years of Turkish-Japanese Friendship",
      thumbnail: require('../img/hero/read-book.jpg'),
      category: "Culture, History",
      youtubeId: "example1"
    },
    {
      id: 8,
      title: "When Modern Modern Aesthetics Meet Not-So-Modern Anime",
      subtitle: "Balletcore and Modern Manga",
      thumbnail: require('../img/hero/read-book.jpg'),
      category: "Culture, Art",
      youtubeId: "example2"
    },
    {
      id: 9,
      title: "Coffee and Cabinets",
      subtitle: "London's Hidden Arcade Scene",
      thumbnail: require('../img/hero/read-book.jpg'),
      category: "Gaming, Culture",
      youtubeId: "example3"
    }
  ];

  // Extract unique categories
  const allCategories = ['All', ...new Set(
    documentaries.flatMap(doc => doc.category.split(', '))
  )];

  const handleVideoClick = (youtubeId) => {
    setSelectedVideo(youtubeId);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  const filteredDocumentaries = activeCategory === 'All'
    ? documentaries
    : documentaries.filter(doc => doc.category.includes(activeCategory));

  return (
    <div className="documentary-container">
      <h1 className="channel-title">Featured FOOTAGE</h1>
      
      <div className="category-tabs">
        {allCategories.map((category) => (
          <button
            key={category}
            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="documentary-grid">
        {filteredDocumentaries.map((doc) => (
          <div
            key={doc.id}
            className="documentary-card"
            onClick={() => handleVideoClick(doc.youtubeId)}
          >
            <div className="thumbnail-container">
              <img
                src={doc.thumbnail}
                alt={doc.title}
                className="thumbnail"
              />
              <div className="overlay">
                <div className="play-button">▶</div>
              </div>
            </div>
            <div className="content">
              <div className="category">{doc.category}</div>
              <h2 className="title">{doc.title}</h2>
              <p className="subtitle">{doc.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="modal-overlay active" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>×</button>
            <iframe
              className="youtube-embed"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentaryChannel;