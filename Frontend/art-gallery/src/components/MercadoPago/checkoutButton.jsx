import useCart from "../../customHooks/useCart";
import useAuth from "../../customHooks/useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CheckoutButton() {
	const { cart } = useCart();
	const { user } = useAuth();
	const navigate = useNavigate();

	const handleClick = async () => {
		const obj = {
			paintingsIds: cart,
			userId: user.id === -1 ? null : user.id,
		};

		const response = await axios.post("checkout/checkAvailable", obj);

		if (response.data.isAvailable) {
			try {
				const preference = await axios.post("checkout/createPreference", obj);

				if (preference.data.status === "ok") {
					localStorage.setItem("preferenceId", preference.data.preferenceId);
					localStorage.setItem("purchaseId", preference.data.purchaseId);
				}
			} catch (e) {
				console.log(e);
			}
		}
		navigate("/contactInfo");
	};

	return (
		<div>
			<h1>CHECKOUT BUTON</h1>
			<button onClick={handleClick}>BUTON</button>
		</div>
	);
}
