// routes/employeeRoutes.js
const express = require('express');
const router = express.Router();
const { getAllEmployees, addEmployee } = require('../controllers/employeeController');

// Routes for employees
router.get('/employees', getAllEmployees);  // GET all employees
router.post('/employees', addEmployee);    // POST a new employee

module.exports = router;
