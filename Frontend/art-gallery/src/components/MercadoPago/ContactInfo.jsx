import axios from "axios";
import useCart from "../../customHooks/useCart";
import { useNavigate } from "react-router-dom";


export default function ContactInfo() {
	const { cart } = useCart();
	const navigate = useNavigate();

	const info = {
		firstName: "Brian",
		email: "brian@gmail.com", 
		lastName: "Weidl",
		telephone: 12345678,
		postCode: 1000,
		city: "CABA",
		street: "Callecita",
		streetNumber: 10,
		floor: 45,
		unit: "f",
	};
	info.paintings = cart;

	info.purchaseId = localStorage.getItem("purchaseId");
	
	const handleClick = async () => {
		try {
			await axios.post("checkout/contactInfo", info);
			navigate("/payment");
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div>
			{/* <CartForm handleClick={handleClick} /> */}
			{/* Comentarios de Eli: puse este botón en Cartform */}
			<button onClick={handleClick}>BUTON</button>
		</div>
	);
}
