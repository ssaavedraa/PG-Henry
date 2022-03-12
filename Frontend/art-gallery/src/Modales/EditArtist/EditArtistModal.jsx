import React from "react";
import Modal from "react-modal";
import "./EditArtistModal.css";
import { FaTimes } from "react-icons/fa";
import UnderConstruction from "../../components/UnderConstruction/UnderConstruction";

const EditArtistModal = ({ openModalArtist, setOpenModalArtist }) => {
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
    <Modal isOpen={openModalArtist} style={customStyles} ariaHideApp={false}>
      <div className="modal-inner">
        <div className="containerHeaderModalArtist">
          <h3> Edit artist</h3>
          <div onClick={() => setOpenModalArtist(false)}>
            <FaTimes style={{ fontSize: "25px", cursor: "pointer" }} />
          </div>
        </div>
        <UnderConstruction />
      </div>
    </Modal>
  );
};

export default EditArtistModal;
