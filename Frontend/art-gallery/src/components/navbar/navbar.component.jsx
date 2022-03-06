import React from "react";
import styles from "./navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../assets/img/SantArtlogo.png";

export default function NavBar() {

  const session = useSelector(state => state.auth)

  console.log(session)
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
          placeholder="Busca tu obra o artista favorito"
        />
        <button>
          <BiSearch className={styles.icon_search} />
        </button>
      </div>
      <ul className={styles.nav_links}>
        <li>
          <NavLink to="/gallery" className={styles.links}>
            <h5>Galeria</h5>
          </NavLink>
        </li>
        <li>
          <NavLink to="/artists" className={styles.links}>
            <h5>Artistas</h5>
          </NavLink>
        </li>
        <li>
        <NavLink to="/contactus" className={styles.links}>
          <h5>Contacto</h5>
          </NavLink>
        </li>
        <h4>|</h4>
        {!session ? (
          <NavLink to='/login' className={styles.login_link}>
            <button className={styles.btn_access}>
              <FaUserAlt />
                <h4>Acceso</h4>
            </button>
          </NavLink>
        ) : (
          <li>
            <h5>¡Hola {window.localStorage.getItem("user")}!</h5>
          </li>
        )}
        <li>
          <AiOutlineShoppingCart className={styles.icon} />
        </li>
        <li>
          <AiOutlineHeart className={styles.icon} />
        </li>
      </ul>
    </div>
  );
}
