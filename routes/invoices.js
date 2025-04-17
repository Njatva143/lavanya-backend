const express = require('express');
const router = express.Router();

// GET /api/invoices
router.get('/', (req, res) => {
    res.json({ message: 'invoices route working' });
});

module.exports = router;