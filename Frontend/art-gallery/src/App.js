import './App.css';
import NavBar from './components/navbar/navbar.component';
import DetailArtist from './components/DetailArtist/DetailArtist';
import Artists from './components/Artists/Artists.component';

function App() {
  return (
    <div className="App">
      <NavBar />
      <DetailArtist />
      <Artists/>
    </div>
  );
}

export default App;
