import React, {useState} from "react";
import {useParams, Link} from 'react-router-dom'
import "./DetailArtist.css";
import ModalArtworks from "./ModalArtworks";
import ReviewArtist from "./Reviews/ReviewArtist";


const {artists} = require('../../assets/Json/artists.json')

//Componente que renderiza el detalle de un artista
const DetailArtist = () => {
  const [openModal, setOpenModal] = useState(false);
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
            <ModalArtworks  openModal={openModal} setOpenModal={setOpenModal} />
            <button onClick={() => setOpenModal(true)}>Ver obras</button>  
          </div>
        </div>
      </div>
     <ReviewArtist id={id}/>
    </div>
  );
};


export default DetailArtist;
