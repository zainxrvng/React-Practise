import "./App.css";
import Ratings from "../components/Ratings";

function App() {
  return (
    <>
      <div>
        <Ratings message = "How did you like the expericeane of React" color= "red" feedbackMessages={["shit", "ass", "meh", "nice", "very good"]}/>
      </div>
    </>
  );
}

export default App;
