import React from 'react'
import NoteCard from './NoteCard'
import { useSelector } from 'react-redux'
const NotesList = ({search = ""}) => {
  const { notes, filter } = useSelector(state => state.notes);
  console.log("Redux Notes:", notes);
  console.log("Redux Filter:", filter);
  const filteredNotes = notes
    .filter(note =>
      filter === "important" ? note.important : true
    )
    .filter(note =>
      (note.title || "")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
     if (filteredNotes.length === 0) {
    return (
      <p className="text-center mt-4">
        No notes found
      </p>
    );
  }
  return (

    <div className="row">

     
      {filteredNotes.map(note => (
        <NoteCard key={note.id} note={note} />
      ))}
    
    </div>

  )
}

export default NotesList