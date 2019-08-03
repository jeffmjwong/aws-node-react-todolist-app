import pgPromise from 'pg-promise';

const pgp = pgPromise({});

const config = {
  host: process.env.POSTGRES_DB_HOST,
  port: process.env.POSTGRES_DB_PORT,
  database: process.env.POSTGRES_DB_DATABASE,
  user: process.env.POSTGRES_DB_USER,
  password: process.env.POSTGRES_DB_PASSWORD,
}

const db = pgp(config);

export default db;
