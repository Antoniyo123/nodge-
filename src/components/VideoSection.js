import React, { useState } from 'react';
import '../css/VideoSection.css';

const VideoSection = ({ title }) => {
  const [activeVideo, setActiveVideo] = useState(0);

  const videos = [
    { id: 'dQw4w9WgXcQ', title: 'Never Gonna Give You Up' },
    { id: 'kJQP7kiw5Fk', title: 'Despacito' },
    { id: 'JGwWNGJdvx8', title: 'Shape of You' },
    { id: 'OPf0YbXqDm0', title: 'Uptown Funk' },
    { id: 'CevxZvSJLk8', title: 'Roar' },
    { id: 'pRpeEdMmmQ0', title: 'Shake It Off' },
  ];

  return (
    <div className="video-section">
      <h1 className="section-title">{title}</h1>
      <div className="video-gallery">
        <div className="main-video">
          <iframe
            src={`https://www.youtube.com/embed/${videos[activeVideo].id}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={videos[activeVideo].title}
          ></iframe>
        </div>
        <div className="video-list">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`video-item ${index === activeVideo ? 'active' : ''}`}
              onClick={() => setActiveVideo(index)}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
              />
              <p>{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;