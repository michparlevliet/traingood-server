const express = require('express');
const router = express.Router();

// Import the database connection
const db = require('../database');

router.post('/add-activity', async (req, res) => {
  try {
    const { type, start_time, end_time, calories_burned, steps, description } = req.body;

    // Insert activity data into the database
    const query = `INSERT INTO activity (type, start_time, end_time, calories_burned, steps, description) 
                   VALUES (?, ?, ?, ?, ?, ?, ?)`;
    await db.query(query, [type, start_time, end_time, calories_burned, steps, description]);

    res.status(201).json({ message: 'Activity added successfully' });
  } catch (error) {
    console.error('Error adding activity:', error);
    res.status(500).json({ message: 'An error occurred while adding the activity' });
  }
});

module.exports = router;
