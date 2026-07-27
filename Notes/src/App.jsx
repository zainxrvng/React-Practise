// import Forms from "./components/Forms"
import Newforms from "./components/Newform"
import {useState} from "react"
import NotesList from "./components/NotesList"
const App = () => {
  const [notes, setNotes] = useState([])
  const deleteNotes = (id) => {
    const confrimDelete = window.confirm("are you sureyou want to delete this note?")

    if (confrimDelete) {
      setNotes(notes.filter((note) => note.id !== id));
    }

  }
  return (
    <div className="m-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Notes app</h2>
      {/* <Forms /> */}
      <Newforms notes = {notes} setNotes = {setNotes}/>
      <NotesList notes={notes} deleteNotes = {deleteNotes}/>
    </div>
  )
}

export default App
