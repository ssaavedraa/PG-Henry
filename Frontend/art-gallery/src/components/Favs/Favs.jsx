import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "./Favs.css";
import useCart from "../../customHooks/useCart";
import { useDispatch, useSelector } from "react-redux";
import { deleteFav, getFavs } from "../../redux/actions/actions.js";

const Favs = () => {

  //Hook del carrito 
  const { add } = useCart();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavs());
  }, [dispatch]);

  const favs = useSelector((state) => state.favs);
  console.log("soy favs", favs);

  return (
    <div>

   
    {
      favs && favs.length > 0 ? (
       
        <div className="containerFavAll">
          <h1>Favs</h1>
          <div className="containerFav">
            <div className="divPrecioFav">
              <h5>Price</h5>
            </div>
            {
              favs.map((fav) => (
                <div>
                  <h2>{fav.title}</h2>
                  <img src={fav.paintingPhoto} alt={fav.title}/>
                  <h3>{fav.artistName}</h3>
                  <p>{fav.paintingHeight} x {fav.paintingWidth}</p>
                  <h4>{fav.paintingprice}</h4>
                </div>
              ))
            }
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
      ) : (
<div> upps, los duendes </div>
      )

    }
    </div>
  );
};

export default Favs;
