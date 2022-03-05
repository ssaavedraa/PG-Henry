import React from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import CardsPaints from "../../containers/CardsPaints/CardsPaints";

const ModalArtworks = ({ openModal, setOpenModal }) => {
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
    <Modal isOpen={openModal} style={customStyles} ariaHideApp={false}>
      <div className="modal-inner">
        <div onClick={() => setOpenModal(false)}>
          <FaTimes />
        </div>
        <CardsPaints />
        <div className="buttpn">
          <button onClick={() => setOpenModal(false)}>Cerrar</button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalArtworks;
