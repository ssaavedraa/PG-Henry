import React, { useEffect } from "react";
import "./CardsFavs.css";
import { Link } from "react-router-dom";
import { deleteFav } from "../functionFavs";
import { getFavs } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import useCart from '../../../customHooks/useCart.js';

export const CardsFav = () => {
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favs);
  const { add } = useCart();
  //console.log("soy favs", favs);

  useEffect(() => {
    dispatch(getFavs());
  }, [dispatch]);

  return (
    <div>
      {favs && favs.length > 0 ? (
        <div className="containerCardsFavsFavs">
          {favs.map((fav) => (
            <div key={fav.id} className="cardsFavs">
              <div className="detailsImgDiv">
                <img src={fav.paintingPhoto} alt={fav.title} />
                <div className="containerDetailsFavs">
                  <h5>
                    <Link to={`/detailpainting/${fav.id}`}>{fav.title}</Link>
                  </h5>
                  <p>{fav.artistName}</p>
                  <p>
                    {fav.paintingHeight} x {fav.paintingWidth}
                  </p>
                  <button
                    onClick={() => {
                      deleteFav(fav.id).then(() => {
                        dispatch(getFavs());
                      });
                    }}
                  >
                    Delete item
                  </button>
                </div>
              </div>
              <h4>USD$ {fav.paintingprice}</h4>
              <button onClick={() => add(parseInt(fav.id))}>Agregar al carrito</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="divNothinghere">
          Nothing here. <Link to="/gallery">See artworks here!</Link>
        </div>
      )}
    </div>
  );
};
