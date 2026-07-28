import Note from "./Note";
const NotesList = ( {notes, deleteNotes} ) => {
   if ( notes.length === 0) {
    return <p className='text-center text-grey-500'>No Notes yet</p>
    
   }
  return (
    <div>
      {notes.map((note) => (
        <Note key={note.id} note={note} deleteNotes={deleteNotes} />
      ))}
    </div>
  );
}

export default NotesList
