require('dotenv').config();

const express = require('express');
const pgPromise = require('pg-promise');

const app = express();

const pgp = pgPromise({});

const config = {
  host: process.env.POSTGRES_DB_HOST,
  port: process.env.POSTGRES_DB_PORT,
  database: process.env.POSTGRES_DB_DATABASE,
  user: process.env.POSTGRES_DB_USER,
  password: process.env.POSTGRES_DB_PASSWORD,
}

const db = pgp(config);

app.get('/', (req, res) => {
  db.one('SELECT * from todos')
    .then(dbres => {
      console.log(dbres.name);
      // res.send('Hello world from Postgresql!');
      res.status(200).send(dbres.name);
    })
    .catch(err => console.log(err));
  // res.send('Hello world from Express!');
});

app.listen(3001);
