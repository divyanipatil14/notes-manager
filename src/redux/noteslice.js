import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    notes:[],
    filter:"all"
}

const notesSlice =createSlice({
    name:"notes",
    initialState,
    reducers:{
        setNotes:(state ,action) =>{
            state.notes= action.payload;
        },

    //     addNote:(state,action)=>{
    // state.notes.push=action.payload
    //     },
    addNote: (state, action) => {
//    state.notes = [...state.notes, action.payload];
state.notes.push(action.payload);
},
         deleteNote: (state, action) => {
      state.notes = state.notes.filter(
        note => note.id !== action.payload
      );
    },
     toggleImportant: (state, action) => {
      const note = state.notes.find(
        note => note.id === action.payload
      );

      if (note) note.important = !note.important;
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    }
});
export const{
    setNotes,
    addNote,
    deleteNote,
    toggleImportant,
    setFilter,
} =notesSlice.actions;

export default notesSlice.reducer