import React from "react";
import Modal from "react-modal";
import "./AddReviewModal.css";
import { FaTimes } from "react-icons/fa";
import AddAReview from "./AddAReview"


const AddReviewModal = ({openModalReview, setOpenModalReview }) => { 

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
      padding: "none"                 
    },
  };
 

  return (
    <Modal isOpen={openModalReview} style={customStyles} setOpenModalReview={setOpenModalReview} ariaHideApp={false}>
      <div className="modal-editart">
               <div className="form-box">
                 
                  <AddAReview isOpen={openModalReview}  setOpenModalReview={setOpenModalReview} /> 
                        
        
        <div onClick={() => setOpenModalReview(false)}>
            <FaTimes style={{ fontSize: "25px", cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddReviewModal;
