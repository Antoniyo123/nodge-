import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../css/Frontpage/Frontpage.css'; // You'll need to create this CSS file

const Frontpage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = location.state || {};

  if (!article) {
    // If no article data is provided, redirect to homepage
    navigate('/');
    return null;
  }

  return (
    <div className="frontpage-container">
      <div className="article-header">
        <img src={article.groupPhoto} alt={article.title} className="header-image" />
        <h1 className="article-title">{article.title}</h1>
        <h2 className="article-subtitle">{article.subtitle}</h2>
      </div>
      <div className="article-content">
        <img src={article.profilePhoto} alt={`${article.title} profile`} className="profile-image" />
        <p className="article-description">{article.description}</p>
        {/* Add more article content here as needed */}
      </div>

    </div>
  );
};

export default Frontpage;