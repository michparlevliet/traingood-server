// IMPORT
const express = require('express');
const cors = require('cors');

// TEST DB CONNECTION
const connection = require('./database');

// TEST DOTENV
// require('dotenv').config();
// console.log(process.env);

// CREATE EXPRESS APPLICATION
const app = express();

app.use(cors());
app.use(express.json());

// CREATE GET ROUTE
app.get('/message', (req, res) => {
  res.json({ message: "Hello from server!" });
  // connection.query('SELECT * from test', (err, results) => {
  //   if (err) {
  //     console.error('Error executing query', err);
  //     res.status(500).json({ error: 'Internal server error' });
  //     return;
  //   }
  // })
});

// START THE SERVER
app.listen(8000, () => {
  console.log('Server is running on port 8000.');
});



