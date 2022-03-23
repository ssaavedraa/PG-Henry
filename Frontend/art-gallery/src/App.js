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
import CartForm from "./components/Cart/CartForm/CartForm";
import ConfirmPurchase from "./components/Cart/ConfirmPurchase/ConfirmPurchase";
import NotFound from "./components/Error404/notFound.component";
import { FormContac_1 } from "./components/FormContac/FormContac_1";
import { FormContacArtist } from "./components/FormContac/FormContacArtist";
import { AboutDev } from "./components/aboutDev/AboutDev";

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
					<Route exact path="/user/verify/:token" element={<UserMailVerify />} />
					<Route exact path="/detailpainting/:id" element={<DetailOfArt />} />

					<Route
						exact
						path="/admin/addartist"
						element={
							<ProtectedRoute role="admin">
								<AddArtists />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/admin"
						element={
							<ProtectedRoute role="admin">
								<MyProfile />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/admin/user"
						element={
							<ProtectedRoute role="admin">
								<AddUser />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/admin/additems"
						element={
							<ProtectedRoute role="admin">
								<AddItems />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/admin/sales"
						element={
							<ProtectedRoute role="admin">
								<Sales />
							</ProtectedRoute>
						}
					/>

					<Route exact path="/under" element={<UnderConstruction />} />
					<Route exact path="/contactus" element={<ContactUs />} />
					<Route exact path="/gallery" element={<Gallery />} />
					<Route exact path="/home" element={<Home />} />
					<Route exact path="/cart" element={<Cart />} />
					<Route exact path="/formUser" element={<FormContac_1 />} />
					<Route exact path="/formArtists" element={<FormContacArtist />} />
					<Route exact path="/about" element={<AboutDev />} />
					<Route
						exact
						path="/favs"
						element={
							<ProtectedRoute role="user">
								<Favs />
							</ProtectedRoute>
						}
					/>

					<Route exact path="/contactInfo" element={<CartForm />} />
					<Route exact path="/payment" element={<ConfirmPurchase />} />
					<Route
						exact
						path="/user"
						element={
							<ProtectedRoute role="user">
								<MyProfile />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path="/user/purchase"
						element={
							<ProtectedRoute role="user">
								<Sales />
							</ProtectedRoute>
						}
					/>
					<Route exact path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
