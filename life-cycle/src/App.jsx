import { useState } from 'react'
import './App.css'

function App() {
  const [showLogger, setisLoger] = useState(false)

  return (
    <>
      <div className="container">
        <h2> React Life Cycle playground </h2>

        <button className="primary-btn" onClick={() => {
          setisLoger(!showLogger)
        }}>{showLogger ? "Unmount logger" : "Mount logger" }</button>

        {showLogger && <div>Life cycle toggle here</div>}
      </div>
    </>
  );
}

export default App
