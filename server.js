// IMPORT
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// TEST DB CONNECTION
const connection = require('./database');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// ROUTES
const registerRoute = require('./routes/registerRoute');
app.use('/api/register', registerRoute);

// Custom error handling middleware
app.use((err, req, res, next) => {
  // Log the error to the console
  console.error('Error occurred:', err);

  // Respond with an error message to the client
  res.status(500).json({ message: 'Something went wrong' });
});

// START THE SERVER
app.listen(8000, () => {
  console.log('Server is running on port 8000.');
});



