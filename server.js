const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const connectDB = require("./config/db");

connectDB();

const app = express();

const authRoutes =
require("./routes/authRoutes");

app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});