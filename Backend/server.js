import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./Routes/authRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import adminUsersRouter from "./Routes/adminUsers.js"
// dotenv init
dotenv.config();
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "stridedb",
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));


// 🔍 Test route to verify DB connection
app.get("/db-test", (req, res) => {
  const state = mongoose.connection.readyState;

  res.json({
    connected: state === 1,
    state,
    message: state === 1
      ? "MongoDB is connected"
      : "MongoDB is NOT connected",
  });
});

// routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use('/api/admin/users', adminUsersRouter);
app.use("/uploads", express.static("uploads"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
