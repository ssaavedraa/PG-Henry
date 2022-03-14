import React from "react";
import "./EditArtistForm.css";
import { editArtist } from "../../../redux/actions/actions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import imgUser from "../../../assets/img/user.png";
import logo from "../../../assets/img/SantArtlogo.png";
import { getArtistById } from "../../../redux/actions/actions";
import { useEffect } from "react";
import Swal from "sweetalert2";

const EditArtistForm = (artist) => {
  const id = artist.artist.id;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtistById(id));
  }, [dispatch, id]);

  const artistData = useSelector((state) => state.artistId);

  const [input, setInput] = useState({
    name: artistData.name,
    biography: artistData.biography,
    photo: artistData.photo,
    email: artistData.email,
    location: artistData.location,
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value, //va tomando el nombre de cada prop, me vaya llenando el estado
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    confirm();
    //alert("updated artist data");
  }

  function confirm(){
    const confirmationAdd = Swal.mixin({
      customClass: {
        confirmButton: "btnSweet success",
        cancelButton: "btnSweet danger",
      },
      buttonsStyling: false,
    });

    confirmationAdd.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, update!',
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(editArtist(id, input));
        Swal.fire(
          'Updated!',
          'Your entry has been updated.',
          'success'
        )
      }
    })
  }

  return (
    <>
      <div className="artists-box">
        <div className="img-container1"></div>
        <div className="info-box">
          <div className="profile-logo">
            <img src={logo} height="70rem" alt="imgUser" />
          </div>
          <div className="data-box">
            <form key="form" onSubmit={(e) => handleSubmit(e)}>
              <div>
                {input.photo && input.photo.startsWith("http") ? (
                  <img src={input.photo} className="imgRedonda" alt="imgUser" />
                ) : (
                  <img src={imgUser} height="100rem" alt="imgUser" />
                )}
              </div>

              <label> Photo: SOY EDIT</label>
              <input
                type="text"
                autoComplete="off"
                key="photo"
                className="input-addartist"
                required
                defaultValue={artistData.photo}
                value={input.photo}
                name="photo"
                onChange={handleChange}
              />

              <label> Name: </label>
              <input
                type="text"
                autoComplete="off"
                key="name"
                className="input-addartist"
                defaultValue={artistData.name}
                value={input.name}
                name="name"
                onChange={handleChange}
              />

              <label> Email: </label>
              <input
                type="text"
                autoComplete="off"
                key="email"
                className="input-addartist"
                required
                defaultValue={artistData.email}
                value={input.email}
                name="email"
                onChange={handleChange}
              />

              <label> Location: </label>
              <span>{input.location}</span>
              <select
                name="location"
                onChange={handleChange}
                className="input-addartist"
              >
                <option value="Elegir" id="AF">
                  Elegir opción
                </option>
                <option value="Afganistán" id="AF">
                  Afganistán
                </option>
                <option value="Albania" id="AL">
                  Albania
                </option>
                <option value="Alemania" id="DE">
                  Alemania
                </option>
                <option value="Andorra" id="AD">
                  Andorra
                </option>
                <option value="Angola" id="AO">
                  Angola
                </option>
                <option value="Anguila" id="AI">
                  Anguila
                </option>
                <option value="Antártida" id="AQ">
                  Antártida
                </option>
                <option value="Antigua y Barbuda" id="AG">
                  Antigua y Barbuda
                </option>
                <option value="Antillas holandesas" id="AN">
                  Antillas holandesas
                </option>
                <option value="Arabia Saudí" id="SA">
                  Arabia Saudí
                </option>
                <option value="Argelia" id="DZ">
                  Argelia
                </option>
                <option value="Argentina" id="AR">
                  Argentina
                </option>
                <option value="Armenia" id="AM">
                  Armenia
                </option>
                <option value="Aruba" id="AW">
                  Aruba
                </option>
                <option value="Australia" id="AU">
                  Australia
                </option>
                <option value="Austria" id="AT">
                  Austria
                </option>
                <option value="Azerbaiyán" id="AZ">
                  Azerbaiyán
                </option>
                <option value="Bahamas" id="BS">
                  Bahamas
                </option>
                <option value="Bahrein" id="BH">
                  Bahrein
                </option>
                <option value="Bangladesh" id="BD">
                  Bangladesh
                </option>
                <option value="Barbados" id="BB">
                  Barbados
                </option>
                <option value="Bélgica" id="BE">
                  Bélgica
                </option>
                <option value="Belice" id="BZ">
                  Belice
                </option>
              </select>

              <label> Biography: </label>
              <textarea
                name="biography"
                key="biography"
                className="input-addartist"
                defaultValue={artistData.biography}
                value={input.biography}
                onChange={handleChange}
              />
              <div>
                <button className="btn-create">UPDATE DATA</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditArtistForm;
