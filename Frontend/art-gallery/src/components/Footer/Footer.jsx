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
    <div className="divFooter">
      <img src={Logo} alt="logo" className="img" />
      <p>2022 SantArt - All rights reserved.</p>
      <span onClick={handleAbout} className="spanAbout">
        About Devs
      </span>
    </div>
  );
};

export default Footer;
