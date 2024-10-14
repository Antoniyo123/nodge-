// import logo from './logo.svg';
import './App.css';
import Home from '../src/components/Home';
import Navbar from '../src/components/Navbar'
import ArticleLayout from './components/ArticleLayout';
import Navbar1 from './components/Navbar1';
import '../src/css/Home.css'

function App() {
  return (
    <div className="App">
      <div className='home'>
      <Navbar1/>
        {/* <Navbar/> */}
        <Home/>
        <ArticleLayout/>
      </div>
       

    </div>
  );
}

export default App;
