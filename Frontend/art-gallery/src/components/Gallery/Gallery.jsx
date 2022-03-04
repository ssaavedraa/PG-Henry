import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaintings } from "../../redux/actions/actions";

import Filters from "../Filters/Filters";
import CardsPaints from "../../containers/CardsPaints/CardsPaints";

import "./Gallery.css";

function Gallery() {
  const dispatch = useDispatch();
  const paintings = useSelector((state) => state.paintings);

  React.useEffect(() => {
    dispatch(getPaintings());
  }, [dispatch]);

  console.log(paintings);
  return (
    <div className="gallery-container">
      <Filters />
      <CardsPaints paintings={paintings}/>
    </div>
  );
}

export default Gallery;
