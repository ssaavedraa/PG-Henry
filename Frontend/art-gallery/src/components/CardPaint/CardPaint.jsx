import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { AiTwotoneHeart, AiOutlineHeart, AiFillEdit } from "react-icons/ai";
import useCart from "../../customHooks/useCart.js";
import { NavLink } from "react-router-dom";
import "./CardPaint.css";
import useAuth from "../../customHooks/useAuth";
import { useDispatch } from "react-redux";
import { postFav } from "../../redux/actions/actions.js";


function CardPaint({
  image,
  title,
  artist,
  height,
  width,
  techniques,
  price,
  id,
}) {

  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const { user } = useAuth();
  console.log(user)
  
  function handlePress() {
    setIsFavorite(!isFavorite);
    dispatch(postFav(id))
    //Agrego el dispatch del post del like
  }

  const { add, remove, cart } = useCart();

  return (
    <div className="card">
      {user.role === "admin" && (
        <button
          /* onClick=Aqui abriria el modal para editar */ className="btn-header-icon"
        >
          <AiFillEdit className="icon-header-card" />
        </button>
      )}
      {user.role === "guest" && (
        <div className="divGuest"></div>
      )}
      {user.role === "user" && (
        <button onClick={handlePress} className="btn-header-icon">
          {isFavorite ? (
            <AiTwotoneHeart className="icon-header-cardFavorite" />
          ) : (
            <AiOutlineHeart className="icon-header-card" />
          )}
        </button>
      )}
      <NavLink to={"/detailpainting/" + id} className="linksCard" key={id}>
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
      {user.role ===
        "user" && (
          cart.includes(parseInt(id)) ? (
            <button
              className="btn_card_paint"
              onClick={() => remove(parseInt(id))}
            >
              REMOVE <FaCartArrowDown className="icon_add_paint" />
            </button>
          ) : (
            <button
              className="btn_card_paint"
              onClick={() => add(parseInt(id))}
            >
              ADD TO CART <FaCartArrowDown className="icon_add_paint" />
            </button>
          )
        )}
    </div>
  );
}

export default CardPaint;
