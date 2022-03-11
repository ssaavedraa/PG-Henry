import React from "react";
import Modal from "react-modal";
import './EditPaintingModal.css';
import { FaTimes } from "react-icons/fa";

const EditPaintingModal = ({ openModal, setOpenModal }) => {
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
        EditPaintingModal
        <div onClick={() => setOpenModal(false)}>
            <FaTimes  style={{fontSize: "25px", cursor: "pointer" }}/>
          </div>
      </div>
    </Modal>
  );
};

export default EditPaintingModal;
