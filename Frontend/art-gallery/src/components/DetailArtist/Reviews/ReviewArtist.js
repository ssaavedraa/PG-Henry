import React from "react";
import "./ReviewArtist.css";
import { getReviews } from "../../../redux/actions/actions";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ReviewArtist = ({ id }) => {
  const dispatch = useDispatch();
  const idArtist = id;

  useEffect(() => {
    dispatch(getReviews(idArtist));
  }, [dispatch, idArtist]);

  const reviews = useSelector((state) => state.reviews);
  //console.log("Soy las review", reviews);

  return (
    <div>
      <h3 className="title">Review artist's artworks</h3>
      {reviews && reviews.length > 0 ? (
        <div className="containerReviews">
          {reviews.map((review) => {
            let dif = review.score;
            let stars = [];
            for (let i = 0; i < dif; i++) {
              stars.push(i);
            }
            return (
              <div className="divReviews" key={review.id}>
                <img
                  src={review.paintingPhoto}
                  alt="arteworks"
                  className="imgArtwork"
                />
                <div className="containerText">
                  <div className="divText">
                    <h5>{review.paintingTitle}</h5>
                    <div className="stars-container">
                      {stars.map((s, i) => (
                        <FaStar
                          style={{ color: "#F0C929", fontSize: "18px" }}
                          key={i}
                        />
                      ))}
                    </div>
                  </div>
                  <p>{review.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="containerReviews">
          <div className="divReviews">
            <h5>The artist has no reviews yet!</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewArtist;
