import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/navbar/navbar.component';
import DetailArtist from './components/DetailArtist/DetailArtist';
import Artists from './components/Artists/Artists.component';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Login from './components/Login/Login.component';
import Footer from './components/Footer/Footer';
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/admin" element={<AdminPanel />} />
          <Route exact path="/artists" element={<Artists />} />
          <Route exact path="/artists/:id" element={<DetailArtist />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
