import React from "react";
import "./CardsFavs.css";
import { Link } from "react-router-dom";
import { deleteFav } from "../functionFavs";

export const CardsFav = ({ favs }) => {
	const id = favs?.map(({ id }) => id).find((id) => id === id )
	console.log('soy id', id)

  return (
    <div>
      {console.log(favs)}
      {favs && favs.length > 0 ? (
        <div>
          {favs.map((fav) => (
            <div key={fav.id} className="cardsFavs">
              <h2>{fav.title}</h2>
              <img src={fav.paintingPhoto} alt={fav.title} />
              <h3>{fav.artistName}</h3>
              <p>
                {fav.paintingHeight} x {fav.paintingWidth}
              </p>
			  <button onClick={()=> deleteFav(id.id)}>Delete item</button>
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
