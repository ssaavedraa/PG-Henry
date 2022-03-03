import React from "react";
import { FaStar } from "react-icons/fa";
import {useParams} from 'react-router-dom'
import "./DetailArtist.css";

const {artists} = require('../../assets/Json/artists.json')

//Componente que renderiza el detalle de un artista
const DetailArtist = () => {

  const {id} = useParams()

  let artistas = artists.find(a => {
    return a.id === id
  })
  return (
    <div className="divContainer">
      <h1>{artistas.name}</h1>
      <div className="divContainerimg">
        <img src={artistas.photo} alt="artist" className="imgArtist" />
        <div className="divBio">
          <p>
          {artistas.biography}
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
            <p>{artistas.paintings[0].review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailArtist;
