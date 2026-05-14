import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import route from './routes/Routes.js';

dotenv.config();

const app = express();

/* ======================
   MIDDLEWARE
====================== */

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://kalaiportfolio.vercel.app",
    ],
    credentials: true,
  })
);

/* ======================
   DATABASE
====================== */

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ MongoDB Error:", err);
  });

mongoose.connection.on("connected", () => {
  console.log("MongoDB connection success");
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection failed:", err);
});

/* ======================
   ROUTES
====================== */

app.get("/", (req, res) => {
  res.send("Server Running");
});

/* ======================
   SERVER
====================== */

app.use("/api",route)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});