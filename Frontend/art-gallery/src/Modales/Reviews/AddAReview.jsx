import React from "react";
import "./AddAReview.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../../assets/img/SantArtlogo.png";
import { confirmationSweet } from "../../components/utils/Notifications/Notifications";
import { useNavigate } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const AddAReview= (setOpenModalArtist) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    score: 0,
    review: "",    
  });

  const [errors, setError] = useState({});
  const [applyChanges, setApplyChanges] = useState(true);

  function validate(input) {
    setApplyChanges(true);
    let errors = {};
    if (!input.score|| !input.review) {
      errors.message = "*Please fill all the inputs";    
    } else {
      setApplyChanges(false);
    }
    return errors;
  }

  function handleChange(e) {

    setInput({
      ...input,
      [e.target.name]: e.target.value, 
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
    confirmationSweet("Review", confirm, closeModal, false, true);
  }

  function confirm() {
    // dispatch(addNewArtist(input));
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
          <div><h1>Review your purchase</h1></div>
          <div className="data-box">
            <form key="form" onSubmit={(e) => handleSubmit(e)}>                  

             

              <label> Product review: </label>
              <textarea
                name="review"
                key="review"
                className="input-add-review"
                value={input.review}
                onChange={handleChange}
              />

               <label> What is your score for the artist?</label>
              
              <input
                type="text"
                autoComplete="off"
                key="email"
                className="input-add-review"
                required
                value={input.score}
                name="score"
                onChange={handleChange}
              />
              <div>
                <div className="error">
                  {errors.message ? <p>{errors.message}</p> : <p></p>}{" "}
                </div>
                <button disabled={applyChanges} className="btn-addartist">
                SEND MY REVIEW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddAReview;
