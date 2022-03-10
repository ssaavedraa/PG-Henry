import React from "react";
import { Link } from "react-router-dom";
import "./Favs.css";
import useCart from "../../customHooks/useCart";

const Favs = () => {

  //Hook del carrito 
  const { add } = useCart();


  return (
    <div className="containerFavAll">
      <h1>Favs</h1>
      <div className="containerFav">
        <div className="divPrecioFav">
          <h5>Price</h5>
        </div>
        <div className="divContainerTotal">
          <p>USD$</p>
        </div>
        <div className="divButtons">
          <Link to="/gallery">
            <button>See more paintings</button>
          </Link>
          <button onClick={() => {add()}}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Favs;
