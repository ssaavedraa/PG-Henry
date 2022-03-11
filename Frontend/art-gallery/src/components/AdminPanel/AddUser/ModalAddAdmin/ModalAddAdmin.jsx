import React from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

import "./modalAdmin.css";

const ModalAddAdmin = ({
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
      <div className="modal-inner-admin">
        <div className='containerHeaderModal-admin'>
          <h3>ADD ADMIN</h3>
          <div onClick={() => setOpenModal(false)}>
            <FaTimes  style={{fontSize: "25px", cursor: "pointer" }}/>
          </div>
        </div>
        <div className="containerCardsModal-admin">
          <div className="containerCardsModal-form">

            <form>
              <div className="inputformAdmin">
              <label>FirstName</label>
              <input
              type='text'
              placeholder='Firstname'
              ></input>
              </div>

              <div className="inputformAdmin">
              <label>LastName</label>
              <input
              type='text'
              placeholder='LastName'
              ></input>
              </div>

              <div className="inputformAdmin">
              <label>Email</label>
              <input
              type='text'
              placeholder='Email'
              ></input>
              </div>

              <div className="inputformAdmin">
              <label>Password</label>
              <input
              type='text'
              placeholder='Password'
              ></input>
              </div>

              <button onClick={()=> setOpenModal(false)}>ADD</button>
            </form>
          </div>
          
        </div>
      </div>
    </Modal>
  );
};

export default ModalAddAdmin;
