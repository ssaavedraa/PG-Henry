import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/navbar.component";
import DetailArtist from "./components/DetailArtist/DetailArtist";
import Artists from "./components/Artists/Artists.component";
import MyProfile from "./components/AdminPanel/MyProfile/MyProfile";
import Login from "./components/Login/Login.component";
import AddArtists from "./components/AdminPanel/AddArtists/AddArtists";
import AddItems from "./components/AdminPanel/AddItems/AddItems";
import { AddUser } from "./components/AdminPanel/AddUser/AddUser";
import Sales from "./components/AdminPanel/Sales/Sales";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home.jsx";
import ContactUs from "./components/ContactUs/ContactUs";
import Gallery from "./components/Gallery/Gallery";
import { DetailOfArt } from "./components/obrasDetail/DetailOfArt";
import Cart from "./components/Cart/Cart";
import Favs from "./components/Favs/Favs";
import ProtectedRoute from "./routes/ProtectedRoute";
import UserMailVerify from "./components/UserMailVerify/UserMailVerify";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/artists" element={<Artists />} />
          <Route exact path="/artists/:id" element={<DetailArtist />} />
          <Route
            exact
            path="/login"
            element={
              <ProtectedRoute role="guest">
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/user/verify/:token"
            element={<UserMailVerify />}
          />
          <Route exact path="/detailpainting/:id" element={<DetailOfArt />} />
          <Route exact path="/admin/addartist" element={<AddArtists />} />
          <Route exact path="/admin" element={<MyProfile />} />
          <Route exact path="/admin/user" element={<AddUser />} />
          <Route exact path="/admin/additems" element={<AddItems />} />
          <Route exact path="/admin/sales" element={<Sales />} />
          <Route exact path="/under" element={<UnderConstruction />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/favs" element={<Favs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
