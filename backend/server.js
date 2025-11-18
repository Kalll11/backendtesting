require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// Koneksi ke MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.error("MongoDB Error:", err));

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Backend berjalan dan MongoDB terhubung!" });
});

app.listen(3001, () => {
  console.log("Server berjalan di port 3001");
});
