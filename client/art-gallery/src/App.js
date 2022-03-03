import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/navbar.component';
import DetailArtist from './components/DetailArtist/DetailArtist';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <NavBar />
      <DetailArtist />
      </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;