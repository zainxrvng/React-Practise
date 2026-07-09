import { useState } from "react";

const Ratings = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const feedbackMessages = ["terriable", "poor", "average", "nice", "excelent"]

  return (
    <>
      <div className="rating-container">
        <h2>rate your expreicance</h2>
        <p>
          {/* {rating} {hover} */}
        </p>
        <div className="stars">
          {stars.map((star) => (
            <span
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              className={`star ${star <= (hover || rating) ? "active" : "" }`}
              key={star}
            >
              {"\u2605"}
            </span>
          ))}
        </div>
        {rating > 0 && <p className="feedback">{feedbackMessages[rating, hover - 1]}</p>}
      </div>
    </>
  );
};

export default Ratings;
