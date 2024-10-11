import React, { useState } from 'react';
import '../css/VideoSection.css';

const VideoSection = ({ title }) => {
  const [activeVideo, setActiveVideo] = useState(0);

  const videos = [
    { id: 'dQw4w9WgXcQ', title: 'Never Gonna Give You Up', duration: '3:32' },
    { id: 'kJQP7kiw5Fk', title: 'Despacito', duration: '4:41' },
    { id: 'JGwWNGJdvx8', title: 'Shape of You', duration: '4:23' },
    { id: 'OPf0YbXqDm0', title: 'Uptown Funk', duration: '4:30' },
    { id: 'CevxZvSJLk8', title: 'Roar', duration: '4:30' },
    { id: 'pRpeEdMmmQ0', title: 'Shake It Off', duration: '3:39' },
  ];

  const nextVideo = () => {
    setActiveVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setActiveVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="video-section">
      <h2 className="section-title">{title}</h2>
      <div className="main-video-container">
        <iframe
          src={`https://www.youtube.com/embed/${videos[activeVideo].id}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={videos[activeVideo].title}
          className="main-video"
        ></iframe>
        <button onClick={prevVideo} className="nav-button prev-button">
          &#10094;
        </button>
        <button onClick={nextVideo} className="nav-button next-button">
          &#10095;
        </button>
      </div>
      <div className="video-grid">
        {videos.map((video, index) => (
          <div 
            key={video.id} 
            className={`video-item ${index === activeVideo ? 'active' : ''}`}
            onClick={() => setActiveVideo(index)}
          >
            <div className="thumbnail-container">
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                className="video-thumbnail"
              />
              <div className="play-overlay">
                <span className="play-icon">&#9654;</span>
              </div>
            </div>
            <h3 className="video-title">{video.title}</h3>
            <p className="video-duration">{video.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;