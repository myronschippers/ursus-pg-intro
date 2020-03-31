const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express();
const Pool = pg.Pool;
const PORT = process.env.PORT || 5000;

const pool = new Pool({
  database: 'music_storage',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMills: 30000,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// STATIC FILE SETUP/CONFIGURATION
app.use(express.static('public'));

// GET ROUTE for All Songs
app.get('/songs', (req, res) => {
  const queryText = `SELECT * FROM "songs";`;
  pool.query(queryText)
    .then((responseDB) => {
      const dbRows = responseDB.rows;
      res.send(dbRows);
    })
    .catch((err) => {
      console.log('ERROR:', err);
      res.sendStatus(500);
    });
});

// POST ROUTE for saving a song
app.post('/songs', (req, res) => {

});

// KICK OFF APP
app.listen(PORT, () => {
  console.log('Server running on PORT:', PORT);
});
