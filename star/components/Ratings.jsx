import { useState } from "react";
import Star from "./Star";

const Ratings = ({ message, color, feedbackMessages }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmit(true);
    }
  };

  const closeModal = () => {
    setSubmit(false)
    setRating(0)
  }
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  // const feedbackMessages = ["terriable", "poor", "average", "nice", "excelent"]

  return (
    <>
      <div className="rating-container">
        <h2>{message}</h2>
        <p>{/* {rating} {hover} */}</p>
        <div className="stars">
          {stars.map((star) => (
            <Star
              key={star}
              hover={hover}
              rating={rating}
              star={star}
              color={color}
              ratingClick={setRating}
              ratingsHoverenter={setHover}
              ratingsHoverleave={setHover}
            />
            // <span
            //   onClick={() => setRating(star)}
            //   onMouseEnter={() => setHover(star)}
            //   onMouseLeave={() => setHover(0)}
            //   className={`star ${star <= (hover || rating) ? "active" : "" }`}
            //   key={star}
            //   style={{color :star <= (hover || rating) ? color : '#ccc'}}
            // >
            //   {"\u2605"}
            // </span>
          ))}
        </div>
        {rating >= 0 && (
          <p className="feedback">{feedbackMessages[(rating || hover) - 1]}</p>
        )}
        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={rating === 0}
        >
          Submit
        </button>
      </div>
      {submit && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>thank you</h2>
            <p>you rated us {rating} star{rating > 1 ? "s" : ""}</p>
            <button className="close-btn" onClick={closeModal}>Close </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Ratings;
