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
  res.send('Hello world from Express!');
});

app.listen(3001);
