import React from "react";
import {useParams} from 'react-router-dom'
import "./DetailArtist.css";
import ReviewArtist from "./Reviews/ReviewArtist";


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
            <button>View artworks</button>
          </div>
        </div>
      </div>
     <ReviewArtist id={id}/>
    </div>
  );
};

export default DetailArtist;
