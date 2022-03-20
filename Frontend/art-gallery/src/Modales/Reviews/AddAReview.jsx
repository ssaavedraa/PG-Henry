import React from "react";
import "./AddAReview.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../../assets/img/SantArtlogo.png";
import { confirmationSweet } from "../../components/utils/Notifications/Notifications";
import { useNavigate } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const AddAReview = (setOpenModalArtist) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errors, setError] = useState({});
  const [applyChanges, setApplyChanges] = useState(true);

  const [hover, SetHover] = useState(null);

  const [input, setInput] = useState({
    score: 0,
    review: "",
  });

  console.log(input, "soy input");

  function validate(input) {
    setApplyChanges(true);
    let errors = {};
    if (!input.score || !input.review) {
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
      <div className="review-box">
        <div className="img-container2"></div>
        <div className="inforeview-box">
          <div className="profile-logo">
            <img src={logo} height="70rem" alt="imgUser" />
          </div>

          <div className="data-box-review">
            <form key="form" onSubmit={(e) => handleSubmit(e)}>
              <div>
                <h2>Review your purchase</h2>
              </div>

              <label> Product review: </label>
              <textarea
                name="review"
                key="review"
                className="input-add-review"
                value={input.review}
                onChange={handleChange}
              />
              <label> What is your score for the artist?</label>
              <div className="stars">
                {[...Array(5)].map((star, i) => {
                  const score = i + 1;
                  return (
                    <label>
                      <input
                        type="radio"
                        name="score"
                        value={input.score}
                        onClick={() => setInput({ score })}
                      />
                      <FaStar
                        className="star"
                        size="2rem"
                        color={
                          score <= (hover || input.score) ? "#ffc107" : "e4e5e9"
                        }
                        onMouseEnter={() => SetHover(score)}
                        onMouseLeave={() => SetHover(null)}
                      />
                    </label>
                  );
                })}
              </div>

              <div>
                <div className="error">
                  {errors.message ? <p>{errors.message}</p> : <p></p>}
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
