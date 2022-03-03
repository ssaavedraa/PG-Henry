import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/navbar/navbar.component';
import DetailArtist from './components/DetailArtist/DetailArtist';
import Artists from './components/Artists/Artists.component';
import AdminPanel from './components/AdminPanel/AdminPanel';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
        <Route exact path='/admin' element={<AdminPanel/>}/>
          <Route exact path='/artists' element={<Artists/>}/>
          <Route exact path='/artists/:id' element={<DetailArtist/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;