import React from 'react';
import { Link } from 'react-router-dom';
import '../css/PageStyles.css';

const Tones = () => {
  return (
    <div className="page-container">
      <h1>Tones</h1>
      <img src={require('../img/hero/music.jpg')} alt="Tones" className="page-image" />
      <p>
        Welcome to our Tones page. Here, we explore the world of sound and music.
        From ambient soundscapes to rhythmic beats, our tones set the mood and bring stories to life.
        Discover the power of audio in storytelling and content creation.
      </p>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
};

export default Tones;