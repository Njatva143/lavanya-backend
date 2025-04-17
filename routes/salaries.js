const express = require('express');
const router = express.Router();

// GET /api/salaries
router.get('/', (req, res) => {
    res.json({ message: 'salaries route working' });
});

module.exports = router;