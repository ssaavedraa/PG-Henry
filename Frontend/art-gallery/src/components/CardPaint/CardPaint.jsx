import React from "react";
import "./CardPaint.css";

function CardPaint({image, title, artist, height, width, techniques, price }) {
  return (
    <div className="card">
        <img src={image} alt="img-obra" className="image" />
      <div className="data">
        <h4>{title}</h4>
        <h5>{artist.name}</h5>
        <p>
          Size: {height} x {width}
        </p>
        <p>Technique: {techniques[0].name}</p>
        <p className="price">USD$ {price}</p>
      </div>
    </div>
  );
}

export default CardPaint;
