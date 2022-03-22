import React, { useEffect, useState } from "react";
import "./CartForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useCart from "../../../customHooks/useCart.js";
import { contactInfo } from "../../../redux/actions/actions";
import { useDispatch } from "react-redux";
import {validarForm} from './validarForm'



const CartForm = () => {
	//Esto es lo que estaba en contactInfo
	const navigate = useNavigate();
	const { cart } = useCart();
	const dispatch = useDispatch();

	const getPaintings = async () => {
		const paintings = [];
		for (let i = 0; i < cart.length; i++) {
			const dbPaiting = await axios.get(`/painting/get/${cart[i]}`);
			paintings.push(dbPaiting.data);
		}
		return paintings;
	};
	const [errorState, seterrorState] = useState({
        error: {}
    })
	const [paintings, setPaintings] = useState([]);

	const [info, setInfo] = useState({
		firstName: "",
		email: "",
		lastName: "",
		telephone: '',
		postCode: '',
		city: "",
		street: "",
		streetNumber: '',
		floor: '',
		unit: "",
		paintings: cart,
		purchaseId: localStorage.getItem("purchaseId"),
	});

	useEffect(() => {
		setInfo({ ...info, paintings: cart });
		getPaintings()
			.then((res) => setPaintings(res))
			.catch((err) => console.log(err));
	}, [cart]);

	const handleChange = (e) => {
		const value = e.target.value;
		const type = e.target.name;
		setInfo({ ...info, [type]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let error = validarForm(info)

		if  (!Object.keys(error).length){

			for (const key in info) {
				if (!info[key] && key !== "floor" && key !== "unit") {
					return;
				}
			}
			try {
				await axios.post("checkout/contactInfo", info);
	
				dispatch(contactInfo(info));
				navigate("/payment");
			} catch (e) {
				console.log(e);
			}

			
		} else {
			seterrorState(err => ({...err, error: error}))
			console.log(errorState)
			setInfo({
				firstName: "",
		email: "",
		lastName: "",
		telephone: '',
		postCode: '',
		city: "",
		street: "",
		streetNumber: '',
		floor: '',
		unit: "",
			})
		}
	


	};

	return (
		<div className="divContainerFormCart">
			<h1>Purchasing process</h1>
			<form onSubmit={handleSubmit}>
				<div className="divContainerDetailsCart">
					<div className="divContainerInputsFormCart">
						<h3> Billings details</h3>
						<div className="divContainerNameLastCart">
							<div className="divNameLastCart">
								<label
								className = { errorState.error.firstName === "Name require"  ? "activeLabel" : ''}
								>First Name</label>
								<input 
								className= { errorState.error.firstName === "Name require"  ? "activeError" : ''}
								type="text" 
								value={info.firstName} 
								name="firstName"
								onChange={handleChange} />
							</div>
							<div className="divNameLastCart">
								<label>Last Name</label>
								<input type="text" value={info.lastName} name="lastName" onChange={handleChange} />
							</div>
						</div>

						<label
						className = { errorState.error.email === "Email require"  ? "activeLabel" : ''}
						>Email</label>
						<input 
						className= { errorState.error.email === "Email require"  ? "activeError" : ''}
						type="email" name="email" value={info.email} onChange={handleChange} />

						<label
						className = { errorState.error.telephone === "phone invalid"  ? "activeLabel" : ''}
						>Telephone</label>
						<input 
						className= { errorState.error.telephone === "phone invalid"  ? "activeError" : ''}
						type="text" name="telephone" value={info.telephone} onChange={handleChange} />

						<label
						className = { errorState.error.postCode === "postCode require"  ? "activeLabel" : ''}
						>Post Code</label>
						<input 
						className= { errorState.error.postCode === "postCode require"  ? "activeError" : ''}
						type="text" name="postCode" value={info.postCode} onChange={handleChange} />

						<label
						className = { errorState.error.city === "city require"  ? "activeLabel" : ''}
						>City</label>
						<input 
						className= { errorState.error.city === "city require"  ? "activeError" : ''}
						type="text" name="city" value={info.city} onChange={handleChange} />

						<label
						className = { errorState.error.street === "street require"  ? "activeLabel" : ''}
						>Street</label>
						<input 
						className= { errorState.error.street === "street require"  ? "activeError" : ''}
						type="text" name="street" value={info.street} onChange={handleChange} />
						<div className="divContainerNumberFloorUnit">
							<div className="NumberFloorUnitCart">
								<label
								className = { errorState.error.streetNumber === "Number require"  ? "activeLabel" : ''}
								>Number</label>
								<input 
								className= { errorState.error.streetNumber === "Number require"  ? "activeError" : ''}
								type="text" name="streetNumber" value={info.streetNumber} onChange={handleChange} />
							</div>

							<div className="NumberFloorUnitCart">
								<label>Floor</label>
								<input type="text" name="floor" value={info.floor} onChange={handleChange} />
							</div>

							<div className="NumberFloorUnitCart">
								<label>Unit</label>
								<input type="text" name="unit" value={info.unit} onChange={handleChange} />
							</div>
						</div>
					</div>

					<div className="divContainerItemsCart">
						<h3>Your order</h3>
						{paintings &&
							paintings.map((painting, i) => (
								<div key={i} className="divContainerProductCart">

									<p>{painting.title}</p>
									<img src={painting.photos[0].url} alt={painting.title} />

									<p>USD$ {painting.price}</p>
								</div>
							))}
						<div className="divContainerButtonCartContinue">
							{<button type="submit">Continue</button>}
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CartForm;
