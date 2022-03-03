import React from "react"
import './AdminPanel.css'
import img from'../../assets/img/profile.png'
import MyProfile from'./MyProfile/MyProfile'
import { useState } from "react";


const AdminPanel = ()=>{

    const [errors, setError] = useState({});


    
    return (
      <>
        
        <div className="admin-box">
          <div className="admin-bar">
            <div className="User">
              <img src={img} className="img-profile" alt="" />
              <h6>Santiago Rodríguez</h6>
            </div>

            <ul className="menu-options">
              <li>My Profile</li>
              <li>Sales </li>
              <li>All Users</li>
              <li>Add Artists</li>
              <li>Add Items</li>
            </ul>

            <div className="logout">
              <button className="btn-log">Log Out</button>
            </div>
          </div>
          <div className="component-box">
              <div className="tittle-box"><h1>Admin Panel</h1></div>
           
            <div className="reder-box"><MyProfile/></div>
          </div>
        </div>
      </>
    );

}

export default AdminPanel;