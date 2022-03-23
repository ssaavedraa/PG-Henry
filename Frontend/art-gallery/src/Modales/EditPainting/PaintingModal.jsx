import React from "react";
import Modal from "react-modal";
import "./PaintingModal.css";
import { FaTimes } from "react-icons/fa";
import UnderConstruction from "../../components/UnderConstruction/UnderConstruction";
import EditPaintinfForm from "../EditPainting/editPaintingForm/EditPaintingForm"



const EditPaintingModal = ({ openModal, setOpenModal ,ObraId}) => {
 
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
    <Modal isOpen={openModal} style={customStyles} ariaHideApp={false} ObraId={ObraId} >
      <div className="modal-inner-painting">
      <div className="form-box">
      <EditPaintinfForm isOpen={openModal} ObraId={ObraId} setOpenModal={setOpenModal}/>
        <div onClick={() => setOpenModal(false)}>
            <FaTimes style={{ fontSize: "25px", cursor: "pointer" }} />
          </div>
        </div>

      </div>
    </Modal>
  );
};

export default EditPaintingModal;
