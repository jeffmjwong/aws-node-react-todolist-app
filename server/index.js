import express from 'express';
import db from './db';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello world from Express!');
});

app.get('/todos', (req, res) => {
  db.one('SELECT * from todos')
    .then(dbres => {
      console.log(dbres.name);
      // res.send('Hello world from Postgresql!');
      res.status(200).send(dbres.name);
    })
    .catch(err => console.log(err));
  // res.send('Hello world from Express!');
});

app.listen(3001, () => {
  console.log('Server has been started and listening on port 3001...')
});
