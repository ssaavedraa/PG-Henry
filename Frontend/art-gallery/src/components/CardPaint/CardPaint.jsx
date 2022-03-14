import React, { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { AiTwotoneHeart, AiOutlineHeart, AiFillEdit } from "react-icons/ai";
import useCart from "../../customHooks/useCart.js";
import { NavLink } from "react-router-dom";
import "./CardPaint.css";
import useAuth from "../../customHooks/useAuth";
import EditPaintingModal from "../../Modales/EditPainting/EditPaintingModal.jsx";
import { addFav, deleteFav} from '../Favs/functionFavs.js';

function CardPaint({
  image,
  title,
  artist,
  height,
  width,
  techniques,
  price,
  fav,
  id,
}) {

	//console.log(user);
	const { user } = useAuth();
	//Estado para el modal
	const [openModal, setOpenModal] = useState(false);

  const [isFavorite, setIsFavorite] = useState(fav);
 
  useEffect(() => {
		setIsFavorite(fav);
	}, [fav, setIsFavorite]);


	function handlePress(id) {
		setIsFavorite(!isFavorite);
		!isFavorite ? addFav(id) : deleteFav(id);
	}

  const { add, remove, cart } = useCart();

  return (
    <div className="card">
      <EditPaintingModal openModal={openModal} setOpenModal={setOpenModal} />
      {user.role === "admin" && (
        <button onClick={() => setOpenModal(true)} className="btn-header-icon-edit">
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
