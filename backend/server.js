
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");

const app = express();

// CORS configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Middleware
app.use(express.json({ limit: "10kb" }));

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio backend is running!",
  });
});

// Contact API
app.use("/api/contact", contactRoutes);

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
