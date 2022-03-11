import React, { useState, useEffect } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { AiTwotoneHeart, AiOutlineHeart, AiFillEdit } from "react-icons/ai";
import useCart from "../../customHooks/useCart.js";
import { NavLink } from "react-router-dom";
import "./CardPaint.css";
import useAuth from "../../customHooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { deleteFav, getFavs, postFav } from "../../redux/actions/actions.js";

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
  const { user } = useAuth();
  //console.log(user);

  useEffect(() => {
    if (user.role === "user") {
      dispatch(getFavs());
    }
  }, [dispatch]);

  // const favs = useSelector((state) => state.favs);
  // //console.log("soy favs", favs);

  const [isFavorite, setIsFavorite] = useState(false);

  function handlePress(id) {
    setIsFavorite(!isFavorite);
    !isFavorite ? dispatch(postFav(id)) : dispatch(deleteFav(id));

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
      {user.role === "guest" && <div className="divGuest"></div>}
      {user.role === "user" && (
        <button onClick={() => handlePress(id)} className="btn-header-icon">
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
      {user.role === "user" || user.role === "guest" ? (
        cart.includes(parseInt(id)) ? (
          <button
            className="btn_card_paint"
            onClick={() => remove(parseInt(id))}
          >
            REMOVE <FaCartArrowDown className="icon_add_paint" />
          </button>
        ) : (
          <button className="btn_card_paint" onClick={() => add(parseInt(id))}>
            ADD TO CART <FaCartArrowDown className="icon_add_paint" />
          </button>
        )
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default CardPaint;
