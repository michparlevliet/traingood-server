const mysql = require ('mysql');

require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'obdym392_traingood'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to database.');
});

module.exports = connection;