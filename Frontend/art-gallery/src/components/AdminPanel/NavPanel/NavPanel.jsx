import React from "react";
import "./NavPanel.css";
import img from "../../../assets/img/profile.png";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/admin" className="navPanelRole-links">
              <img src={img} className="img-profile" alt="profile" />
              <h5>{user.firstName}</h5>
            </NavLink>
            <NavLink
              to="/admin"
              className={(navData) =>
                navData.isActive ? "navLinkActive" : "navPanelRole-links"
              }
            >
              
              <h4 className="myProfileLink">My Profile</h4>
            </NavLink>
          </div>

          <ul className="menu-options">
            <li>
              <NavLink
                to="/admin/sales"
                className={(navData) =>
                  navData.isActive ? "navLinkActive" : "navPanelRole-links"
                }
              >
                <div className="shopping-btn">
                  <AiOutlineLineChart className="navPanelRole-icon" />
                  <h5>SALES</h5>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/user"
                className={(navData) =>
                  navData.isActive ? "navLinkActive" : "navPanelRole-links"
                }
              >
                <div className="shopping-btn">
                  <FaUsers className="navPanelRole-icon" />
                  <h5>USERS</h5>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/addartist"
                className={(navData) =>
                  navData.isActive ? "navLinkActive" : "navPanelRole-links"
                }
              >
                <div className="shopping-btn">
                  <BsPersonBadge className="navPanelRole-icon" />
                  <h5>ARTISTS</h5>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/additems"
                className={(navData) =>
                  navData.isActive ? "navLinkActive" : "navPanelRole-links"
                }
              >
                <div className="shopping-btn">
                  <BiImageAdd className="navPanelRole-icon" />
                  <h5>ITEMS</h5>
                </div>
              </NavLink>
            </li>
            {session && (
              <li onClick={() => logout()}>
                Logout
                <FiLogOut className="icon" />
              </li>
            )}
          </ul>
        </div>
      ) : (
        <div className="admin-bar">
          <div className="user">
            <NavLink to="/admin">
              <img src={img} className="img-profile" alt="profile" />
              <h5>{user.firstName}</h5>
            </NavLink>
            <NavLink to="/admin"> My Profile</NavLink>
          </div>
          <ul className="menu-options">
            <li>
              <NavLink
                to=""
                className={(navData) =>
                  navData.isActive ? "navLinkActive" : "navPanelRole-links"
                }
              >
                <div className="shopping-btn">
                  <div className="icon">
                    <BiShoppingBag />
                  </div>
                  <div>SHOPPING</div>
                </div>
              </NavLink>
            </li>

            {session && (
              <li onClick={() => logout()}>
                Logout
                <FiLogOut className="icon" />
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavPanel;
