import React, { useEffect } from 'react';
import RecentUpdates from '../components/RecentUpdates';
import SocialMediaInfo from '../components/SocialMediaInfo';
import '../css/Home.css';
import Story from './Story';
import Shots from './Shots';
import VideoSection from './VideoSection';
import HomePage from './HomePage';
import Brand from './Brand';
import TalesComponent from './TalesComponent';
import FootageComponent from'./FootageComponent';

const Home = () => {

  return (
    <div className="home">
        <HomePage/>
        <TalesComponent/>
        {/* <FootageComponent/> */}
        <Brand/>
      {/* <Story /> */}
      <Shots />
      {/* <VideoSection /> */}
    </div>
  );
};

export default Home;
