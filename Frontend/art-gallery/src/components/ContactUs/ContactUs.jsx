/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./ContactUs.css";

import { Link, useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();

  const handleForm = (value) => {
    if (value === "user") {
      navigate("/formUser");
    } else {
      navigate("/formArtists");
    }
  };

  return (
    <>
      <div className="contact-box">
        <div className="titulo-box">
          <h1>Contact Us</h1>
        </div>
        <div className="data-box">
          <h2>SantArt Gallery Art Shop</h2>
          <h3>Dirección:</h3>
          <label>Mendoza, Gral. Alvear, Mendoza, Argentina</label>
          <h3>Call us:</h3>
          <label>+52 615 897 635</label>
          <h3>Email:</h3>
          <label>contact@santart.com</label>

          <div className="container-contact-1">
            <div className="divContainerContact">
              <i
                onClick={() => handleForm("user")}
                className="fa fa-user-o"
                aria-hidden="true"
              ></i>
              <p onClick={() => handleForm("user")}>If you are a customer</p>
            </div>
            <div className="divContainerContact">
              <i
                onClick={() => handleForm("art")}
                className="fa fa-paint-brush"
                aria-hidden="true"
              ></i>
              <p onClick={() => handleForm("art")}>If you are an artist</p>
            </div>
          </div>
        </div>

        <div className="maps-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349023.554146793!2d-69.86920693750001!3d-34.943302200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967811ea685ec013%3A0x39f09984ee7317ee!2sUbUrey%20Espacio%20de%20Arte%20Contemporaneo!5e0!3m2!1ses!2smx!4v1646394205800!5m2!1ses!2smx"
            width="800px"
            height="400px"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
