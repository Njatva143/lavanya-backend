const mongoose = require("mongoose");

const salarySchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  amount: Number,
  month: String,
  year: Number,
});

module.exports = mongoose.model("Salary", salarySchema);