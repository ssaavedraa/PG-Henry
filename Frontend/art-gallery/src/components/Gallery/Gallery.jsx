import React from "react";
import Filters from "../Filters/Filters";
import CardsPaints from "../../containers/CardsPaints/CardsPaints";
import './Gallery.css';

function Gallery() {
  return (
    <div className="gallery-container">
      <Filters />
      <CardsPaints />
    </div>
  );
}

export default Gallery;
