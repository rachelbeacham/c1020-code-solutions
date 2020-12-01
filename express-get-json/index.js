const express = require('express');
const app = express();

const objArray = [
  {
    id: 1,
    name: 'Rachel Beacham',
    course: 'node.js',
    grade: 100
  },
  {
    id: 2,
    name: 'Ruby Schaffer',
    course: 'JavaScript',
    grade: 95
  }
];
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');

});

app.get('/api/grades', (req, res) => {
  res.send(res.json(objArray));
});
