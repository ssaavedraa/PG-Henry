import React, { useEffect } from "react";
import "./CardsFavs.css";
import { Link } from "react-router-dom";
import { deleteFav } from "../functionFavs";
import { getFavs } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

export const CardsFav = () => {
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favs);
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
              <div className='detailsImgDiv'>
                <img src={fav.paintingPhoto} alt={fav.title} />
                <div className='containerDetailsFavs'>
                  <h5>{fav.title}</h5>
                  <p>{fav.artistName}</p>
                  <p>
                    {fav.paintingHeight} x {fav.paintingWidth}
                  </p>
                  <button onClick={() => deleteFav(fav.id)}>Delete item</button>
                </div>
              </div>
              <h4>USD$ {fav.paintingprice}</h4>
            </div>
          ))}
        </div>
      ) : (
        <div className='divNothinghere'>
          Nothing here. <Link to="/gallery">See artworks here!</Link>
        </div>
      )}
    </div>
  );
};
