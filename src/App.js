// import logo from './logo.svg';
// import './App.css';
import Home from '../src/components/Home'
import Navbar from '../src/components/Navbar'
import ArticleLayout from './components/ArticleLayout';
import Navbar1 from './components/Navbar1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar1/>
        {/* <Navbar/> */}
<Home/>
<ArticleLayout/>
      </header>
    </div>
  );
}

export default App;
