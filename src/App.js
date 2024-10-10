// import logo from './logo.svg';
// import './App.css';
import Home from '../src/components/Home'
import Navbar from '../src/components/Navbar'
import ArticleLayout from './components/ArticleLayout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
<Home/>
<ArticleLayout/>
      </header>
    </div>
  );
}

export default App;
