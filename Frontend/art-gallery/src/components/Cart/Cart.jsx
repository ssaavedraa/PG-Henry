import React from "react";
import { useState, useEffect } from "react";
import useCart from "../../customHooks/useCart.js";
import axios from "axios";
import "./Cart.css";
import CartCards from "./CartCards/CartCards.jsx";

const Cart = () => {
  const { cart, removeAll } = useCart();

  const getPaintings = async (cart) => {
    const paintings = [];
    for (let i = 0; i < cart.length; i++) {
      const dbPaiting = await axios.get(
        `http://localhost:3001/painting/get/${cart[i]}`
      );
      paintings.push(dbPaiting.data);
    }
    return paintings;
  };

  const [cartPainting, setCartPainting] = useState([]);
  console.log(cartPainting);
  useEffect(() => {
    getPaintings(cart).then((res) => setCartPainting(res));
  }, [cart]);

  //Suma el precio de las pinturas
  let totalPrice = 0;

  cartPainting.forEach((painting) => {
    totalPrice = totalPrice + painting.price;
  });

  return (
    <div className="containerCartAll">
      <h1>Cart</h1>
      <div className="containerCart">
        <div className="divPrecio">
          <button onClick={() => removeAll()}>Remove all items</button>
          <h5>Price</h5>
        </div>
        <CartCards cartPainting={cartPainting} />
        <div className="divContainerTotal">
        Total({cart.length} product):
          <p>
               USD$ {totalPrice}
          </p>
        </div>
        <div className="divButtons">
          <button>Go back</button>
          <button>Got to pay</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
