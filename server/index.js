import express from 'express';
import cors from 'cors';
import db from './db';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.status(200).send('Hello world from Express!');
});

app.get('/todos', (req, res) => {
  db.one('SELECT * from todos')
    .then(dbres => {
      console.log(dbres.name);
      res.status(200).send(dbres.name);
    })
    .catch(err => console.log(err));
});

app.listen(3001, () => {
  console.log('Server has been started and listening on port 3001...')
});
