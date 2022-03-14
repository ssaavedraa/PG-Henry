import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtitsStat, clearArtists } from "../../../redux/actions/actions";
import { FaPlus } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import ModalArtist from "./ModalArtist/ModalArtist";
import NavPanel from "../NavPanel/NavPanel";
import ArtistModal from "../../../Modales/EditArtist/ArtistModal";
import "./Artists.css";

function AddArtists() {
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artist);

  React.useEffect(() => {
    dispatch(getArtitsStat());
  }, [dispatch]);

  const [openModalArtist, setOpenModalArtist] = useState(false);

  React.useEffect(() => {
    return () => dispatch(clearArtists());
  }, [dispatch]);

  return (
    <div className="container-addartist">
      <NavPanel />
      <div className="admin-profile-container">
        <div className="artists-header">
          <ArtistModal
            openModalArtist={openModalArtist}
            setOpenModalArtist={setOpenModalArtist}
            isEditArtist={false}
          />
          <button
            className="btnNewArtist"
            onClick={() => setOpenModalArtist(true)}
          >
            <FaPlus className="icon-Admin-AddArtist" />
            Add Artist
          </button>
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
            {artists
              ? artists.map((artist) => (
                  <RowArtist
                    artist={artist}
                    openModalArtist={openModalArtist}
                    setOpenModalArtist={setOpenModalArtist}
                  />
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddArtists;

function RowArtist({ artist, openModalArtist, setOpenModalArtist }) {
  return (
    <tr>
      <td className="id-title">{artist.artistId}</td>
      <td className="photo-title">
        <img src={artist.photo} alt="img-artist" className="img-td-artist" />
      </td>
      <td className="name-title">{artist.name}</td>
      <td className="paintings-title">{artist.paintings}</td>
      <td className="review-title">{artist.reviews}</td>
      <td className="sales-title">{artist.sales}</td>
      <td className="button-title">
        <ArtistModal
          openModalArtist={openModalArtist}
          setOpenModalArtist={setOpenModalArtist}
          isEditArtist={true}
          artist={artist.artistId}
        />
        <AiFillEdit
          className="icon-artist-eduit"
          onClick={() => setOpenModalArtist(true)}
        />
      </td>
    </tr>
  );
}
