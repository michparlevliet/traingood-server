// IMPORT
const express = require('express');
const cors = require('cors');

// CREATE EXPRESS APPLICATION
const app = express();

app.use(cors());
app.use(express.json());

// CREATE GET ROUTE
app.get('/message', (req, res) => {
  res.json({ message: "Hello from server!" });
});

// START THE SERVER
app.listen(8000, () => {
  console.log('Server is running on port 8000.');
});

