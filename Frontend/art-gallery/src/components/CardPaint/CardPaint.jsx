import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { AiOutlineStar, AiFillStar, AiFillEdit } from "react-icons/ai";

import { NavLink } from "react-router-dom";
import "./CardPaint.css";

function CardPaint({
  image,
  title,
  artist,
  height,
  width,
  techniques,
  price,
  id,
  isAdmin,
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handlePress() {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="card">
      {isAdmin ? <button /* onClick=Aqui abriria el modal para editar */  className="btn-header-icon">
          <AiFillEdit className="icon-header-card" />
      </button> :
      <button onClick={handlePress} className="btn-header-icon">
        {isFavorite ? (
          <AiFillStar className="icon-header-cardFavorite" />
        ) : (
          <AiOutlineStar className="icon-header-card" />
        )}
      </button>
      }
      <NavLink to={"/detailObra/" + id} className="linksCard" key={id}>
        <img src={image} alt="img-obra" className="image" />
        <div className="data-paint">
          <h4>{title}</h4>
          <h5>{artist.name}</h5>
          <p>
            Size: {height} x {width}
          </p>
          <p>Technique: {techniques[0].name}</p>
          <p className="price">USD$ {price}</p>
        </div>
      </NavLink>

      <button className="btn_card_paint">
        ADD TO CART <FaCartArrowDown className="icon_add_paint" />
      </button>
    </div>
  );
}

export default CardPaint;
