import React from "react"
import './AddArtists.css'
import {addNewArtist} from "../../../redux/actions/actions"
import { useState } from "react";
import { useDispatch} from "react-redux";



import NavPanel from "../NavPanel/NavPanel";


const AddArtists = ()=>{
const dispatch = useDispatch();


  const [input, setInput] = useState({
    name: "",
    biography: "",
    photo: "",
    email: "",
    location: "",    
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value, //va tomando el nombre de cada prop, me vaya llenando el estado
    });
   
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(addNewArtist(input));
    alert("New artist create");
    setInput({
      name: "",
    biography: "",
    photo: "",
    email: "",
    location: "",  
    });
    
  }
    return (
      <>        
        <div className="admin-box">
         <NavPanel/>
          <div className="component-box">
          <div className="title-admin"><h1>ADMIN PANEL</h1></div>    
          <hr></hr>       
            <div className="reder-box">
                <div className="artists-box">          
          <div className="information-box">
          <h2> ADD NEW ARTISTS</h2> 
            <div className="data">
           <form key="form" onSubmit={(e) => handleSubmit(e)}>          
              
                  <label> Name: </label>
                  <input
                    type="text"
                    autoComplete="off"
                    key="name"
                    className="input"
                    required
                    value={input.name}
                    name="name"
                    onChange={handleChange}
                  />
                  <label> Biography: </label>
                  <textarea 
                  name="biography"
                  key="biography"                  
                  className="input"
                  value={input.biography}
                  onChange={handleChange}
                  />
                  
                  <label> Photo :</label>
                  <input
                    type="text"
                    autoComplete="off"
                    key="photo"
                    className="input"
                    required
                    value={input.photo}
                    name="photo"
                    onChange={handleChange}
                  />
                  <label> Email: </label>
                  <input
                    type="text"
                    autoComplete="off"
                    key="email"
                    className="input"
                    required
                    value={input.email}
                    name="email"
                    onChange={handleChange}
                  />
                  <label> Location: </label>
                  <input
                    type="text"
                    autoComplete="off"
                    key="location"
                    className="input"
                    required
                    value={input.location}
                    name="location"
                    onChange={handleChange}
                  />
                  
              <div>
                <button                 
                className="btn-edit">
                  Add new artists
                </button>
                
              </div>
              </form>
            </div>
          </div>
          </div>
        </div></div>
          </div>
      </>
    );
}
export default AddArtists;