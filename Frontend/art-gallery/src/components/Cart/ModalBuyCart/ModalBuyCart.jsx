import React from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import "./ModalBuyCart.css";
import CartForm from "../CartForm/CartForm";

const ModalBuyCart = ({ openModalBuy, setOpenModalBuy, cartPainting, totalPrice }) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      // padding: "50px",
    },
  };

  return (
    <Modal isOpen={openModalBuy} style={customStyles} ariaHideApp={false}>
      <div className="modal-inner-cart">
        <div className="containerHeaderModalCart">
          <h2>Checkout</h2>
          <div onClick={() => setOpenModalBuy(false)}>
            <FaTimes style={{ fontSize: "25px", cursor: "pointer" }} />
          </div>
        </div>
          <CartForm cartPainting={cartPainting} totalPrice={totalPrice}/>
      </div>
    </Modal>
  );
};

export default ModalBuyCart;
