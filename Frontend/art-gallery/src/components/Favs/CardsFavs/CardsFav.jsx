import React, { useEffect } from "react";
import "./CardsFavs.css";
import { Link } from "react-router-dom";
import { deleteFav } from "../functionFavs";
import { getFavs } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

export const CardsFav = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavs());
  }, [dispatch]);

  const favs = useSelector((state) => state.favs);
  //console.log("soy favs", favs);


  return (
    <div>
        <div>
          {favs.map((fav) => (
            <div key={fav.id} className="cardsFavs">
              <h2>{fav.title}</h2>
              <img src={fav.paintingPhoto} alt={fav.title} />
              <h3>{fav.artistName}</h3>
              <p>
                {fav.paintingHeight} x {fav.paintingWidth}
              </p>
			  <button onClick={()=> deleteFav(fav.id)}>Delete item</button>
              <h4>{fav.paintingprice}</h4>
            </div>
          ))}
        </div>
      ) : (
        <div>
          Nothing here. <Link to="/gallery">See artworks here!</Link>
        </div>
      )}
    </div>
  );
};
