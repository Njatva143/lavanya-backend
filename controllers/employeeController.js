// controllers/employeeController.js
const Employee = require('../models/employeeModel');

// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new employee
exports.addEmployee = async (req, res) => {
  const { name, position } = req.body;
  try {
    const newEmployee = new Employee({ name, position });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
