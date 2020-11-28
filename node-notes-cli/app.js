/* eslint-disable no-console */
const data = require('./data.json');
const fs = require('fs');
const command = process.argv[2];
const notes = data.notes;
let nextID = data.nextId;
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
  findNextId();
  reWriteJson();
}

if (command === 'delete') {
  const deleted = process.argv[3];
  for (const id in notes) {
    if (id === deleted) {
      delete notes[id];
    } else if (id !== deleted) {
      notesKeys.push(parseInt(id));
    }
  }
  findNextId();
  reWriteJson();
}

if (command === 'update') {
  const updateNum = process.argv[3];
  const updateText = process.argv[4];
  notes[updateNum] = updateText;
  reWriteJson();
}

function reWriteJson() {
  const dataJson = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', dataJson, 'utf8', err => {
    if (err) throw err;
  });
}

function findNextId() {
  largestKey = Math.max(...notesKeys);
  nextID = largestKey + 1;
  data.nextId = nextID;
}
