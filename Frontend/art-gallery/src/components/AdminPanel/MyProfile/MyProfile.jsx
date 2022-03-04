import React from "react"
import './MyProfile.css'

import { useState } from "react";
import NavPanel from "../NavPanel/NavPanel";
import imgprofile from '../../../assets/img/profile.png'


const MyProfile = ()=>{

    const [edit, setEdit] = useState(false);
  console.log(edit)

  function HandleActive() {

    if(edit === false){
    setEdit(true);
  }else{
    setEdit(false);
  } 
  }



    return (
      <>
        
        <div className="admin-box">
         <NavPanel/>
          <div className="component-box">
              <div className="tittle-box"><h2>Admin Panel</h2></div>
           
            <div className="reder-box">

<<<<<<< HEAD


                <div className="myprofile-box">
          <div className="information-box">
            <div className="title">
              <img src={imgprofile} height="100px" alt="profile" />
              <h2> My Profile</h2>
              <h3>ADMIN</h3>
            </div>
            <div className="data">
              {edit === false ? (
                <>
                  <span> Name: </span>
                  <input
                    type="text"
                    autoComplete="off"
                    key="name"
                    className="input"
                    required
                    value="Santiago Rodriguez"
                    name="name"
                    // onChange={handleChange}
                    disabled
                  />
                  <span> Email: </span>
                  <input
                    type="text"
                    autoComplete="off"
                    key="email"
                    className="input"
                    required
                    value="santiagorodriguez@santart.com"
                    name="email"
                    // onChange={handleChange}
                    disabled
                  />
                  <span> Password :</span>
                  <input
                    type="text"
                    autoComplete="off"
                    key="password"
                    className="input"
                    required
                    value="*********"
                    name="password"
                    // onChange={handleChange}
                    disabled
                  />

                <div>
                <button onClick={() => HandleActive(true)} className="btn-edit">
                  Edit my profile
                </button>
              </div>
                </>
              ) : (
                <>
                  <span> Name: </span>
                  <input
                    type="text"
                    autoComplete="off"
                    key="name"
                    className="input"
                    required
                    value="Santiago Rodriguez"
                    name="name"
                    // onChange={handleChange}
                  />
                  <span> Email: </span>
                  <input
                    type="text"
                    autoComplete="off"
                    key="email"
                    className="input"
                    required
                    value="santiagorodriguez@santart.com"
                    name="email"
                    // onChange={handleChange}
                  />
                  <span> Password :</span>
                  <input
                    type="text"
                    autoComplete="off"
                    key="password"
                    className="input"
                    required
                    value="*********"
                    name="password"
                    // onChange={handleChange}
                  />

<div>
                <button  className="btn-edit">
                  Change my password
                </button>
                <button onClick={() => HandleActive(true)} className="btn-edit">
                  Save
                </button>
              </div>
                </>
              )}

             
            </div>
          </div>
        </div>
                
                
                
                </div>
          </div>
        </div>
      </>
    );

}
=======
          <div className="title">
          <img src={imgprofile} height="150px" alt="profile"/>
          <h1> My Profile</h1>
          <h3>ADMIN</h3>
         </div>
          <div className="data">
              <span> Name: </span>
              <input
                type="text"
                autoComplete="off"
                key="name"
                className="input"
                required
                value="Santiago Reyes"
                name="name"
                // onChange={handleChange}
                disabled
              />
              <span> Email: </span>
              <input
                type="text"
                autoComplete="off"
                key="email"
                className="input"
                required
                value="santiagorodriguez@santart.com"
                name="email"
                // onChange={handleChange}
                disabled
              />

              <span> Password :</span>
              <input
                type="password"
                autoComplete="off"
                key="password"
                className="input"
                required
                value="*********"
                name="password"
                // onChange={handleChange}
                disabled
              />

              <div><button className="btn-edit">Edit my profile</button></div>
              </div>
          </div>
       </div>
      </>
      );
  }
  export default AdminPanel;

>>>>>>> c1bf7f91f1b46a5254de5244889a06bda9748913

export default MyProfile;