const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// STATIC FILE SETUP/CONFIGURATION
app.use(express.static('public'));

// GET ROUTE for All Songs
app.get('/songs', (req, res) => {
  
});

// POST ROUTE for saving a song
app.post('/songs', (req, res) => {

});

// KICK OFF APP
app.listen(PORT, () => {
  console.log('Server running on PORT:', PORT);
});
