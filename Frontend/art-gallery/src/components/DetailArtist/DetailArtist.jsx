import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailArtist.css";
import ModalArtworks from "./ModalArtworks/ModalArtworks";
import ReviewArtist from "./Reviews/ReviewArtist";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getPaitingsByArtist,
  getArtistById,
} from "../../redux/actions/actions";
import useAuth from "../../customHooks/useAuth";
import ArtistModal from "../../Modales/EditArtist/ArtistModal";
import { AiFillEdit } from "react-icons/ai";

//Componente que renderiza el detalle de un artista
const DetailArtist = () => {
  const dispatch = useDispatch();

  //Estado para el modal de pinturas
  const [openModal, setOpenModal] = useState(false);

  //Estado para el modal de artistas
  const [openModalArtist, setOpenModalArtist] = useState(false);
  const { id } = useParams();

  //Manejo de vista
  const { user } = useAuth();

  useEffect(() => {
    dispatch(getPaitingsByArtist(id));
    dispatch(getArtistById(id));
  }, [dispatch, id]);

  const paintingsArtist = useSelector((state) => state.paintingsArtist);
  // console.log(paintingsByArtist)

  const artists = useSelector((state) => state.artistId);

  return (
    <div className="divContainer">
      {user.role === "admin" ? (
        <h1>
          {artists.name}
          <button
            onClick={() => setOpenModalArtist(true)}
            className="btnHeaderIconArtist"
          >
            <AiFillEdit className="iconHeaderCardArtist" />
          </button>
        </h1>
      ) : (
        <h1>{artists.name}</h1>
      )}
      <ArtistModal
        openModalArtist={openModalArtist}
        setOpenModalArtist={setOpenModalArtist}
        isEditArtist={true}
        artist={artists}
      />
      <div className="divContainerimg">
        <img src={artists.photo} alt="artist" className="imgArtist" />
        <div className="divBio">
          <p>{artists.biography}</p>
          <div className="divButton">
            <ModalArtworks
              openModal={openModal}
              setOpenModal={setOpenModal}
              paintingsArtist={paintingsArtist}
              artists={artists}
            />
            <button onClick={() => setOpenModal(true)}>See paintings</button>
          </div>
        </div>
      </div>
      <ReviewArtist id={id} />
    </div>
  );
};

export default DetailArtist;
