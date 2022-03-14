import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { getArtistById } from "../../../../redux/actions/actions";
import img from "../../../../assets/img/profile.png";
import { FaTimes } from "react-icons/fa";
import { ImFolderUpload } from "react-icons/im";
import { addConfirmation } from "../../../utils/Notifications/Notifications.js";
import ModalAddArtist from "../../../../Modales/EditArtist/AddArtistForm/AddArtistForm";
import "./ModalArtist.css";

function ModalArtist({ openModal, openNewArtist, idArtist, isEdit }) {
  React.useEffect(() => {
    Modal.setAppElement("body");
    
  });

/*   function onChange(e) {
    const reader = new FileReader();
    reader.onload = function () {
      let image = document.getElementById("preview-artistimg");
      image.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  } */

  function confirmar() {
    addConfirmation();
  }



  return (
    <Modal
      isOpen={openModal}
      className="modal-artist-admin"
      onRequestClose={openNewArtist}
      overlayClassName="overlay-artist-admin"
    >
      <div className="header-modal-artist">
        <h3>Edit Artist</h3>
        <button
          onClick={() => openNewArtist(false)}
          className="btnCloseModalArtist"
        >
          <FaTimes className="close-btn-modal" />
        </button>
      </div>

      <ModalArtist />
    </Modal>
  );
}

export default ModalArtist;
