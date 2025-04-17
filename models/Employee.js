const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  contact: String,
  joinedDate: Date,
});

module.exports = mongoose.model("Employee", employeeSchema);