import React, { useState } from "react";
import styles from "./navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import { getSearchAuto } from "../../redux/actions/actions";
import Logo from "../../assets/img/SantArtlogo.png";
import SearchBar from "../SearchBar/SearchBar";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import useAuth from "../../customHooks/useAuth";
import { setLogin, setLogout } from "../../redux/actions/actions";
import useCart from "../../customHooks/useCart.js";

export default function NavBar() {
  const dispatch = useDispatch();
  const {user, logout} = useAuth()


  const [state, setState] = useState({
    keyword: "",
    results: [],
  });

  React.useEffect(() => {
    dispatch(getSearchAuto());
  }, [dispatch, state]);

  React.useEffect(() => {
    dispatch(getSearchAuto(state.keyword));
  }, [dispatch, state]);

  if (window.localStorage.getItem("user"))
    dispatch(setLogin(window.localStorage.getItem("user")));

  const handleLogout = () => {
    window.localStorage.removeItem("user");
    dispatch(setLogout());
  };

  function matchName(name, keyword) {
    let keyLen = keyword.length;
    name = name.toLowerCase().substring(0, keyLen);
    return name === keyword && keyLen !== 0;
  }

  function updateField(name, value, update = true) {
    let results = [];
    if (update) {
      results = resultSearch.filter(
        (item) => true === matchName(item.name, value)
      );
    }
    setState({ ...state, [name]: value, results });
  }
  const { cart } = useCart();

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <SearchBar
        results={state.results}
        keyword={state.keyword}
        updateField={updateField}
      />
      <ul className={styles.nav_links}>
        <li>
          <NavLink
            to="/gallery"
            className={styles.linksNav}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/artists"
            className={styles.linksNav}
          >
            Artists
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contactus"
            className={styles.linksNav}
          >
            Contact
          </NavLink>
        </li>
        <h4>|</h4>
<<<<<<< HEAD
        {user.role === 'guest' ? (
=======

        {!session ? (
>>>>>>> 1ed8ffdaa80af4e75aba098858c66eafce7f0b53
          <NavLink to="/login" className={styles.login_link}>
            <button className={styles.btn_access}>
              <FaUserAlt className={styles.icon}/>
              <h4>Login</h4>
            </button>
          </NavLink>
        ) : (
          <li>
            <h5>Welcome! {user.firstName}</h5>
          </li>
        )}
<<<<<<< HEAD
        {user.role !== 'guest' && (
          <li onClick={() => logout()}>
            <p>Logout</p>
            <FiLogOut className={styles.icon} />
          </li>
        )}
=======
>>>>>>> 1ed8ffdaa80af4e75aba098858c66eafce7f0b53
        <li>
          <NavLink to="/cart" className={styles.linksNav}>
            <div className={styles.divContainerCartIcon}>
              <div className={styles.containerCartLength}>{cart.length}</div>
              <AiOutlineShoppingCart className={styles.icon} />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/under" className={styles.linksNav}>
            <AiOutlineHeart className={styles.icon} />
          </NavLink>
        </li>
        {session && (
          <li className={styles.logoutNav} onClick={() => handleLogout()}>
            <p>Logout</p>
            <FiLogOut className={styles.icon} />
          </li>
        )}
      </ul>
    </div>
  );
}
