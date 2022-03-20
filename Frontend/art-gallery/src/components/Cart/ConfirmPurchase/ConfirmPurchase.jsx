import React, { useEffect } from "react";
import "./ConfirmPurchase.css";

const ConfirmPurchase = () => {
  //Me traje esto de payment
  useEffect(() => {
    const script = document.createElement("script");

    const attr_data_preference = document.createAttribute("data-preference-id");
    attr_data_preference.value = localStorage.getItem("preferenceId");

    script.src =
      "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script.setAttributeNode(attr_data_preference);

    // Elemento en el que renderizo, div, boton
    document.getElementById("button1").appendChild(script);
    return () => {
      document.getElementById("button1").removeChild(script);
    };
  }, []);

  return (
    <div className="divContainerConfirmPurchase">
      <h1>Confirm purchase</h1>
      <div className="divContainerDetailsPurchase">
        <div className="divContainerInputsDetailPurchase">
          <h3>Billings details</h3>

          <label>Name</label>
          <input type="text" name="name" />

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
        <div className="divContainerItemsPurchase">
          <h3>Your order</h3>
          <div className='divContainerButtonMercadoPago'>
          <button id="button1"></button>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default ConfirmPurchase;
