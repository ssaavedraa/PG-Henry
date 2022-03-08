import React from "react";
import { useState, useEffect } from "react";
import useCart from "../../customHooks/useCart.js";
import axios from "axios";
import "./Cart.css";

const Cart = () => {
  const { cart, remove, add } = useCart();

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

  useEffect(() => {
    getPaintings(cart).then((res) => setCartPainting(res));
  }, [cart]);

  return (
    <div className="containerCartAll">
      <h1>Cart</h1>
      <div className="containerCart">
        <div className="containerCardsCart">
         
            {cartPainting.map((painting) => (
              <div key={painting.id} className="cardsCart">
                <img src={painting.photos[0].url} alt="No img" />
                <h1>{painting.title}</h1>
                <h2>{painting.artist.name}</h2>
                <p>
                  Size: {painting.height} x {painting.width}
                </p>
                <button onClick={() => remove(painting.id)}>x</button>
              </div>
            ))}
        
        </div>
        <div className='divButtons'>
          <button>Go back</button>
          <button>Got to pay</button>
      </div>
      </div>
     
    </div>
  );
};

export default Cart;
