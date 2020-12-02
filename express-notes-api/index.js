const express = require('express');
const fs = require('fs');
const app = express();
const data = require('./data.json');
const notes = data.notes;
const nextId = data.nextId;
const resError = {};

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const key in notes) {
    notesArray.push(notes[key]);
  }
  res.send(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id > 0) {
    if (notes[id] === undefined) {
      resError.error = `cannot find note with id ${id}`;
      res.status(404).send(resError);
    } else {
      res.status(200).send(notes[id]);
    }
  } else {
    resError.error = 'id must be a positive integer';
    res.status(400).json(resError);
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  if (newNote.content === undefined) {
    resError.error = 'content is a required field';
    res.status(400).json(resError);
  } else {
    newNote.id = nextId;
    notes[nextId] = newNote;
  }
});

/*
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
*/
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

app.put('/api/notes/:id', (req, res) => {
  const updatedNote = req.body;
  const id = parseInt(req.params.id);
  if (id > 0) {
    for (const prop in updatedNote) {
      if (prop !== 'content') {
        resError.error = 'content is a required field';
        res.status(400).json(resError);
      } else {
        for (const key in notes) {
          if (parseInt(key) === id) {
            notes[key] = updatedNote;
            updatedNote.id = id;
            const dataJson = JSON.stringify(data, null, 2);
            fs.writeFile('data.json', dataJson, 'utf8', err => {
              if (err) {
                resError.error = 'An unexpected error occurred.';
                res.status(500).json(resError);
              }
            });
            res.status(200).send(updatedNote);
          }
        }
        resError.error = `cannot find note with id ${id}`;
        res.status(404).json(resError);
      }
    }
  } else {
    resError.error = 'id must be a positive integer';
    res.status(400).send(resError);
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
