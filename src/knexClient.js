
const knex = require('knex')({
  client: 'mysql',
  connection: process.env.JAWSDB_MARIA_URL,
});

module.exports = knex;
