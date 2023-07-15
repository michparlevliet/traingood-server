const mysql2 = require ('mysql2');

require('dotenv').config();

const connection = mysql2.createConnection({
  host: 'localhost',
  port: '3306',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'traingood_db'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to database.');
});
