import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [showLogger, setisLoger] = useState(false)
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      {/* <div className="container">
        <h2> React Life Cycle playground </h2>

        <button className="primary-btn" onClick={() => {
          setisLoger(!showLogger)
        }}>{showLogger ? "Unmount logger" : "Mount logger" }</button>

        {showLogger && <div>Life cycle toggle here</div>}
      </div> */}

      <div>
        <h1>{seconds}</h1>
      </div>
    </>
  );
}

export default App;
