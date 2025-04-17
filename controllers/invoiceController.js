const Invoice = require("../models/Invoice");

exports.getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find().populate('employeeId');
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};