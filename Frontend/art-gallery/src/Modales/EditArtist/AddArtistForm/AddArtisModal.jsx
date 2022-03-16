import React from "react";
import Modal from "react-modal";
import "./AddArtistModal.css";
import { FaTimes } from "react-icons/fa";
// import UnderConstruction from "../../components/UnderConstruction/UnderConstruction";
import AddArtistForm from "./AddArtistForm"


const AddArtistModal = ({openModalArtist, setOpenModalArtist , artist}) => { 

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
    <Modal isOpen={openModalArtist} style={customStyles} setOpenModalArtist={setOpenModalArtist} ariaHideApp={false} artist={artist}>
      <div className="modal-editart">
               <div className="form-box">
                 
                  <AddArtistForm isOpen={openModalArtist}  setOpenModalArtist={setOpenModalArtist} /> 
                        
        
        <div onClick={() => setOpenModalArtist(false)}>
            <FaTimes style={{ fontSize: "25px", cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddArtistModal;
