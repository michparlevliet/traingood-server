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
// REGISTER
const registerRoute = require('./routes/registerRoute');
app.use('/api/register', registerRoute);
// LOGIN
const loginRoute = require('./routes/loginRoute');
app.use('/api/login', loginRoute);
// ADD ACTIVITY
const addActivityRoute = require('./routes/addActivityRoute');
app.use('/api/add-activity', addActivityRoute);
// VIEW ACTIVITIES
const viewActivitiesRoute = require('./routes/viewActivitiesRoute');
app.use('/api/view-activities', viewActivitiesRoute);

// Custom error handling middleware
app.use((err, req, res, next) => {
  // Log the error to the console
  console.error('Error occurred:', err);

  // Respond with an error message to the client
  res.status(500).json({ message: 'Something went wrong' });
});

// START THE SERVER
app.listen(process.env.PORT | PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



