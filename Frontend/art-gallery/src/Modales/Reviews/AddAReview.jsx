import React, { useEffect } from "react";
import "./AddAReview.css";
import { useState } from "react";
import logo from "../../assets/img/SantArtlogo.png";
import { confirmationSweet } from "../../components/utils/Notifications/Notifications";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import { addReview } from "../../redux/actions/actions";

const AddAReview = ({ /* setOpenModalArtist ,*/ paintingId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errors, setError] = useState("");
  const [applyChanges, setApplyChanges] = useState(true);
  const [hover, setHover] = useState(null);
  const [input, setInput] = useState({
    title: "",
    score: 0,
    body: "",
    paintingId,
  });
  function handleSubmit(e) {
    e.preventDefault();
    confirmationSweet("Review", confirm, closeModal, false, false, false, true);
  }
  function confirm() {
    try {
      dispatch(addReview(input));
      navigate("/detailpainting/" + paintingId);
    } catch (e) {
      alert(e);
    }
  }

  function closeModal() {
    // setOpenModalArtist(false);
  }

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (input.title && input.body && input.score) {
      setApplyChanges(false);
      setError("");
    } else {
      setError("Please fill all blanks");
    }
  }, [input]);

  return (
    <>
      <div className="review-box">
        <div className="img-container2"></div>
        <div className="inforeview-box">
          <div className="profile-logo">
            <img src={logo} height="70rem" alt="imgUser" />
          </div>

          <div className="data-box-review">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div>
                <h2>Review your purchase</h2>
              </div>
              <label> Review title: </label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
              />

              <label> Product review: </label>
              <textarea
                name="body"
                className="input-add-review"
                onChange={handleChange}
              />

              <label> What is your score for the artist?</label>
              <div className="stars">
                {[...Array(5)].map((star, index) => {
                  const score = index + 1;
                  return (
                    <>
                      <input
                        type="radio"
                        name="score"
                        id={`star${score}`}
                        value={score}
                        onChange={handleChange}
                      />
                      <label htmlFor={`star${score}`}>
                        <FaStar
                          className="star"
                          size="1rem"
                          color={
                            score <= (hover || input.score)
                              ? "#ffc107"
                              : "e4e5e9"
                          }
                          onMouseEnter={() => setHover(score)}
                          onMouseLeave={() => setHover(null)}
                        />
                      </label>
                    </>
                  );
                })}
              </div>

              <div>
                <div className="error">
                  {errors ? <p>{errors}</p> : <p></p>}
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
