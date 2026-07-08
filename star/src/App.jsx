import './App.css'
import Ratings from '../components/Ratings'

function App() {
  const name = "zain"
  return (
    <>
      <div>
        <h1>hello {name}</h1>
        <Ratings />
      </div>
    </>
  );
}

export default App
