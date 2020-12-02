const express = require('express');
const fs = require('fs');
const app = express();
const data = require('./data.json');
const notes = data.notes;
const notesArray = [];
const nextId = data.nextId;
const resError = {};

for (const key in notes) {
  notesArray.push(notes[key]);
}

app.get('/api/notes', (req, res) => {
  res.send(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id > 0) {
    let index = -1;
    for (let i = 0; i < notesArray.length; i++) {
      if (notesArray[i].id === id) {
        index = i;
        break;
      }
    }
    if (index === -1) {
      resError.error = `cannot find note with id ${id}`;
      res.status(404).json(resError);
    } else {
      res.status(200).send(notesArray[index]);
    }
  } else {
    resError.error = 'id must be a positive integer';
    res.status(400).json(resError);
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  for (const key in newNote) {
    if (key !== 'content') {
      resError.error = 'content is a required field';
      res.status(400).json(resError);
    } else {
      newNote.id = nextId;
      notes[nextId] = newNote;
      data.nextId = newNote.id + 1;
      const dataJson = JSON.stringify(data, null, 2);
      fs.writeFile('data.json', dataJson, 'utf8', err => {
        if (err) {
          resError.error = 'An unexpected error occurred.';
          res.status(500).json(resError);
        }
      });
      res.status(200).send(newNote);
    }
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id > 0) {
    for (const key in notes) {
      if (parseInt(key) === id) {
        delete notes[key];
        res.sendStatus(204);
        const dataJson = JSON.stringify(data, null, 2);
        fs.writeFile('data.json', dataJson, 'utf8', err => {
          if (err) {
            resError.error = 'An unexpected error occurred.';
            res.status(500).json(resError);
          }
        });
      }
    }
    resError.error = `cannot find note with id ${id}`;
    res.status(404).json(resError);
  } else {
    resError.error = 'id must be a positive integer';
    res.status(400).json(resError);
  }
});

app.put('api/notes/:id', (req, res) => {
  const updatedNote = req.body;
  const id = parseInt(req.params.id);
  if (id > 0) {
    for (const key in updatedNote) {
      if (key !== 'content') {
        resError.error = 'content is a required field';
        res.status(400).json(resError);
      } else {
        updatedNote.id = id;
        for (const prop in notes) {
          if (parseInt(prop) === id) {
            notes[prop] = updatedNote;
            res.status(200).send(notes[prop]);
            const dataJson = JSON.stringify(data, null, 2);
            fs.writeFile('data.json', dataJson, 'utf8', err => {
              if (err) throw err;

            });
          }
        }
        resError.error = `cannot find note with id ${id}`;
        res.status(404).json(resError);
      }
    }
  } else {
    resError.error = 'id must be a positive integer';
    res.status(400).json(resError);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

/* original data.json
{
  "nextId": 5,
  "notes": {
    "1": {
      "id": 1,
      "content": "The event loop is how a JavaScript runtime pushes asynchronous callbacks onto the stack once the stack is cleared."
    },
    "2": {
      "id": 2,
      "content": "Prototypal inheritance is how JavaScript objects delegate behavior."
    },
    "3": {
      "id": 3,
      "content": "In JavaScript, the value of `this` is determined when a function is called; not when it is defined."
    },
    "4": {
      "id": 4,
      "content": "A closure is formed when a function retains access to variables in its lexical scope."
    }
  }
}
*/
