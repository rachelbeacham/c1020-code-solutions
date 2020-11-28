/* eslint-disable no-console */
const data = require('./data.json');
const notes = data.notes;
let nextID = data.nextId;
const command = process.argv[2];
const fs = require('fs');
const notesKeys = [];
let largestKey;

if (command === 'read') {
  for (const id in notes) {
    console.log(`${id}: ${notes[id]}`);
  }
}

if (command === 'create') {
  notes[nextID] = process.argv[3];
  for (const id in notes) {
    notesKeys.push(parseInt(id));
  }
  largestKey = Math.max(...notesKeys);
  nextID = largestKey + 1;
  data.nextId = nextID;
  const dataJson = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', dataJson, 'utf8', err => {
    if (err) throw err;
  });
}

if (command === 'delete') {
  const deleted = process.argv[3];
  for (const id in notes) {
    if (id === deleted) {
      delete notes[id];
    } if (id !== deleted) {
      notesKeys.push(parseInt(id));
    }
  }
  largestKey = Math.max(...notesKeys);
  nextID = largestKey + 1;
  data.nextId = nextID;
  const dataJson = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', dataJson, 'utf8', err => {
    if (err) throw err;
  });
}
