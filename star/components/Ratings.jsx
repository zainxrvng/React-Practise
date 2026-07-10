import { useState } from "react";
import Star from "./Star";

const Ratings = ( { message, color, feedbackMessages } ) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  // const feedbackMessages = ["terriable", "poor", "average", "nice", "excelent"]

  return (
    <>
      <div className="rating-container">
        <h2>{ message }</h2>
        <p>
          {/* {rating} {hover} */}
        </p>
        <div className="stars">
          {stars.map((star) => (

            <Star 
            key={star}
            hover = {hover}
            rating = {rating}
            star = {star}
            color = {color}
            ratingClick = {setRating}
            ratingsHoverenter = {setHover}
            ratingsHoverleave = {setHover}
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
        {rating >= 0 && <p className="feedback">{feedbackMessages[(rating || hover) - 1]}</p>}
      </div>
    </>
  );
};

export default Ratings;
