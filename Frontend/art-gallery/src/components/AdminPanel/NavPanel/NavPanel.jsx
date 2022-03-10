import React from "react";
import "./NavPanel.css";
import img from "../../../assets/img/profile.png";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../../redux/actions/actions";
import { BsPersonBadge } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";

const NavPanel = () => {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.auth);

  const handleLogout = () => {
    window.localStorage.removeItem("user");
    dispatch(setLogout());
  };
  return (
    <>
      <div className="admin-bar">
        <div className="user">
          <Link to="/admin">
            <img src={img} className="img-profile" alt="profile"/>
            <h5>{window.localStorage.getItem("user")}</h5>
          </Link>
          <Link to="/admin"> My Profile</Link>
        </div>
        <ul className="menu-options">
          <li>
            <AiOutlineLineChart className="icon"/> SALES
          </li>
          <li>
            <FaUsers className="icon"/> USERS
          </li>
          <li>
            <Link to="/admin/addartist">
              <BsPersonBadge className="icon"/> ARTISTS
            </Link>
          </li>
          <li>
            <Link to="/admin/additems">
              {" "}
              <BiImageAdd className="icon"/> ITEMS
            </Link>
          </li>
          {session && (
            <li onClick={() => handleLogout()}>
              Logout
              <FiLogOut className="icon"/>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default NavPanel;
