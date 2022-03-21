import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtitsStat } from "../../../redux/actions/actions";
import classnames from "classnames";
import { FaPlus } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import EditArtistModal from "../../../Modales/EditArtist/EditArtistForm/EditArtistModal";
import NavPanel from "../NavPanel/NavPanel";
import AddArtistModal from "../../../Modales/EditArtist/AddArtistForm/AddArtisModal";
import "./Artists.css";

function AddArtists() {
  const artists = useSelector((state) => state.artist);
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    order: "ASC",
    orderBy: "artistId",
  });

  React.useEffect(() => {
    dispatch(getArtitsStat());
  }, [dispatch]);

  const [openModalArtist, setOpenModalArtist] = useState(false);

  function orderOnChange(e) {
    let order = "ASC";

    if (filters.orderBy === e.target.name) {
      order = filters.order === "ASC" ? "DESC" : "ASC";
    }

    setFilters({
      order,
      orderBy: e.target.name,
    });
  }

  React.useEffect(() => {
    dispatch(getArtitsStat(filters));
  }, [dispatch, filters]);

  return (
    <div className="container-addartist">
      <NavPanel />
      <div className="admin-profile-container">
        <div className="artists-header">
          <AddArtistModal
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
              <th className="id-title">
                <button name="artistId" onClick={orderOnChange}>
                  ID
                  <div className={filters.orderBy === "artistId" ? "orderButton" : "ocultOrderButton"}>
                    {filters.order === "ASC" ? (
                      <IoMdArrowDropdown  className="iconFilterButton" />
                    ) : (
                      <IoMdArrowDropup  className="iconFilterButton" />
                    )}
                  </div>
                </button>
              </th>
              <th className="photo-title">
                <button>PHOTO</button>
              </th>
              <th className="name-title">
                <button name="name" onClick={orderOnChange}>
                  NAME
                  <div className={filters.orderBy === "name" ? "orderButton" : "ocultOrderButton"}>
                    {filters.order === "ASC" ? (
                      <IoMdArrowDropdown className="iconFilterButton" />
                    ) : (
                      <IoMdArrowDropup className="iconFilterButton" />
                    )}
                  </div>
                </button>
              </th>
              <th className="paintings-title">
                <button name="paintings" onClick={orderOnChange}>
                  PAINTINGS
                  <div className={filters.orderBy === "paintings" ? "orderButton" : "ocultOrderButton"}>
                    {filters.order === "ASC" ? (
                      <IoMdArrowDropdown className="iconFilterButton" />
                    ) : (
                      <IoMdArrowDropup className="iconFilterButton" />
                    )}
                  </div>
                </button>
              </th>
              <th className="review-title">
                <button name="reviews" onClick={orderOnChange}>
                  REVIEWS
                  <div className={filters.orderBy === "reviews" ? "orderButton" : "ocultOrderButton"}>
                    {filters.order === "ASC" ? (
                      <IoMdArrowDropdown className="iconFilterButton" />
                    ) : (
                      <IoMdArrowDropup className="iconFilterButton" />
                    )}
                  </div>
                </button>
              </th>
              <th className="sales-title">
                <button name="sales" onClick={orderOnChange}>
                  SALES
                  <div className={filters.orderBy === "sales" ? "orderButton" : "ocultOrderButton"}>
                    {filters.order === "ASC" ? (
                      <IoMdArrowDropdown className="iconFilterButton" />
                    ) : (
                      <IoMdArrowDropup className="iconFilterButton" />
                    )}
                  </div>
                </button>
              </th>
              <th className="button-title">EDIT</th>
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
  const [openModal, setopenModal] = useState(false);
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
      <EditArtistModal
        openEditArtistModal={openModal}
        setOpenEditArtistModal={setopenModal}
        artistId={artist.artistId}
      />
      <td className="button-title">
        <AiFillEdit
          className="icon-artist-eduit"
          onClick={() => setopenModal(true)}
        />
      </td>
    </tr>
  );
}
