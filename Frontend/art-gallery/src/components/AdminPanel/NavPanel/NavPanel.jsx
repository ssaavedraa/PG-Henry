import React from "react"
import './NavPanel.css'
import img from'../../../assets/img/profile.png'
import { Link } from "react-router-dom"


const NavPanel = ()=>{  



    return (
      <>        
        
          <div className="admin-bar">
            <div className="User">
            <Link to="/admin/myprofile"> 
              <img src={img} className="img-profile" alt="" />
              </Link>
              <h5>Santiago Rodríguez</h5>
            </div>

            <ul className="menu-options">
              <li><Link to="/admin/myprofile"> My Profile</Link></li>
              <li>Sales </li>
              <li>All Users</li>
              <li><Link to="/admin/addartist">Add Artists</Link></li>
              <li><Link to="/admin/additems">Add Items</Link></li>
              <div className="logout">
              <button className="btn-log">Log Out</button>
            </div>
            </ul>
            

            
          </div>
          
        
      </>
    );

}

export default NavPanel;