const express = require('express');
const router = express.Router();

// GET /api/auth
router.get('/', (req, res) => {
    res.json({ message: 'auth route working' });
});

module.exports = router;