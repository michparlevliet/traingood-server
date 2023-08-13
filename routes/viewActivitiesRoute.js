const express = require('express');
const router = express.Router();

// Import the database connection
const db = require('../database');

router.get('/view-activities', async (req, res) => {
  try {
    // Fetch all activities from the database
    const query = 'SELECT * FROM activity';
    const [activities] = await db.query(query);

    res.status(200).json({ activities });
  } catch (error) {
    console.error('Error fetching activities:', error);
    res.status(500).json({ message: 'An error occurred while fetching activities' });
  }
});

module.exports = router;
