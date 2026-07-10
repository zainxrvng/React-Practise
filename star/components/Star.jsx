const Star = ({ rating, hover, star, color = "gold",ratingClick, ratingsHoverenter, ratingsHoverleave }) => {
  return (
    <div>
      <span
           className={`star ${star <= (hover || rating) ? "active" : "" }`}
        style={{ color: star <= (hover || rating) ? color : "#ccc" }}
        onClick={() => {ratingClick(star)}}
        onMouseEnter={() => {ratingsHoverenter(star)}}
        onMouseLeave={ratingsHoverleave}

      >
        {" "}
        {"\u2605"}
      </span>
      
    </div>
  );
};

export default Star;
