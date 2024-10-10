import React from 'react';
import {  Mail  } from 'lucide-react';
import '../css/ArticleLayout.css';

const ArticleLayout = () => {
    const artworks = [
      { id: 1, title: "Ceramic Vase", artist: "Jane Doe", image: require('../img/slideshow/medium-shot-business-women-high-five.jpeg') },
      { id: 2, title: "Abstract Painting", artist: "John Smith", image: require('../img/slideshow/medium-shot-business-women-high-five.jpeg') },
      { id: 3, title: "Wooden Sculpture", artist: "Alice Johnson", image: require('../img/slideshow/medium-shot-business-women-high-five.jpeg') },
      { id: 4, title: "Metal Installation", artist: "Bob Brown", image: require('../img/slideshow/medium-shot-business-women-high-five.jpeg') },
    ];
  
    return (
      <div className="sg-inspired">
        {/* <Navbar /> */}
        
        <main className="sg-main">
          <section className="sg-hero">
            <h1>Discover Exceptional Art</h1>
            <p>Curated collections from Africa's leading artists</p>
          </section>
  
          <section id="gallery" className="sg-gallery">
            <h2>Featured Works</h2>
            <div className="sg-grid">
              {artworks.map((artwork) => (
                <div key={artwork.id} className="sg-grid-item">
                  <img src={artwork.image} alt={artwork.title} />
                  <div className="sg-item-info">
                    <h3>{artwork.title}</h3>
                    <p>{artwork.artist}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
  
          <section id="about" className="sg-about">
            <h2>About NODGE</h2>
            <p>Nodge has spearheaded the high-end design category in Africa, propelling its artist-designers to make spirited, challenging and complex work.</p>
          </section>
  
          <section id="exhibitions" className="sg-exhibitions">
            <h2>Current Exhibitions</h2>
            <div className="sg-exhibition-item">
              <img src= {require('../img/hero/img_2.jpg')} alt="Current Exhibition" />
              <h3>Visionary Landscapes</h3>
              <p>Exploring nature through contemporary African art</p>
              <a href="#" className="sg-button">Learn More</a>
            </div>
          </section>
        </main>
        
        <footer className="sg-footer">
          <div className="sg-footer-content">
            <div className="sg-footer-info">
              <h3>Nodge +</h3>
              <p>Silo 5, Silo District, V&A Waterfront, Cape Town, 8001</p>
              <p>Tel: +27 21 461 2856</p>
            </div>
            <div className="sg-footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Instagram</a>
            </div>
          </div>
          <p className="sg-copyright">&copy; 2024 Nodge + Inspired. All rights reserved.</p>
        </footer>
      </div>
    );
  };

export default ArticleLayout;