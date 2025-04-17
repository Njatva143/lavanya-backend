const Salary = require("../models/Salary");

exports.getSalaries = async (req, res) => {
  try {
    const salaries = await Salary.find().populate('employeeId');
    res.json(salaries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};