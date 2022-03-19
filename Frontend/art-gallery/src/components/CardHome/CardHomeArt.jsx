import React from "react";

export default function CardHomeArt({url,artist,title}) {
  return (
    <figure>
      <img
        src={url}
        alt="img-obra"
      />
      <div>
        <p>{artist}</p>
        <p>{title}</p>
      </div>
    </figure>
  );
}


