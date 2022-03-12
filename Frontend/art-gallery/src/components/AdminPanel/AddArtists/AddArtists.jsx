import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import ModalArtist from "./ModalArtist/ModalArtist";
import NavPanel from "../NavPanel/NavPanel";
import "./Artists.css";

//Traemmos los artitstas
const { artists } = require("../../../assets/Json/artists.json");
//const dataFullArtist = artists[0];

function AddArtists() {
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  function newArtist() {
    setOpenModal(!openModal);
    setIsEdit(false);
  }

  function editArtist() {
    setOpenModal(!openModal);
    setIsEdit(true);
  }

  return (
    <div className="container-addartist">
      <NavPanel />
      <div className="admin-profile-container">
        <div className="artists-header">
          <ModalArtist
            openModal={openModal}
            openNewArtist={newArtist}
            onRequestClose={newArtist}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
          />
          <button className="btnNewArtist" onClick={newArtist}>
            <FaPlus className="icon-Admin-AddArtist" />
            Add New Artist
          </button>
          <button className="btnAdminView">Go to Admin View</button>
        </div>
        <div className="subheader-artists">
          <h4 className="subtitle-artists">Registered Artists</h4>
          <div className="sort-Artist-Admin">
            <label>Sort By name:</label>
            <select name="" id="" className="select-filter-admin">
              <option value="ASC">AtoZ</option>
              <option value="DESC">ZtoA</option>
            </select>
          </div>
        </div>
        <table className="data-artist-admin">
          <thead className="row-titles-admin">
            <tr>
              <th className="id-title">ID</th>
              <th className="photo-title">PHOTO</th>
              <th className="name-title">NAME</th>
              <th className="paintings-title">PAINTINGS</th>
              <th className="review-title">REVIEWS</th>
              <th className="sales-title">SALES</th>
              <th className="button-title">SALES</th>
            </tr>
          </thead>
          <tbody>
            {/*           Aqui hacemos el mapeo */}
            <RowArtist
              id="1"
              photo={artists[0].photo}
              name={artists[0].name}
              paintings="3"
              review="2"
              sales="4"
              openModal={openModal}
              openModalEdit={editArtist}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
            />
            <RowArtist />
            <RowArtist />
            <RowArtist />
            <RowArtist />
            <RowArtist />
            <RowArtist />
            <RowArtist />
            <RowArtist />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddArtists;

function RowArtist({
  id,
  photo,
  name,
  paintings,
  review,
  sales,
  openModal,
  openModalEdit,
  isEdit,
  setIsEdit,
}) {
  return (
    <tr>
      <td className="id-title">{id ? id : "ID"}</td>
      <td className="photo-title">
        {photo ? (
          <img src={photo} alt="img-artist" className="img-td-artist" />
        ) : (
          "PHOTO"
        )}
      </td>
      <td className="name-title">{name ? name : "NAME"}</td>
      <td className="paintings-title">{paintings ? paintings : "PAINTINGS"}</td>
      <td className="review-title">{review ? review : "REVIEWS"}</td>
      <td className="sales-title">{sales ? sales : "SALES"}</td>
      <td className="button-title">
        {/*         Al hacer click podemos reutilizar la funcionalidad de la action de redux,
        para almacenar el dato buscado ahi con eso llamamos al modal y le enviamos la data*/}
        <ModalArtist
          openModal={openModal}
          openNewArtist={openModalEdit}
          onRequestClose={openModalEdit}
          artists={artists[0]}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
        />
        <AiFillEdit className="icon-artist-eduit" onClick={openModalEdit} />
      </td>
    </tr>
  );
}
