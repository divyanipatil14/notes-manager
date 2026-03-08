import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchNotesApi,
  createNoteApi,
  deleteNoteApi,
  toggleImportantApi
} from "../api/notesApi";

const initialState = {
  notes: [],
  filter: "all",
  loading: false,
  error: null
};

export const fetchNotes = createAsyncThunk(
  "notes/fetchNotes",
  async () => {
    const data = await fetchNotesApi();
    return data;
  }
);

export const createNote = createAsyncThunk(
  "notes/createNote",
  async (note) => {
    const data = await createNoteApi(note);
    return data;
  }
);

export const removeNote = createAsyncThunk(
  "notes/removeNote",
  async (id) => {
    const data = await deleteNoteApi(id);
    return data;
  }
);

export const toggleImportantAsync = createAsyncThunk(
  "notes/toggleImportant",
  async (id) => {
    const data = await toggleImportantApi(id);
    return data;
  }
);

const notesSlice = createSlice({
  name: "notes",
  initialState,

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchNotes.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload;
      })

      .addCase(fetchNotes.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch notes";
      })

      .addCase(createNote.fulfilled, (state, action) => {
        state.notes.push(action.payload);
      })

      .addCase(removeNote.fulfilled, (state, action) => {
        state.notes = state.notes.filter(
          (note) => note.id !== action.payload
        );
      })

      .addCase(toggleImportantAsync.fulfilled, (state, action) => {
        const note = state.notes.find(
          (note) => note.id === action.payload
        );

        if (note) {
          note.important = !note.important;
        }
      });
  }
});

export const { setFilter } = notesSlice.actions;

export default notesSlice.reducer;