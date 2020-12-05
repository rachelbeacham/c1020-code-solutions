const express = require('express');
const app = express();

const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
      select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.status(200).send(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.post('/api/grades', (req, res) => {
  const newScore = parseInt(req.body.score);
  if (req.body.name === undefined) {
    res.status(400).json({ error: 'name is a required field' });
  } else if (req.body.course === undefined) {
    res.status(400).json({ error: 'course is a required field' });
  } else if (req.body.score === undefined) {
    res.status(400).json({ error: 'score is a required field' });
  } else if (!Number.isInteger(newScore) || newScore < 1 || newScore > 100) {
    res.status(400).json({ error: 'score must be an integer from 1 and 100' });
  } else {
    const insert = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
    `;
    const values = [req.body.name, req.body.course, req.body.score];
    const params = values;
    db.query(insert, params)
      .then(result => {
        res.status(201).json(result.rows[0]);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);
  const newScore = parseInt(req.body.score);
  if (req.body.name === undefined) {
    res.status(400).json({ error: 'name is a required field' });
  } else if (req.body.course === undefined) {
    res.status(400).json({ error: 'course is a required field' });
  } else if (req.body.score === undefined) {
    res.status(400).json({ error: 'score is a required field' });
  } else if (!Number.isInteger(newScore) || newScore < 1 || newScore > 100) {
    res.status(400).json({ error: 'score must be an integer from 1 and 100' });
  } else if (!Number.isInteger(gradeId) || gradeId < 1) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
  } else {
    const sql = `
    update "grades"
       set "name"    = $1,
           "course"  = $2,
           "score"   = $3
     where "gradeId" = $4
     returning *;
    `;
    const values = [req.body.name, req.body.course, req.body.score, gradeId];
    const params = values;
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (grade === undefined) {
          res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
        } else {
          res.status(200).send(grade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId < 1) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
  } else {
    const sql = `
      delete from "grades"
            where "gradeId" = $1
        returning *;
    `;
    const params = [gradeId];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (grade === undefined) {
          res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
        } else {
          res.sendStatus(204);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
      });
  }

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
