import React from "react";
import Modal from "react-modal";
import "./AddArtistModal.css";
import { FaTimes } from "react-icons/fa";
// import UnderConstruction from "../../components/UnderConstruction/UnderConstruction";



const TechniqueModal = ({openModalArtist, setOpenModalArtist }) => { 

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
  function handleChangeTech(e){
    const tec= (e.target.value).replace(/\w\S*/g, 
    function(txt){return txt.charAt(0).toUpperCase() +
           txt.substr(1).toLowerCase();});            

    const allTechiques= [];    

  technique.map((d) => (
    allTechiques.push(d.name)
    ))    

    if (allTechiques.includes(tec)){

     setTechExist({
      message: "This Technique is already added"
     });

    }else{
      setInputTechnique({
        ...input,
        inputTechnique: e.target.value,  
      });

    }  
    
  }

  return (
    <>
    <Modal isOpen={openModalArtist} style={customStyles} setOpenModalArtist={setOpenModalArtist} ariaHideApp={false}>
      <div className="modal-editart">
               <div className="technique-box">
               
  
  

<form>
<label>Add a new techiques:</label>
<label>name:</label>
<input 
key="name"
name="name"
value={inputTechnique.name}
onChange={handleChangeTech}
/> 
{techExist ? <label> {techExist.message} </label> : <div></div>}
<label>description :</label>
<input 
type="description"
name="description"
value={inputTechnique.description}
onChange={handleChangeTech}                  
/>

<button> <IoIosAddCircle/> </button>
</form>


                 
                  
                        
        
        <div onClick={() => setOpenModalArtist(false)}>
            <FaTimes style={{ fontSize: "25px", cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </Modal>
    </>
  );
};

export default TechniqueModal;
