import React from "react"
import './AddArtists.css'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtist } from "../../../redux/actions/actions";
import { useEffect } from "react";

import NavPanel from "../NavPanel/NavPanel";
// const artists = useSelector((state) => state.artist);

// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(getArtist());
// }, []);

const AddArtists = ()=>{


    return (
      <>
        
        <div className="admin-box">
         <NavPanel/>
          <div className="component-box">
          <div className="title-box"><h2>Admin Panel</h2></div>
           
            <div className="reder-box">
                <div className="myprofile-box">
          
          <div className="information-box">
          <h2> Add new Artist</h2>
              
           
            <div className="data">

            <form key="form" 
            // onSubmit={(e) => handleSubmit(e)}
            >

              </form>
              
                  <label> Name: </label>
                  <input
                    type="text"
                    autoComplete="off"
                    key="name"
                    className="input"
                    required
                    value=""
                    name="name"
                    // onChange={handleChange}
                    
                  />
                  <label> Biography: </label>
                  <input
                    type="coment"
                    autoComplete="off"
                    key="email"
                    className="input"
                    required
                    value=""
                    name="email"
                    // onChange={handleChange}
                   
                  />
                  <label> Photo :</label>
                  <input
                    type="text"
                    autoComplete="off"
                    key="password"
                    className="input"
                    required
                    value=""
                    name="password"
                    // onChange={handleChange}
                    
                  />
               
              
                
                  <label> Email: </label>
                  <input
                    type="text"
                    autoComplete="off"
                    key="name"
                    className="input"
                    required
                    value=""
                    name="name"
                    // onChange={handleChange}
                  />
                  <label> Location: </label>
                  <input
                    type="text"
                    autoComplete="off"
                    key="email"
                    className="input"
                    required
                    value=""
                    name="email"
                    // onChange={handleChange}
                  />
                  
              <div>
                <button 
                // onClick={() => HandleActive(true)} 
                className="btn-edit">
                  Add new artists
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
                
                
                
                </div>
          </div>
        
      </>
    );

}

export default AddArtists;