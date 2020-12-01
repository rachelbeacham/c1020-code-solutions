const express = require('express');
const app = express();

const grades = [
  {
    id: 1,
    name: 'Rachel Beacham',
    course: 'Node.js',
    grade: 100
  },
  {
    id: 2,
    name: 'Ruby Schaffer',
    course: 'JavaScript',
    grade: 95
  }
];

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.delete('/api/grades/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = id - 1;
  grades.splice(index, 1);
  res.sendStatus(204);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');

});
