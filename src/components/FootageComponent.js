import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../css/FootageComponent.css';

const FootageComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="footage-container" ref={ref}>
      <h1 className="footage-title">FOO+AGE</h1>
      <div className={`footage-card ${inView ? 'visible' : ''}`}>
        <div className="footage-image">
          <img src={require('../img/hero/old.jpg')} alt="Film scene" className="film-image" />
          <div className="image-overlay">
            <p className="footage-text">foo+age</p>
            <p className="film-by">A FILM BY</p>
          </div>
        </div>
        <div className="footage-description">
          <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. ill likely have changed by the time this effect cleanup function runs. If this ref points to a node rendered by React, copy 'componentRef.current' to a variable inside the effect, and use that variable in the cleanup function  react-hooks/exhaustive-deps
          </p>
        </div>
      </div>
    </div>
  );
};

export default FootageComponent;