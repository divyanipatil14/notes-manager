export const fetchNotesApi = () =>
  new Promise((resolve) => {
    console.log("API CALL: GET /notes");
    setTimeout(() => {
      resolve([]);
    }, 500);
  });

export const createNoteApi = (note) =>
  new Promise((resolve) => {
    console.log("API CALL: create /notes");
    setTimeout(() => {
      resolve(note);
    }, 500);
  });

export const deleteNoteApi = (id) =>
  new Promise((resolve) => {
        console.log("API CALL: DELETE /notes", id);
    setTimeout(() => {
      resolve(id);
    }, 500);
  });

export const toggleImportantApi = (id) =>
  new Promise((resolve) => {
        console.log("API CALL: important /notes", id);

    setTimeout(() => {
      resolve(id);
    }, 500);
  });