import React from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

import "./modalBtn.css";

const ModalBtn = ({
  openModal,
  setOpenModal,
  data,
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
     
    },
   
  };

  return (
    <Modal isOpen={openModal} style={customStyles} ariaHideApp={false}>
      <div className="modal-inner">
        <div className='containerHeaderModal'>
          <h3>Confirm</h3>
          <div onClick={() => setOpenModal(false)}>
            <FaTimes  style={{fontSize: "25px", cursor: "pointer" }}/>
          </div>
        </div>
        <div className="containerCardsModal">
          <div className="containerCardsModal-btns">
        <button onClick={() => setOpenModal(false)}>Agree</button>
        <button onClick={() => setOpenModal(false)}>Cancel</button>
            
          </div>
          
        </div>
      </div>
    </Modal>
  );
};

export default ModalBtn;
