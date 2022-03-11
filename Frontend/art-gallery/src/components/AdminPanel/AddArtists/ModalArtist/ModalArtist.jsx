import React from "react";
import Modal from "react-modal";
import img from "../../../../assets/img/profile.png";
import { FaTimes } from "react-icons/fa";
import { ImFolderUpload } from "react-icons/im";
import {addConfirmation} from "../../../utils/Notifications/Notifications.js";
import "./ModalArtist.css";

function ModalArtist({ openModal, openNewArtist, artists,isEdit,setIsEdit }) {

  let title = isEdit && artists ? "Edit Artist" : "New Artist";
  let name = isEdit && artists ? artists.name : "";
  let photo = isEdit && artists ? artists.photo : img;
  let email = isEdit && artists ? artists.email : "";
  let location = isEdit && artists ? artists.location : "";
  let biography = isEdit && artists ? artists.biography : "";

  function onChange(e) {
    const reader = new FileReader();
    reader.onload = function () {
      let image = document.getElementById("preview-artistimg");
      image.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  React.useEffect(() => {
    Modal.setAppElement("body");
  }, []);


  function confirmar(){
    addConfirmation()
    setIsEdit(false);
    clean();
  }

  function clean() {
    title = "New Artist";
    name = "";
    photo = img;
    email = "";
    location = "";
    biography = "hola";
  }

  return (
    <Modal
      isOpen={openModal}
      className="modal-artist-admin"
      onRequestClose={openNewArtist}
      overlayClassName="overlay-artist-admin"
    >
      <div className="header-modal-artist">
        <h3>{title}</h3>
        <button onClick={openNewArtist} className="btnCloseModalArtist">
          <FaTimes className="close-btn-modal" />
        </button>
      </div>

      <div className="form-modal-artist">
        <div className="data-main-artist">
          <div className="img-newArtist">
            <img src={photo} alt="img-new-artist" id="preview-artistimg" />
            <div className="addFileImage">
              <div className="labelAddtoFile">
                <ImFolderUpload className="icon-up" />
                <p>Add to file</p>
              </div>
              <input
                type="file"
                accept=".jpg, .jpeg, .png"
                className="input-file-image"
                onChange={onChange}
              />
            </div>
          </div>

          <div className="infoArtistEdit">
            <div className="main-NewArtist">
              <label>Name:</label>
              <input type="text" value={name}/>
            </div>
            <div className="main-NewArtist">
              <label>Email:</label>
              <input type="text" value={email}/>
            </div>
            <div className="main-NewArtist">
              <label>Location:</label>
              <input type="text" value={location}/>
            </div>
          </div>
        </div>
        <div className="data-second-artist">
          <div className="biography-NewArtist">
            <label>Biography:</label>
            <textarea name="" id="" cols="30" rows="10">{biography}</textarea>
          </div>
          <div className="btnModalArtist">
            <button id="create" onClick={confirmar}>Create</button>
            <button id="cancel" onClick={openNewArtist}>Cancel</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalArtist;
