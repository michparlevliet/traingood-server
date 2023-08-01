const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Import the database connection
const db = require('../database');

// Registration route
router.post('/api/register', async (req, res) => {
  try {
    const { f_name, l_name, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user data into the database using async/await
    const query = `INSERT INTO user (f_name, l_name, email, password, created_at) 
                   VALUES (?, ?, ?, ?, NOW())`;

    // Using db.query as a promise (with .execute())
    const [rows] = await db.execute(query, [f_name, l_name, email, hashedPassword]);

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'An error occurred while registering the user' });
  }
});

module.exports = router;
