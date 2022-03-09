import React, { useState } from "react";
import styles from "./navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import { getSearchAuto } from "../../redux/actions/actions";

import SearchBar from "../SearchBar/SearchBar";

import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import Logo from "../../assets/img/SantArtlogo.png";

import { useDispatch, useSelector } from "react-redux";
import { setLogin, setLogout } from "../../redux/actions/actions";

export default function NavBar() {
  const dispatch = useDispatch();

  const session = useSelector((state) => state.auth);
  const resultSearch = useSelector((state) => state.resultSearch);

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
        {!session ? (
          <NavLink to="/login" className={styles.login_link}>
            <button className={styles.btn_access}>
              <FaUserAlt />
              <h4>Log in</h4>
            </button>
          </NavLink>
        ) : (
          <li>
            <h5>Welcome! {window.localStorage.getItem("user")}</h5>
          </li>
        )}
        {session && (
          <li onClick={() => handleLogout()}>
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
