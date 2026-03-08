import React from 'react'
import { useDispatch } from 'react-redux'
import { removeNote, toggleImportantAsync } from '../redux/noteslice';
const NoteCard = ({note}) => {
    console.log("note",note)
    const dispatch =useDispatch();
    const handleDelete = () => {
  console.log("Deleting Note:", note.id);
  dispatch(removeNote(note.id));
};

const handleImportant = () => {
  console.log("Toggle Important:", note.id);
 dispatch(toggleImportantAsync(note.id));
};
  return (
    <>
 <div className="col-md-4 mb-3 mt-4">
 <div className={`card ${note.important ? "border-warning" : ""}`}>
    <div className="card-body  ">

      <h5 className="card-title">{note.title}</h5>
      <p className="card-text">{note.description}</p>
      <small className="text-muted">
  {new Date(note.createdAt).toLocaleDateString()}
</small>
 <p>
        Important: {note.important ? "Yes ⭐" : "No"}
      </p>
      <div className="d-flex gap-2">
        <button
          className="btn btn-warning btn-sm"
          onClick={handleImportant}
        >
          {note.important ? "Unmark" : "Important"}
        </button>

        <button
          className="btn btn-danger btn-sm"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>

    </div>
  </div>
</div>
        
    </>

  )
}

export default NoteCard