import React from "react";
import "./CartForm.css";

const CartForm = ({ cartPainting, totalPrice }) => {
  //console.log('soy las pinturas en el cart', cartPainting)

  return (
    <div className="divContainerFormCart">
      <form>
        <div className="divContainerDetailsCart">
          <div className="divContainerInputsFormCart">
            <h3> Billings details</h3>
            <div className="divContainerNameLastCart">
              <div className="divNameLastCart">
                <label>First Name</label>
                <input type="text" required name="firstName" />
              </div>
              <div className="divNameLastCart">
                <label>Last Name</label>
                <input type="text" required name="lastName" />
              </div>
            </div>
            <label>Telephone</label>
            <input type="text" required name="telephone" />

            <label>Post Code</label>
            <input type="text" required name="postCode" />

            <label>City</label>
            <input type="text" required name="city" />

            <label>Street</label>
            <input type="text" required name="street" />

            <label>Number</label>
            <input type="text" required name="number" />

            <label>Floor</label>
            <input type="text" required name="floor" />

            <label>Unit</label>
            <input type="text" required name="Unit" />
          </div>

          <div className="divContainerItemsCart">
            <h3>Your order</h3>
            <div className="divProductSubTotalCart">
              <h5>Product</h5>
              <h5>Subtotal</h5>
            </div>

            <div>
              {cartPainting.map((painting) => (
                <div className="divContainerProductCart">
                  <div>
                    <p>{painting.title}</p>
                    {/* <img src={painting.photos[0].url} alt={painting.title} /> */}
                  </div>
                  <p>USD$ {painting.price}</p>
                </div>
              ))}
            </div>
            <div className="divContainerTotalPrice">
              <h4>Total</h4>
              <h4>USD$ {totalPrice}</h4>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CartForm;
