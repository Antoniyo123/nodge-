import React, { useEffect } from 'react';
import RecentUpdates from '../components/RecentUpdates';
import SocialMediaInfo from '../components/SocialMediaInfo';
import '../css/Home.css';
import Story from './Story';
import Shots from './Shots';
import VideoSection from './VideoSection';
import HomePage from './HomePage';

const Home = () => {

  return (
    <div className="home">
        <HomePage/>
      <RecentUpdates />
<section>
{/* <SocialMediaInfo /> */}

</section>
      <Story />
      <Shots />
      <VideoSection />
    </div>
  );
};

export default Home;
