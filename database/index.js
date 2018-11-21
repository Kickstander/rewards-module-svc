const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  password: 'ye',
  database: 'rewards',
  port: 5432,
});

client.connect();

module.exports = client;