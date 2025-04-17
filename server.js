const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB connection error:", err));

// Routes
app.use("/api/employees", require("./routes/employees"));
app.use("/api/salaries", require("./routes/salaries"));
app.use("/api/invoices", require("./routes/invoices"));
app.use("/api/payments", require("./routes/payments"));

// Test route
app.get("/", (req, res) => {
  res.send("Lavanya Backend is running 🚀");
});

// ✅ START SERVER
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
