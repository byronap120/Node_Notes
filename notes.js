console.log('Starting notes.js');

const fs = require('fs')

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data', JSON.stringify(notes));
}

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicatesNotes = notes.filter((note) => note.title === title)

  if(duplicatesNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}

var getAll = () => {
  console.log('getting all notes');
}

var removeNote = (title) => {
  console.log('Removing note', title);
}

var getNote = (title) => {
  console.log('Reading note', title);
}


module.exports = {
  addNote,
  getAll,
  removeNote,
  getNote
};
