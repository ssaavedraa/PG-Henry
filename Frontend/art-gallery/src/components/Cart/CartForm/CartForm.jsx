import React from "react";
import "./CartForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CartForm = () => {
  //Esto es lo que estaba en contactInfo
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
	info.paintings = [1, 2, 3];

	info.purchaseId = localStorage.getItem("purchaseId");
	
	const handleClick = async () => {
		try {
			const response = await axios.post("checkout/contactInfo", info);
			navigate("/payment");
		} catch (e) {
			console.log(e);
		}
	};

  return (
    <div className="divContainerFormCart">
      <h1>Purchasing process</h1>
      <form>
        <div className="divContainerDetailsCart">
          <div className="divContainerInputsFormCart">
            <h3> Billings details</h3>
            <div className="divContainerNameLastCart">
              <div className="divNameLastCart">
                <label>First Name</label>
                <input type="text" name="firstName" />
              </div>
              <div className="divNameLastCart">
                <label>Last Name</label>
                <input type="text" name="lastName" />
              </div>
            </div>

            <label>Email</label>
            <input type="email" name="email" />

            <label>Telephone</label>
            <input type="text" name="telephone" />

            <label>Post Code</label>
            <input type="text" name="postCode" />

            <label>City</label>
            <input type="text" name="city" />

            <label>Street</label>
            <input type="text" name="street" />
            <div className="divContainerNumberFloorUnit">
              <div className="NumberFloorUnitCart">
                <label>Number</label>
                <input type="text" name="number" />
              </div>

              <div className="NumberFloorUnitCart">
                <label>Floor</label>
                <input type="text" name="floor" />
              </div>

              <div className="NumberFloorUnitCart">
                <label>Unit</label>
                <input type="text" name="Unit" />
              </div>
            </div>
          </div>

          <div className="divContainerItemsCart">
            <h3>Your order</h3>

{/* Ver el detalle del carrito */}
            {/* <div>
              {cartPainting.map((painting) => (
                <div className="divContainerProductCart">
                  <div>
                    <p>{painting.title}</p>
                    <img src={painting.photos[0].url} alt={painting.title} />
                  </div>
                  <p>USD$ {painting.price}</p>
                </div>
              ))}
            </div>
            <div className="divContainerTotalPrice">
              <h4>Total</h4>
              <h4>USD$ {totalPrice}</h4>
            </div> */}
            <div className="divContainerButtonCartContinue">
            <button onClick={handleClick}>Continue</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CartForm;
