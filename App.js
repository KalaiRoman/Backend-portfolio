import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/* =====================================
   MIDDLEWARE
===================================== */

app.use(express.json());

/* =====================================
   PORT
===================================== */

const PORT = process.env.PORT || 5000;

/* =====================================
   MONGODB CONNECTION
===================================== */

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((error) => {
    console.log("❌ MongoDB Connection Error:", error.message);
  });

/* =====================================
   ROUTES
===================================== */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Server is running successfully",
  });
});

app.get("/connect", (req, res) => {
  res.status(200).json({
    success: true,
    message: "✅ Connected to the server!",
  });
});

/* =====================================
   SERVER
===================================== */

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});