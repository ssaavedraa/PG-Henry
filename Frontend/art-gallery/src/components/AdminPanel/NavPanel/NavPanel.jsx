import React from "react"
import './NavPanel.css'
import img from'../../../assets/img/profile.png'
import { Link } from "react-router-dom"
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../../redux/actions/actions";



const NavPanel = ()=>{  
  const dispatch = useDispatch();
  const session = useSelector((state) => state.auth);

  const handleLogout = () => {
    window.localStorage.removeItem("user");
    dispatch(setLogout());
  };


    return (
      <>        
        
          <div className="admin-bar">
            <div className="User">
            <Link to="/admin/myprofile"> 
              <img src={img} className="img-profile" alt="" />
              </Link>
              
              <h5> {window.localStorage.getItem("user")}</h5>
            </div>

            <ul className="menu-options">
              <li><Link to="/admin"> My Profile</Link></li>
              <li>Sales </li>
              <li>All Users</li>
              <li><Link to="/admin/addartist">Add Artists</Link></li>
              <li><Link to="/admin/additems">Add Items</Link></li>
              {session && (
          <li onClick={() => handleLogout()}>
            Logout
            <FiLogOut className="icon" />
          </li>
        )}
              
            </ul>
            

            
          </div>
          
        
      </>
    );

}

export default NavPanel;