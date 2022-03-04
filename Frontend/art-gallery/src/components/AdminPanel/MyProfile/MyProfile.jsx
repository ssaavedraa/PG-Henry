import React from "react"
import './MyProfile.css'
import imgprofile from '../../../assets/img/profile.png'


const AdminPanel = ()=>{
    return (
      <>
      <div className="myprofile-box">
          <div className="information-box">

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


