const Payment = require("../models/Payment");

exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate('employeeId');
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};