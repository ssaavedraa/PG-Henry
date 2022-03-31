import React from "react";
import "./Footer.css";
import Logo from "../../assets/img/SantArtlogo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleAbout = () => {
    navigate("/about");
  };

  return (
<<<<<<< HEAD
    <div className='divFooter'>
        <img src={Logo} alt="logo" className='img'/>
        <p>2022 SantArt - All rights reserved. | <span onClick={handleAbout} className='spanAbout'> About DEVS</span></p>
=======
    <div className="divFooter">
      <img src={Logo} alt="logo" className="img" />
      <p>2022 SantArt - All rights reserved.</p>
      <span onClick={handleAbout} className="spanAbout">
        About us
      </span>
>>>>>>> 2fd014067ad8351124b175c81ac83481fc5f002c
    </div>
  );
};

export default Footer;
