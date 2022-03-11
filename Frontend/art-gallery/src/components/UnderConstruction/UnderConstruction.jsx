import React from "react";
import "./UnderConstruction.css";
import under from "../../assets/img/under.png";

const UnderConstruction = () => {
  return (
    <>
      <div className="under-back">
        <div className="under-box">
          <h1>OOPS... THIS PAGE IS</h1>
          <img src={under} alt="under" height="500px" width="500px" />
        </div>
      </div>
    </>
  );
};

export default UnderConstruction;
