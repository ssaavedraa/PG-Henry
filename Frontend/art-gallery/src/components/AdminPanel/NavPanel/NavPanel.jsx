import React from "react";
import "./NavPanel.css";
import img from "../../../assets/img/profile.png";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useSelector } from "react-redux";
import { BsPersonBadge } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { MdOutlineRateReview } from "react-icons/md";




import useAuth from "../../../customHooks/useAuth";

const NavPanel = () => {
  const session = useSelector((state) => state.auth);
  const { user, logout } = useAuth();

  return (
    <>
    {user.role === "admin" ? (
      <div className="admin-bar">
        <div className="user">
          <Link to="/admin">
            <img src={img} className="img-profile" alt="profile" />
            <h5>{user.firstName}</h5>
          </Link>
          <Link to="/admin"> My Profile</Link>
        </div>
        
        <ul className="menu-options">          
          <li>
          <Link to="/admin/sales">
          <div className="shopping-btn"><div className="icon" ><AiOutlineLineChart/></div><div>SALES</div></div>
           
            </Link>
          </li>
          <li>
          <Link to="/admin/user">
          <div className="shopping-btn"><div className="icon" ><FaUsers/></div><div>USERS</div></div>
            
            </Link>
          </li>
          <li>
            <Link to="/admin/addartist">
            <div className="shopping-btn"><div className="icon" ><BsPersonBadge/></div><div >ARTISTS</div></div>
              
            </Link>
          </li>
          <li>
            <Link to="/admin/additems">   
            <div className="shopping-btn"><div className="icon" ><BiImageAdd /></div><div >ITEMS</div></div>           
              
            </Link>
          </li>
          {session && (
            <li onClick={() => logout()}>
              Logout
              <FiLogOut className="icon" />
            </li>
          )}
        </ul>        
      </div>) : (

        <div className="admin-bar">
        <div className="user">
          <Link to="/admin">
            <img src={img} className="img-profile" alt="profile" />
            <h5>{user.firstName}</h5>
          </Link>
          <Link to="/admin"> My Profile</Link>
        </div>
        <ul className="menu-options">          
  <li>
  <Link to="">
  <div className="shopping-btn"><div className="icon" ><BiShoppingBag /></div><div>SHOPPING</div></div>
    </Link>
  </li> 
              
  {session && (
    <li onClick={() => logout()}>
      Logout
      <FiLogOut className="icon" />
    </li>
  )}
</ul>
        
              
      </div>
      ) }
     
    </>
  );
};

export default NavPanel;


