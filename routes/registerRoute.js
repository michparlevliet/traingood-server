const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Import the database connection
const db = require('../database'); // Update the path based on your project structure

// Registration route
router.post('/api/register', async (req, res) => {
  try {
    const { f_name, l_name, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user data into the database
    const query = `INSERT INTO user (f_name, l_name, email, password, created_at) 
                   VALUES (?, ?, ?, ?, NOW())`;
    await db.query(query, [f_name, l_name, email, hashedPassword]);

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'An error occurred while registering the user' });
  }
});


module.exports = router;
