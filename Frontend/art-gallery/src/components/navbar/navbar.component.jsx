import React from "react";
import styles from "./navbar.module.css";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import {FaUserAlt} from 'react-icons/fa';

export default function NavBar() {
  const session = true;
  return (
    <div className={styles.navbar}>
      <h1 className={styles.home_link}>SantArt</h1>
      <div className={styles.div_search}>
        <input type="text" name="Search" className={styles.search} placeholder="Busca tu obra o artista favorito"/>
        <button>
          <BiSearch className={styles.icon_search}/>
        </button>
      </div>
      <ul className={styles.nav_links}>
        <li>
          <h5>Galeria</h5>
        </li>
        <li>
          <h5>Artistas</h5>
        </li>
        <li>
          <h5>Contacto</h5>
        </li>
        <h4>|</h4>
        {session ? (
          <button className={styles.btn_access}><FaUserAlt/><h4>Acceso</h4></button>
        ) : (
          <li>
            <h5>¡Hola Usuario!</h5>
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
