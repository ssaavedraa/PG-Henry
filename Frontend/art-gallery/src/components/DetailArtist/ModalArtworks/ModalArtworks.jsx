import React from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import CardsPaints from "../../../containers/CardsPaints/CardsPaints";
import "./ModalArtworks.css";

const ModalArtworks = ({
  openModal,
  setOpenModal,
  paintingsArtist,
  artists,
}) => {

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
        <div className='containerHeaderModal'>
          <h3>Paintings of {artists.name}</h3>
          <div onClick={() => setOpenModal(false)}>
            <FaTimes  style={{fontSize: "25px", cursor: "pointer" }}/>
          </div>
        </div>
        <div className="containerCardsModal">
          <CardsPaints paintings={paintingsArtist} />
        </div>
      </div>
    </Modal>
  );
};

export default ModalArtworks;
