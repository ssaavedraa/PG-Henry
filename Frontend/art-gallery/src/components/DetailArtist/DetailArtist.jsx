import React from "react";
import { FaStar } from "react-icons/fa";
import "./DetailArtist.css";

// const artistas = require("../../assets/artists.json");

//Componente que renderiza el detalle de un artista
const DetailArtist = () => {
  return (
    <div className="divContainer">
      <h1>Kate Louise Powell</h1>
      <div className="divContainerimg">
        <img src={require("./base.jpg")} alt="artist" className="imgArtist" />
        <div className="divBio">
          <p>
            Kate Louise Powell is an illustrator and animal rights activist from
            Halifax, West Yorkshire, currently based in Glasgow. After drawing
            recreationally all her life, Kate began to take her art career more
            seriously in 2012, producing a series of popular illustrations
            featuring the recurring motifs of flowers and butterflies. Since
            then he has experimented with photography, mixed media and painting,
            but continues to work primarily with colored pencil/pencil and black
            ink.
          </p>
          <div className="divButton">
            <button>Ver obras</button>
          </div>
        </div>
      </div>
      <div className="containerReviews">
        <h3>Reviews artworks artist</h3>
        <div className="divReviews">
          <img
            src={require("./pauline-fin.jpeg")}
            alt="arteworks"
            className="imgArtwork"
          />
          <div className="containerText">
            <div className="divText">
              <h4>Andrea Mendoza</h4>
              <div>
                <FaStar style={{color: "#F0C929", fontSize: '20px'}}/>
                <FaStar style={{color: "#F0C929", fontSize: '20px'}} />
                <FaStar style={{color: "#F0C929", fontSize: '20px'}} />
                <FaStar style={{color: "#F0C929", fontSize: '20px'}} />
                <FaStar style={{color: "#F0C929", fontSize: '20px'}}/>
              </div>
            </div>
            <p>Necesario en mi coleccion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailArtist;
