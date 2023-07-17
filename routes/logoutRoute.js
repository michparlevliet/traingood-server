const express = require('express');
const router = express.Router();

// Logout route 
router.post('/logout', (req, res) => {
  // No server-side action required for logout with JWT (handled on the client-side)
  res.json({ message: 'Logout successful' });
});

module.exports = router;
