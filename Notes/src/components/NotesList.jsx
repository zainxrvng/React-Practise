const NotesList = ( {notes} ) => {
   if ( notes.length === 0) {
    return <p className='text-center text-grey-500'>No Notes yet</p>
    
   }
  return (
    <div>
      {notes.map((note) => (
        <div
          key={note.id}
          className="p-4 bg-white rounded-lg shadow-md border-l-4 mb-4"
        >
          <h3 className="text-lg font-bold">{note.Title}</h3>
          <p className="text-sm text-grey-600 mb-1">
            <strong>Category:</strong> {note.Category}
          </p>
          <p className="text-sm text-grey-600">
            <strong>Priorty:</strong> {note.Priorty}
          </p>
          <p className="mt-2">
            {note.Description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default NotesList
