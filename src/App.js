
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleLayout from './components/ArticleLayout';
import Navbar1 from './components/Navbar1';
import '../src/css/Home.css'
import Home from '../src/components/Home';
import Story from '../src/components/Story/StoryPage';
import Tales from '../src/components/Tales/Tales';
import Frontpage from '../src/components/Frontpage/Frontpage';
import Shots from '../src/components/Shots/ShotsPage';
import Nodge from '../src/components/Nodge/NodgePage';
import Footage from './components/FootageComponent';
import Tones from './components/Tones';
import StoryPage from '../src/components/Story/StoryPage';
// import Frontpage from '../src/components/Frontpage/Frontpage';

function App() {
  return (
    <div className='App'>
    <Router>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StoryPage" element={<StoryPage />} />
        <Route path="/tales" element={<Tales />} />
        <Route path="/frontpage" element={<Frontpage />} />
        <Route path="/shots" element={<Shots />} />
        <Route path="/nodge" element={<Nodge />} />
        <Route path="/footage" element={<Footage />} />
        <Route path="/tones" element={<Tones />} />
        <Route path="/frontpage" element={<Frontpage />} />
      </Routes>
    </Router>
    {/* <Home/> */}
    <ArticleLayout/>
    </div>


  );
}

export default App;
