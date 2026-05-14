import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/Routes.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((error) => {
    console.log("❌ MongoDB Connection Error:", error.message);
  });
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

app.use("/api",route)

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});