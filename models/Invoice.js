const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: String,
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  amount: Number,
  issueDate: Date,
});

module.exports = mongoose.model("Invoice", invoiceSchema);