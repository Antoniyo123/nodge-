import React from 'react';
import '../css/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="left-section">
        <div className="group-photo">
          <img src={require('../img/hero/black-people.jpg')} alt="Group of women" />
          <div className="overlay-home"></div>
        </div>
        <div className="text-content-home">
          <h1>IYAS LAWRENCE</h1>
          <h2>"MAKE IT"</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
      <div className="right-section">
        <div className="profile-photo">
          <img src={require('../img/hero/photoshoot.jpg')} alt="Iyas Lawrence" />
          <div className="comb-overlay"></div>
          <div className="get-to-know">
            <h3>GET TO KNOW IYAS LAWRENCE</h3>
            <div className="blue-square"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;