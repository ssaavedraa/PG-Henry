

import React, { useState } from "react";
import Modal from "react-modal";
import "./TechniqueModal.css";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { 
  getTechnique,
  addTechnique,
} from "../../redux/actions/actions";


export default function TechniqueModal({openTechniqueModal, setOpenTechniqueModal}) {
    const dispatch = useDispatch();

  React.useEffect(() => {    
    dispatch(getTechnique());
  }, [dispatch]);

  const technique = useSelector((state) => state.technique);

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

  const [TechExist, setTechExist] = useState("");
  const [inputTechnique, setInputTechnique] = useState({
    name:"",
    description: ""
  });

  function handleChangeTech(e) {
    const tec = e.target.value.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

    const allTechiques = [];

    technique.map((d) => allTechiques.push(d.name));

    if (allTechiques.includes(tec)) {
      setTechExist({
        message: "This Technique is already added",
      });
    } else {
      setInputTechnique({
        ...inputTechnique,
        inputTechnique: e.target.value,
      });
    }
  }
    return (
        <Modal
        isOpen={openTechniqueModal}
        style={customStyles}
        setOpenModalArtist={setOpenTechniqueModal}
        ariaHideApp={false}
      >
        
        <div className="modal-technique">
        <div onClick={() => setOpenTechniqueModal(false)}>
          <div className="technique-box">
            <form>
              <div><h3>Add a new techiques</h3></div>
              <div><label>Name:</label></div>
              <div>
              <input
                key="name"
                className="input"
                name="name"
                value={inputTechnique.name}
                onChange={handleChangeTech}
              />
              </div>
              {/* {techExist ? <label> {techExist.message} </label> : <div></div>} */}
              <div>
              <div><label>Description :</label></div>
              <textarea
                name="description"
                key="description"
                className="input"
                value={inputTechnique.description}
                onChange={handleChangeTech}
              />

              
            
              </div>

              <button>
                ADD NEW TECHNIQUE               
                
              </button>
            </form>

            
              <FaTimes style={{ fontSize: "25px", cursor: "pointer" }} />
            </div>
          </div>
        </div>
      </Modal>
    );
  }
  