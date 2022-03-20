import React, { useEffect, useState } from "react";
import "./CartForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useCart from "../../../customHooks/useCart.js"

const CartForm = () => {
  //Esto es lo que estaba en contactInfo
  const navigate = useNavigate();
  const { cart } = useCart();

  const getPaintings = async () => {
    const paintings = [];
    for (let i = 0; i < cart.length; i++) {
      const dbPaiting = await axios.get(`/painting/get/${cart[i]}`);
      paintings.push(dbPaiting.data);
    }
    return paintings;
  };

  const [paintings, setPaintings] = useState([]);
  console.log(paintings)
  const [info, setInfo] = useState({
      firstName: "",
      email: "", 
      lastName: "",
      telephone: null,
      postCode: null,
      city: "",
      street: "",
      streetNumber: null,
      floor: null,
      unit: "",
      paintings: cart,
      purchaseId: localStorage.getItem("purchaseId")
  });

  useEffect(() => {
    setInfo({ ...info, paintings: cart });
    getPaintings().then(res => setPaintings(res)).catch(err => console.log(err));
  }, [cart]);

  const handleChange = (e) => {
    const value = e.target.value;
    const type = e.target.name;
    setInfo({ ...info, [type]: value });
  };

	const handleSubmit = async (e) => {
    e.preventDefault();
    for (const key in info) {
      if (!info[key] && key !== "floor" && key !== "unit") {
        return
      }
    };
		try {
			await axios.post("checkout/contactInfo", info);
      
			navigate("/payment");
		} catch (e) {
			console.log(e);
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
                <label>First Name</label>
                <input type="text" name="firstName" onChange={handleChange}/>
              </div>
              <div className="divNameLastCart">
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={handleChange}/>
              </div>
            </div>

            <label>Email</label>
            <input type="email" name="email" onChange={handleChange}/>

            <label>Telephone</label>
            <input type="text" name="telephone" onChange={handleChange}/>

            <label>Post Code</label>
            <input type="text" name="postCode" onChange={handleChange}/>

            <label>City</label>
            <input type="text" name="city" onChange={handleChange}/>

            <label>Street</label>
            <input type="text" name="street" onChange={handleChange}/>
            <div className="divContainerNumberFloorUnit">
              <div className="NumberFloorUnitCart">
                <label>Number</label>
                <input type="text" name="streetNumber" onChange={handleChange}/>
              </div>

              <div className="NumberFloorUnitCart">
                <label>Floor</label>
                <input type="text" name="floor" onChange={handleChange}/>
              </div>

              <div className="NumberFloorUnitCart">
                <label>Unit</label>
                <input type="text" name="unit" onChange={handleChange}/>
              </div>
            </div>
          </div>

          <div className="divContainerItemsCart">
            <h3>Your order</h3>
              {paintings && paintings.map((painting, i) => (
                <div key={i} className="divContainerProductCart">
                  <div>
                    <p>{painting.title}</p>
                    <img src={painting.photos[0].url} alt={painting.title} />
                  </div>
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