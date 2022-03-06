import React, {useState} from "react";
import {useParams, Link} from 'react-router-dom'
import "./DetailArtist.css";
import ModalArtworks from "./ModalArtworks/ModalArtworks";
import ReviewArtist from "./Reviews/ReviewArtist";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPaitingsByArtist, getArtistById} from "../../redux/actions/actions";

const {artists} = require('../../assets/Json/artists.json')

//Componente que renderiza el detalle de un artista
const DetailArtist = () => {
  const dispatch = useDispatch();

  //Estado para el modal 
  const [openModal, setOpenModal] = useState(false);
  const {id} = useParams()
  
  useEffect(() => {
    dispatch(getPaitingsByArtist(id))
    dispatch(getArtistById(id))
  }, [dispatch, id])
  
  const paintingsArtist = useSelector((state) => state.paintingsArtist)
  // console.log(paintingsByArtist)

  const artists = useSelector((state) => state.artist)
  //console.log(artists)
  
  return (
    <div className="divContainer">
      <h1>{artists.name}</h1>
      <div className="divContainerimg">
        <img src={artists.photo} alt="artist" className="imgArtist" />
        <div className="divBio">
          <p>
          {artists.biography}
          </p>
          <div className="divButton">
            <ModalArtworks  openModal={openModal} setOpenModal={setOpenModal} paintingsArtist={paintingsArtist} artists={artists}/>
            <button onClick={() => setOpenModal(true)}>See paintings</button>  
          </div>
        </div>
      </div>
     <ReviewArtist id={id}/>
    </div>
  );
};


export default DetailArtist;
