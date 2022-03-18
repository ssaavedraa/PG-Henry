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
import useAuth from "../../../customHooks/useAuth";

const NavPanel = () => {
  const session = useSelector((state) => state.auth);
  const { user, logout } = useAuth();

  return (
    <>
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
            <AiOutlineLineChart className="icon" /> SALES
            </Link>
          </li>
          <li>
          <Link to="/admin/user">
            <FaUsers className="icon" /> USERS
            </Link>
          </li>
          <li>
            <Link to="/admin/addartist">
              <BsPersonBadge className="icon" /> ARTISTS
            </Link>
          </li>
          <li>
            <Link to="/admin/additems">
              {" "}
              <BiImageAdd className="icon" /> ITEMS
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
    </>
  );
};

export default NavPanel;
