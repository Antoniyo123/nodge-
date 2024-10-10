import React from 'react';
import '../css/VideoSection.css';

const VideoSection = ({ title, videoId }) => {
  return (
    <div className="video-section">
      <h1 className="section-title">{title}</h1>
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={title}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;