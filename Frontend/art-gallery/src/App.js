import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar/navbar.component';
import DetailArtist from './components/DetailArtist/DetailArtist';
import Artists from './components/Artists/Artists.component';
import { DetailOfArt } from './components/obrasDetail/DetailOfArt';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Artists />} />
          <Route path='/artists' element={<Artists />} />
          <Route path='/artists/:id' element={<DetailArtist />} />
          <Route path='/detailArt/:id' element={<DetailOfArt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;