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
import EditArtistModal from "../../Modales/EditArtist/EditArtistForm/EditArtistModal";
import { AiFillEdit, AiOutlineEnvironment, AiOutlineMail } from "react-icons/ai";

//Componente que renderiza el detalle de un artista
const DetailArtist = () => {
  const dispatch = useDispatch();

  //Estado para el modal de pinturas
  const [openModal, setOpenModal] = useState(false);

  //Estado para el modal de artistas
  const [openEditArtistModal, setOpenEditArtistModal] = useState(false);
  const { id } = useParams();

  //Manejo de vista
  const { user } = useAuth();

  useEffect(() => {
    dispatch(getPaitingsByArtist(id));
    dispatch(getArtistById(id));
  }, [dispatch, id]);

  const paintingsArtist = useSelector((state) => state.paintingsArtist);
  const artists = useSelector((state) => state.artistId);

  return (
    <div className="divContainer">
      <EditArtistModal
        openEditArtistModal={openEditArtistModal}
        setOpenEditArtistModal={setOpenEditArtistModal}
        artistId={id}
      />
      <div className="divContainerimg">
        <div>
          <img src={artists.photo} alt="artist" className="imgArtist" />
        </div>
        <div className="divBio">
          <div className="divContainerNameEmailArtist">
            <div className="divNameEmailArtist">
              <h1>{artists.name} </h1>
              <span><AiOutlineMail className='iconsDetailArtist'/>{artists.email}</span>
              <span><AiOutlineEnvironment className='iconsDetailArtist'/>{artists.location}</span>
            </div>
            <div>
              {user.role === "admin" ? (
                <button
                  onClick={() => setOpenEditArtistModal(true)}
                  className="btnHeaderIconArtist"
                >
                  <AiFillEdit className="iconHeaderCardArtist" />
                </button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className="divArtistBiography">
            <h4>Who is {artists.name}?</h4>
            <p>{artists.biography}</p>
          </div>
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
