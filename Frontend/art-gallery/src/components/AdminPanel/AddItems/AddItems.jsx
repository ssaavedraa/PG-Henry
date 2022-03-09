import React from "react"
import './AddItems.css'


import NavPanel from "../NavPanel/NavPanel";
import imgprofile from '../../../assets/img/profile.png'


const AddItems = ()=>{


    return (
      <>
        
        <div className="admin-box">
         <NavPanel/>
          <div className="component-box">
          <div className="tittle-box"><h2>Admin Panel</h2></div>
           
            <div className="reder-box">
                <div className="myprofile-box">
          
          <div className="information-box">
          
              
              <h2> Add new item</h2>
              
            
           
            <div className="data">

            <form key="form" 
            // onSubmit={(e) => handleSubmit(e)}
            >

              </form>
              
                  <label> Title: </label>
                  <input
                    type="text"
                    autoComplete="off"
                    key="name"
                    className="input"
                    required
                    value=""
                    name="title"
                    // onChange={handleChange}
                    
                  />

                  
                  <label> Description: </label>
                  <input
                    type="text"
                    autoComplete="off"
                    key="email"
                    className="input"
                    required
                    value=""
                    name="Description"
                    // onChange={handleChange}
                   
                  />
                  <label> Orientation :</label>
                  <input
                    type="text"
                    autoComplete="off"
                    key="password"
                    className="input"
                    required
                    value=""
                    name="Orientation"
                    // onChange={handleChange}
                    
                  />
               
              
                
                  <label> Height: </label>
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
                  <label> Width: </label>
                  <input
                    type="text"
                    autoComplete="off"
                    key="email"
                    className="input"
                    required
                    value=""
                    name="Width"
                    // onChange={handleChange}
                  />

                  <label> Price: </label>
                  <input
                    type="text"
                    autoComplete="off"
                    key="email"
                    className="input"
                    required
                    value=""
                    name="Price"
                    // onChange={handleChange}
                  />
                  
              <div>
                <button 
                // onClick={() => HandleActive(true)} 
                className="btn-edit">
                  Add new Item
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

export default AddItems;