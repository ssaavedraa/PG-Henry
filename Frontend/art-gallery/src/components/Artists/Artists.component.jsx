import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getArtist } from "../../redux/actions/actions";
import ArtistCard from "../ArtistCard/ArtistCard.component";
import "./Artists.css";
import AddArtistModal from "../../Modales/EditArtist/AddArtistForm/AddArtisModal";
import useAuth from "../../customHooks/useAuth";
import img from "../../assets/img/loading-img.gif";

export default function Artists() {
  const artists = useSelector((state) => state.artist);
  const [sort, setSort] = useState("az");

  const { user } = useAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    if (sort === "az") {
      artists.sort((a, b) => {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        else return 0;
      });
    }
    if (sort === "za") {
      artists.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        else return 0;
      });
    }
  }, [sort, artists]);

  useEffect(() => {
    dispatch(getArtist());
  }, [dispatch]);

  const [openModalArtist, setOpenModalArtist] = useState(false);

  if (!artists) {
    return (
      <div className="loading">
        <img src={img} alt="img" />
      </div>
    );
  }
  return (
    <div className="artists-container1">
      <div className="artists-header1">
        <h1>Artists</h1>
        <div className="artist-sort1">
          <label htmlFor="sort">Sort by name: </label>
          <select
            name="sort"
            id="sort"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
          <AddArtistModal
            openModalArtist={openModalArtist}
            setOpenModalArtist={setOpenModalArtist}
          />

          {user.role === "admin" && (
            <button
              onClick={() => setOpenModalArtist(true)}
              className="btn-create"
            >
              ADD NEW ARTIST
            </button>
          )}
        </div>
      </div>
      {artists.map((artist) => {
        return (
          <Link
            className="card-link"
            to={`/artists/${artist.id}`}
            key={artist.id}
          >
            <ArtistCard
              id={artist.id}
              img={artist.photo}
              name={artist.name}
              location={artist.location}
            />
          </Link>
        );
      })}
    </div>
  );
}
