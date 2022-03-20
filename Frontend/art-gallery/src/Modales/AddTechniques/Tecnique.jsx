import React, { useState } from "react";
import Modal from "react-modal";
import "./TechniqueModal.css";
import { FaTimes } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import { getTechnique, addTechnique } from "../../redux/actions/actions";
import { confirmationSweet } from "../../components/utils/Notifications/Notifications";

export default function TechniqueModal({
  openTechniqueModal,
  setOpenTechniqueModal,
}) {
  const dispatch = useDispatch();
  const technique = useSelector((state) => state.technique);

  React.useEffect(() => {
    dispatch(getTechnique());
  }, [dispatch]);

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

  const [inputTechnique, setInputTechnique] = useState({
    name: "",
    description: "",
  });
  console.log(inputTechnique, "soy input");

  const [errors, setError] = useState({});
  const [applyChanges, setApplyChanges] = useState(true);
  console.log(errors, "soy errores");

  function validate(input) {
    setApplyChanges(true);
    const allTechiques = [];
    console.log(allTechiques, "soy todas la tecnicas");
    technique.map((d) => allTechiques.push(d.name));
    let errors = {};
    if (allTechiques.includes(input.name)) {
      errors.message = "This Technique is already added";
    } else if (!input.name || !input.description) {
      errors.message = "*All inputs are required";
    } else {
      setApplyChanges(false);
    }
    return errors;
  }

  function handleChangeTech(e) {
    if (e.target.name === "name") {
      const tec = e.target.value.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
      setInputTechnique({
        ...inputTechnique,
        name: tec,
      });
    } else {
      setInputTechnique({
        ...inputTechnique,
        description: e.target.value,
      });
    }
    setError(
      validate({
        ...inputTechnique,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    confirmationSweet(
      inputTechnique.name,
      confirm,
      closeModal,
      false,
      false,
      true
    );
  }

  function confirm() {
    dispatch(addTechnique(inputTechnique));
    setInputTechnique({
      name: "",
      description: "",
    });
  }

  function closeModal() {
    setOpenTechniqueModal(false);
  }

  return (
    <Modal
      isOpen={openTechniqueModal}
      style={customStyles}
      setOpenModalArtist={setOpenTechniqueModal}
      ariaHideApp={false}
    >
      <div className="modal-technique">
        <div className="technique-box">
          <form>
            <div>
              <h2>ADD TECHNIQUE</h2>
            </div>
            <div>
              <label>Name:</label>
            </div>
            <div>
              <input
                key="name"
                className="input"
                name="name"
                value={inputTechnique.name}
                onChange={handleChangeTech}
              />
            </div>

            <div>
              <div>
                <label>Description :</label>
              </div>
              <textarea
                name="description"
                key="description"
                className="input"
                value={inputTechnique.description}
                onChange={handleChangeTech}
              />
            </div>
            <div className="error">
              {errors.message ? <p>{errors.message}</p> : <p></p>}
            </div>

            <div>
              <button
                disabled={applyChanges}
                onClick={handleSubmit}
                className="btn-edit"
              >
                ADD NEW TECHNIQUE
              </button>
            </div>
          </form>
        </div>
        <div className="close-btn" onClick={() => setOpenTechniqueModal(false)}>
          <FaTimes style={{ fontSize: "25px", cursor: "pointer" }} />
        </div>
      </div>
    </Modal>
  );
}
