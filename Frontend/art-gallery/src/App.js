import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar/navbar.component';
import DetailArtist from './components/DetailArtist/DetailArtist';
import Artists from './components/Artists/Artists.component';
import Login from './components/Login/Login.component';
import { DetailOfArt } from './components/obrasDetail/DetailOfArt';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/artists' element={<Artists/>}/>
          <Route exact path='/artists/:id' element={<DetailArtist/>}/>
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/detailObra' element={<DetailOfArt/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;