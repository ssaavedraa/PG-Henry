import React from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

import "./modalBtn.css";

import { banUser, giveUserAdmin, removeUser, resetPasswordUser, unBanUser } from "../../../../redux/actions/actions";
import { useDispatch } from "react-redux";

const ModalBtn = ({
  openModal,
  setOpenModal,
  data,
  id,
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

 const dispatch =  useDispatch()

  const handleAgree = () => {
    if (data.mensaje === 'remove') {
      dispatch( (removeUser(data.id))) 
      setOpenModal(false)
    } else if (data.mensaje === 'add'){
      dispatch(giveUserAdmin(data.id)) 
      setOpenModal(false)
    }else if (data.mensaje === 'ban'){
      dispatch(banUser(data.id)) 
      setOpenModal(false)
    }else if (data.mensaje === 'unban'){
      dispatch(unBanUser(data.id)) 
      setOpenModal(false)
    }else if (data.mensaje === 'reset'){
      dispatch(resetPasswordUser(data.id))  
      setOpenModal(false)
    }
    
  }
  return (
    <Modal isOpen={openModal} style={customStyles} ariaHideApp={false}>
      <div className="modal-inner-btn">
        <div className='containerHeaderModal-btn'>
          <h3>Confirm</h3>
          <div onClick={() => setOpenModal(false)}>
            <FaTimes  style={{fontSize: "25px", cursor: "pointer" }}/>
          </div>
        </div>
        <div className="containerCardsModal">
          <div className="containerCardsModal-btns">
        <button onClick={handleAgree}>Agree</button>
        <button onClick={() => setOpenModal(false)}>Cancel</button>
            
          </div>
          
        </div>
      </div>
    </Modal>
  );
};

export default ModalBtn;
