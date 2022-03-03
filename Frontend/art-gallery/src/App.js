import './App.css';
import NavBar from './components/navbar/navbar.component';
import DetailArtist from './components/DetailArtist/DetailArtist';
import { DetailOfArt } from './components/obrasDetail/DetailOfArt';

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <DetailOfArt/>
      {/* <DetailArtist /> */}
    </div>
  );
}

export default App;