import './App.css';
import NavBar from './components/navbar/navbar.component';
import DetailArtist from './components/DetailArtist/DetailArtist';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <DetailArtist /> */}
      <Home />
    </div>
  );
}

export default App;
