import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
<<<<<<< HEAD
import { FaUserAlt } from "react-icons/fa";
=======
import {FaUserAlt} from 'react-icons/fa';
import { useState } from "react";
>>>>>>> 77d17e438b7dd1aaa068dadc16f5173df8d1219e

export default function NavBar() {

  const [session, setSession] = useState(window.localStorage.getItem('user'));

  return (
    <div className={styles.navbar}>
      <h1 className={styles.home_link}>SantArt</h1>
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
          <h5>Galeria</h5>
        </li>
        <li>
          <Link to="/artists">
            <h5>Artistas</h5>
          </Link>
        </li>
        <li>
          <h5>Contacto</h5>
        </li>
        <h4>|</h4>
<<<<<<< HEAD
        {session ? (
          <button className={styles.btn_access}>
            <FaUserAlt />
            <h4>Acceso</h4>
          </button>
=======
        {!session ? (
          <button className={styles.btn_access}><FaUserAlt/><h4>Acceso</h4></button>
>>>>>>> 77d17e438b7dd1aaa068dadc16f5173df8d1219e
        ) : (
          <li>
            <h5>¡Hola {session}!</h5>
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
