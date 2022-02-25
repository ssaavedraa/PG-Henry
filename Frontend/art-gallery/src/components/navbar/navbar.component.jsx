import React from "react";
import './navbar.css'

export default function NavBar(){

    return(
        <div className="navbar">
            <h1 className="home-link">SantArt</h1>
            <input type="text" name="Search" id="search" />
            <ul className="nav-links">
                <li>Galeria</li>
                <li>Artistas</li>
                <li>Contacto</li>
                <li>¡Hola Usuario!</li>
                <li><i className="cart fa fa-shopping-cart"></i></li>
            </ul>
        </div>
    )

}