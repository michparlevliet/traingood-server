// IMPORT
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const registrationRoute = require('./routes/registrationRoute'); 
// const loginRoute = require('./routes/loginRoute'); 
// const logoutRoute = require('./routes/logoutRoute');

// TEST DB CONNECTION
const connection = require('./database');

// TEST DOTENV
// require('dotenv').config();
// console.log(process.env);

// CREATE EXPRESS APPLICATION
// const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// ROUTES
const registerRoute = require('./routes/registerRoute');
app.use('/api', registerRoute);
// app.use('/api', loginRoute);
// app.use('/api', logoutRoute);

// CREATE GET ROUTE FOR REGISTRATION PAGE
// app.get('api/register', (req, res) => {

// })
// app.get('/message', (req, res) => {
//   res.json({ message: "Hello from server!" });
//   // connection.query('SELECT * from user', (err, results) => {
//   //   if (err) {
//   //     console.error('Error executing query', err);
//   //     res.status(500).json({ error: 'Internal server error' });
//   //     return;
//   //   }
//   // })
// });

// app.use(express.static(path.join(__dirname, 'api')));

// app.get('/register', (req, res) => {
//   res.sendFile(path.join(__dirname, 'api', register.html));
// });

// START THE SERVER
app.listen(8000, () => {
  console.log('Server is running on port 8000.');
});



