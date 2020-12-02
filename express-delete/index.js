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

app.delete('/api/grades/:id', function (req, res) {
  const id = parseInt(req.params.id);
  let index = -1;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].id === id) {
      index = i;
      break;
    }
  }
  if (index === -1) {
    res.sendStatus(404);
  } else {
    grades.splice(index, 1);
    res.sendStatus(204);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
