const Ratings = () => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const clicked = () => console.log("clicked")
  const hovered = (direction) => console.log("hovered",direction)
  return (
    <>
      <div className="rating-container">
        <h2>rate your expreicance</h2>
        <div className="stars">
          {stars.map((stars) => (
            <span onClick={clicked}
            onMouseEnter={() => {hovered("enter")}}
            onMouseLeave={() => {hovered("leave")}}
             className="star" key={stars}>
              {" "}
              {"\u2605"}{" "}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ratings;
