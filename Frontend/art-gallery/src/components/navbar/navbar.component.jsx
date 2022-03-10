import React from "react";
import styles from "./navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Logo from "../../assets/img/SantArtlogo.png";
import useAuth from "../../customHooks/useAuth";

export default function NavBar() {
  const dispatch = useDispatch();
  const {user, logout} = useAuth()

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className={styles.div_search}>
        <input
          type="text"
          name="Search"
          className={styles.search}
          placeholder="Search your favorite artwork"
        />
        <NavLink to="/under" className={styles.links}>
          <button>
            <BiSearch className={styles.icon_search} />
          </button>
        </NavLink>
      </div>
      <ul className={styles.nav_links}>
        <li>
          <NavLink to="/gallery" className={styles.links}>
            <h5>Gallery</h5>
          </NavLink>
        </li>
        <li>
          <NavLink to="/artists" className={styles.links}>
            <h5>Artists</h5>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contactus" className={styles.links}>
            <h5>Contact</h5>
          </NavLink>
        </li>
        <h4>|</h4>
        {user.role === 'guest' ? (
          <NavLink to="/login" className={styles.login_link}>
            <button className={styles.btn_access}>
              <FaUserAlt />
              <h4>Log in</h4>
            </button>
          </NavLink>
        ) : (
          <li>
            <h5>Welcome! {user.firstName}</h5>
          </li>
        )}
        {user.role !== 'guest' && (
          <li onClick={() => logout()}>
            <p>Logout</p>
            <FiLogOut className={styles.icon} />
          </li>
        )}
        <li>
          <NavLink to="/under" className={styles.links}>
            <AiOutlineShoppingCart className={styles.icon} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/under" className={styles.links}>
            <AiOutlineHeart className={styles.icon} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
