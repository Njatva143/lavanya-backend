const express = require('express');
const router = express.Router();

// GET /api/payments
router.get('/', (req, res) => {
    res.json({ message: 'payments route working' });
});

module.exports = router;