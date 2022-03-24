import React, { useEffect, useRef, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { AiTwotoneHeart, AiOutlineHeart, AiFillEdit } from "react-icons/ai";
import useCart from "../../customHooks/useCart.js";
import { ToastContainer, toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import "./CardPaint.css";
import PaintingModal from "../../Modales/EditPainting/PaintingModal";
import useAuth from "../../customHooks/useAuth";
import { addFav, deleteFav } from "../Favs/functionFavs.js";
import { useDispatch } from "react-redux";
import { getFavs } from "../../redux/actions/actions.js";
import loading from "../../assets/img/loading-img.gif";

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
  const { user } = useAuth();
  //Estado para el modal
  const [openModal, setOpenModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(fav);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFavorite(fav);
  }, [fav, setIsFavorite]);

  async function handlePress(id) {
    setIsFavorite(!isFavorite);
    !isFavorite ? await addFav(id) : await deleteFav(id);
    dispatch(getFavs());
  }

  const { add, remove, cart } = useCart();

  function addToCart(id) {
    add(parseInt(id));
    toast.success("Painting has been added to your cart");
  }

  return (
    <div className="card">
      <PaintingModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        ObraId={id}
      />
      {user.role === "admin" && (
        <button
          onClick={() => setOpenModal(true)}
          className="btn-header-icon-edit"
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
        {image ? (
          <img src={image} alt="img-obra" className="image" />
        ) : (
          <img src={loading} alt="loading" width="40px" />
        )}
        <div className="data-paint">
          <h5>{title}</h5>
          <div className="linea"></div>
          <h6 className="price">USD$ {price}</h6>

          <p>{artist.name}</p>
          <p>
            {height} cm x {width} cm
          </p>
          <p>{techniques[0].name}</p>
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
          <button className="btn_card_paint" onClick={() => addToCart(id)}>
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
