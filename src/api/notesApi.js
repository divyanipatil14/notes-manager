export const fetchNotesApi = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([]);
    }, 500);
  });

export const createNoteApi = (note) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(note);
    }, 500);
  });

export const deleteNoteApi = (id) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(id);
    }, 500);
  });

export const toggleImportantApi = (id) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(id);
    }, 500);
  });