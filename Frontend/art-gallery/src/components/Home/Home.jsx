import React from "react";
import CardHomeArt from "../CardHome/CardHomeArt";
import "./home.css";

const { paintings } = require("../../assets/Json/paintings.json");

function Home() {
    //Obras mas populares max 6
  let paintsPopulars = [];

  for (let i = 0; i < 6; i++) {
    paintsPopulars.push(paintings[i]);
  }

  return (
    <div className="container">
      <h2>Obras más populares</h2>
      <div className="content-all">
        <div className="content-carrousel">
          {paintsPopulars.map((paint) => (
            <CardHomeArt
              key={paint.id}
              id={paint.id}
              url={paint.image[0]}
              artist={paint.artist}
              title={paint.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
