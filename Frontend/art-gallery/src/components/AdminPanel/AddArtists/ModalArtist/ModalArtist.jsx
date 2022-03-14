import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { getArtistById } from "../../../../redux/actions/actions";
import img from "../../../../assets/img/profile.png";
import { FaTimes } from "react-icons/fa";
import { ImFolderUpload } from "react-icons/im";
import { addConfirmation } from "../../../utils/Notifications/Notifications.js";
import "./ModalArtist.css";

function ModalArtist({ openModal, openNewArtist, idArtist, isEdit }) {
  const dispatch = useDispatch();

  const artist = useSelector((state) => state.artistId);

  const title = isEdit === "true" ? "Edit Artist" : "New Artist";
  let name = isEdit === "true" ? "Artist Name" : "";
  const photo = img;
  let email = isEdit === "true" ? "Artist Email" : "";
  let location = isEdit === "true" ? "Artist Location" : "";
  let biography = isEdit === "true" ? "Artist Biography" : "";

  const [data, setData] = useState({
    name: "",
    email: "",
    location: "",
    biography: "",
  });

  React.useEffect(() => {
    Modal.setAppElement("body");
    if (isEdit === "true") {
      dispatch(getArtistById(idArtist));
    }
  }, [dispatch, isEdit]);

  function onChange(e) {
    const reader = new FileReader();
    reader.onload = function () {
      let image = document.getElementById("preview-artistimg");
      image.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  }

/*   React.useEffect(() => {
    return () => dispatch(getArtistById());
  }, [dispatch]); */

  function confirmar() {
    addConfirmation();
  }

  function updateData(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
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
        <button
          onClick={() => openNewArtist(false)}
          className="btnCloseModalArtist"
        >
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
              <input
                type="text"
                name="name"
                value={name}
                onChange={updateData}
              />
            </div>
            <div className="main-NewArtist">
              <label>Email:</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={updateData}
              />
            </div>
            <div className="main-NewArtist">
              <label>Location:</label>
              <input
                type="text"
                name="location"
                value={location}
                onChange={updateData}
              />
            </div>
          </div>
        </div>
        <div className="data-second-artist">
          <div className="biography-NewArtist">
            <label>Biography:</label>
            <textarea
              name="biography"
              id=""
              cols="30"
              rows="10"
              onChange={updateData}
              value={biography}
            />
          </div>
          <div className="btnModalArtist">
            <button id="create" onClick={confirmar}>
              Create
            </button>
            <button id="cancel" onClick={() => openNewArtist(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalArtist;
