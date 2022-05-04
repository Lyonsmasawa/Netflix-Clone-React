import './App.css';
import Row from "./Row";
import requests from './requests.js';

function App() {
  return (
    <div className="App">
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
    </div>
  );
}

export default App;
