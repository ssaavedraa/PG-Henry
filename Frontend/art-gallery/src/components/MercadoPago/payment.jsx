import { useEffect } from "react";

export default function PayButton() {
	useEffect(() => {
		const script = document.createElement("script");

		const attr_data_preference = document.createAttribute("data-preference-id");
		attr_data_preference.value = localStorage.getItem("preferenceId");

		script.src =
			"https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
		script.setAttributeNode(attr_data_preference);

		// Elemento en el que renderizo, div, boton
		document.getElementById("form1").appendChild(script);
		return () => {
			document.getElementById("form1").removeChild(script);
		};
	}, []);

	return (
		<div>
			<h1>Confirm your purchase</h1>
			<form id="form1"></form>
		</div>
	);
}
