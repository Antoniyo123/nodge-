import React from 'react';
import { Link } from 'react-router-dom';
import '../css/PageStyles.css';

const Footage = () => {
  return (
    <div className="page-container">
      <h1>Footage</h1>
      <img src={require('../img/hero/article.jpg')} alt="Footage" className="page-image" />
      <p>
        Welcome to our Footage page. Here, we showcase our collection of captivating visual narratives.
        From raw, unedited clips to polished productions, our footage captures the essence of moments,
        events, and stories that matter.
      </p>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
};

export default Footage;