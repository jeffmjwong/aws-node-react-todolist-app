import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './db';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('Hello world from Express!');
});

app.get('/todos', (req, res) => {
  db.any('SELECT * from todos')
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

app.post('/todos', (req, res) => {
  debugger;
  console.log(req);
})

app.listen(3001, () => {
  console.log('Server has been started and listening on port 3001...')
});
