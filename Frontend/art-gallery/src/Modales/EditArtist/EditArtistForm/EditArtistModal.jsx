import React from "react";
import Modal from "react-modal";
import "./EditArtistModal.css";
import { FaTimes } from "react-icons/fa";
// import UnderConstruction from "../../components/UnderConstruction/UnderConstruction";


import EditArtistForm from "./EditArtistForm"

const EditArtistModal = ({ openEditArtistModal, setOpenEditArtistModal ,artistId}) => { 
  
console.log(artistId, "soy modal edit")
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
    <Modal isOpen={openEditArtistModal} setOpenEditArtistModal= {setOpenEditArtistModal} style={customStyles} ariaHideApp={false} artistId={artistId}>
      <div className="modal-editart">
               <div className="form-box">
                 <EditArtistForm isOpen={openEditArtistModal} setOpenEditArtistModal={setOpenEditArtistModal} artistId={artistId} /> 
                 
                        
        
        <div onClick={() =>setOpenEditArtistModal(false)}>
            <FaTimes style={{ fontSize: "25px", cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditArtistModal;
