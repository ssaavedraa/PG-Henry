import React from "react";
import { useState, useEffect } from "react";
import useCart from "../../customHooks/useCart.js";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Cart.css";
import CartCards from "./CartCards/CartCards.jsx";
import { ToastContainer, toast } from "react-toastify";
import CheckoutButton from "../MercadoPago/checkoutButton.jsx";

const Cart = () => {
  const { cart, removeAll } = useCart();

  const getPaintings = async (cart) => {
    const paintings = [];
    for (let i = 0; i < cart.length; i++) {
      const dbPaiting = await axios.get(`/painting/get/${cart[i]}`);
      paintings.push(dbPaiting.data);
    }
    return paintings;
  };

  const [cartPainting, setCartPainting] = useState([]);
 

  useEffect(() => {
    getPaintings(cart).then((res) => setCartPainting(res));
  }, [cart]);

  //Suma el precio de las pinturas
  let totalPrice = 0;

  cartPainting.forEach((painting) => {
    totalPrice = totalPrice + painting.price;
  });

  //Sirve para el toastify
  const removeAllCart = () => {
    removeAll();
    toast.success("All items was delete");
  };

  return (
    <div className="containerCartAll">
      <ToastContainer
        position="bottom-center"
        theme="dark"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1>Cart</h1>
      <div className="containerCart">
        <div className="divPrecioCart">
          <button onClick={() => removeAllCart()}>Remove all items</button>
          <h5>Price</h5>
        </div>
        <CartCards cartPainting={cartPainting} />
        <div className="divContainerTotal">
          Total({cart.length} product):
          <p>USD$ {totalPrice}</p>
        </div>
        <div className="divButtons">
          <Link to="/gallery">
            <button>Continue shopping</button>
          </Link>
          <CheckoutButton />
        </div>
      </div>
    </div>
  );
};

export default Cart;
