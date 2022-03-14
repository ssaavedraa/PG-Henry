import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import { getSearchAuto, getFavs } from "../../redux/actions/actions";
import Logo from "../../assets/img/SantArtlogo.png";
import SearchBar from "../SearchBar/SearchBar";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../customHooks/useAuth";
import useCart from "../../customHooks/useCart.js";

export default function NavBar() {
  const dispatch = useDispatch();
  const { user, logout } = useAuth();
  const resultSearch = useSelector((state) => state.resultSearch);
  const [keyword, setKeyword] = useState("");

  //favs

  useEffect(() => {
    if (user.role !== "guest") dispatch(getFavs());
  }, [dispatch]);

  const favs = useSelector((state) => state.favs);
  // console.log('soy favs', favs)

  function updateField(value, update = true) {
    if (update) {
      dispatch(getSearchAuto(value));
    }
    setKeyword(value);
  }
  const { cart } = useCart();

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <SearchBar
        results={resultSearch}
        keyword={keyword}
        updateField={updateField}
      />
      <ul className={styles.nav_links}>
        <li>
          <NavLink to="/gallery" className={styles.linksNav}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/artists" className={styles.linksNav}>
            Artists
          </NavLink>
        </li>
        <li>
          <NavLink to="/contactus" className={styles.linksNav}>
            Contact
          </NavLink>
        </li>
        <h4>|</h4>
        {user.role === "guest" ? (
          <NavLink to="/login" className={styles.login_link}>
            <button className={styles.btn_access}>
              <FaUserAlt className={styles.icon} />
              <h4>Login</h4>
            </button>
          </NavLink>
        ) : user.role === "admin" ? (
          <li>
            <NavLink to="/admin" className={styles.linksNav}>
              <h5>Welcome {user.firstName}!</h5>
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink to="/under" className={styles.linksNav}>
              <h5>Welcome {user.firstName}!</h5>
            </NavLink>
          </li>
        )}
        {user.role === "user" || user.role === "guest" ? (
          <li>
            <NavLink to="/cart" className={styles.linksNav}>
              <div className={styles.divContainerCartIcon}>
                <div
                  className={
                    cart.length > 0
                      ? styles.containerCartLengthPlus
                      : styles.containerCartLength
                  }
                >
                  {cart.length}
                </div>
                <AiOutlineShoppingCart className={styles.icon} />
              </div>
            </NavLink>
          </li>
        ) : (
          <li></li>
        )}
        {user.role === "user" ? (
          <li>
            <NavLink to="/favs" className={styles.linksNav}>
              <div className={styles.divContainerCartIcon}>
                <div className={styles.containerCartLengthPlus}>
                  {favs.length}
                </div>
                <AiOutlineHeart className={styles.icon} />
              </div>
            </NavLink>
          </li>
        ) : (
          <li></li>
        )}
        {user.role !== "guest" && (
          <li className={styles.logoutNav} onClick={() => logout()}>
            <p>Logout</p>
            <FiLogOut className={styles.icon} />
          </li>
        )}
      </ul>
    </div>
  );
}
