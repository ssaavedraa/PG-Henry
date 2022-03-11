import React from "react";
import './CardsFavs.css'

export const CardsFav = ({favs}) => {
  return (
    <div>
      {favs && favs.length > 0 ? (
        <div>
          {favs.map((fav) => (
            <div key={fav.id} className='cardsFavs'>
              <h2>{fav.title}</h2>
              <img src={fav.paintingPhoto} alt={fav.title} />
              <h3>{fav.artistName}</h3>
              <p>
                {fav.paintingHeight} x {fav.paintingWidth}
              </p>
              <h4>{fav.paintingprice}</h4>
            </div>
          ))}
        </div>
      ) : (
        <div>Nothing here. See artworks here!</div>
      )}
    </div>
  );
};
