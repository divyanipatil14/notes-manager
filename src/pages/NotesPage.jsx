import React, { useEffect, useState } from 'react'
import NoteForm from '../Components/NoteForm'
import NotesList from '../Components/NotesList'
import { useDispatch } from 'react-redux';
import { fetchNotes, setFilter } from '../redux/noteslice';
import NotesFilter from '../Components/NotesFilter';

const NotesPage = () => {
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchNotes());
}, [dispatch]);
    const [search, setSearch] = useState("");
    console.log("Search Value:", search);
  return (
   <div className='container'>
        <h1>
          Notes Manager
        </h1>
      
     <NoteForm/>
      <NotesFilter setSearch={setSearch}/>
        <NotesList search={search}/>
      </div>
  )
}

export default NotesPage