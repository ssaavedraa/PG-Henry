import React from "react";
import "./AddArtistForm.css";
import { addNewArtist } from "../../../redux/actions/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import imgUser from "../../../assets/img/user.png";
import logo from "../../../assets/img/SantArtlogo.png";
import { confirmationSweet } from "../../../components/utils/Notifications/Notifications";
import { useNavigate } from "react-router-dom";

const AddArtistForm = (setOpenModalArtist) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    biography: "",
    photo: "",
    email: "",
    location: "",
  });

  const [errors, setError] = useState({});
  const [applyChanges, setApplyChanges] = useState(true);

  function validate(input) {
    setApplyChanges(true);
    let errors = {};
    if (!input.name || !input.biography || !input.email || !input.location) {
      errors.message = "*All inputs are required";
    } else if (!input.photo || !input.photo.startsWith("http")) {
      errors.message = "*invalid photo";
    } else {
      setApplyChanges(false);
    }
    return errors;
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value, //va tomando el nombre de cada prop, me vaya llenando el estado
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    confirmationSweet(input.name, confirm, closeModal, false, true);
  }

  function confirm() {
    dispatch(addNewArtist(input));
    navigate("/artists");
  }

  function closeModal() {
    setOpenModalArtist(false);
  }

  return (
    <>
      <div className="artists-box">
        <div className="img-container"></div>
        <div className="info-box">
          <div className="profile-logo">
            <img src={logo} height="70rem" alt="imgUser" />
          </div>
          <div className="data-box">
            <form key="form" onSubmit={(e) => handleSubmit(e)} autocomplete="off">
              <div>
                {input.photo && input.photo.startsWith("http") ? (
                  <img src={input.photo} className="imgRedonda" alt="imgUser" />
                ) : (
                  <img src={imgUser} height="100rem" alt="imgUser" />
                )}
              </div>

              <label> Photo :</label>
              <input
                type="text"
                autoComplete="off"
                key="photo"
                className="input-addartist"
                required
                autocomplete="off"
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
                required
                autocomplete="off"
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
                autocomplete="off"
                required
                value={input.email}
                name="email"
                onChange={handleChange}
              />

              <label> Location: </label>
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
                autocomplete="off"
                className="input-addartist"
                value={input.biography}
                onChange={handleChange}
              />
              <div>
                <div className="error">
                  {errors.message ? <p>{errors.message}</p> : <p></p>}{" "}
                </div>
                <button disabled={applyChanges} className="btn-addartist">
                  CREATE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddArtistForm;
