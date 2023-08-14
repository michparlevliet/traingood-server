const mysql2 = require ('mysql2');

require('dotenv').config();

const connection = mysql2.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});
//console.log(process.env.DB_USER, process.env.DB_PASS);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  else {
    console.log('Connected to database.');
  }
  
});

module.exports = connection.promise();

// mysql://bd5d39fae3776e:331b930c@us-cdbr-east-06.cleardb.net/heroku_1a92d00af46bf97?reconnect=true