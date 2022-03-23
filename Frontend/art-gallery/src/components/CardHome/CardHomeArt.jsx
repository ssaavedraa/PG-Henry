import React from "react";
import { NavLink } from "react-router-dom";

export default function CardHomeArt({ url, artist, title, id }) {
  return (
      <NavLink to={`/detailpainting/${id}`} className="figure">
        <img src={url} alt="img-obra" />
        <div>
          <p>{artist}</p>
          <p>{title}</p>
        </div>
      </NavLink>
  );
}
