
const Note = ( {note, deleteNotes}) => {
  return (
    <div>
      <div
        className="p-4 bg-white rounded-lg shadow-md border-l-4 mb-4"
        style={{
          borderLeftColor:
            note.Priorty === "High"
              ? "red"
              : note.Priorty === "Medium"
                ? "orange"
                : "green",
        }}
      >
        <h3 className="text-lg font-bold">{note.Title}</h3>
        <p className="text-sm text-grey-600 mb-1">
          <strong>Category:</strong> {note.Category}
        </p>
        <p className="text-sm text-grey-600">
          <strong>Priorty:</strong> {note.Priorty}
        </p>
        <p className="mt-2">{note.Description}</p>
        <button
          className="mt-3 text-red-500 cursor-pointer transition hover:text-red-700"
          onClick={() => {
            deleteNotes(note.id);
          }}
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default Note
