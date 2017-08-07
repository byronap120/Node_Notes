console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');


const argv = yargs.argv;
var command = argv._[0];
console.log('command:', command);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (_.isUndefined(note)) {
    console.log('An error ocurred added a note');
  } else {
    console.log('Note added succesfully');
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else if (command === 'read') {
  notes.getNote(argv.title);
} else {
  console.log('command not recognize');
}
