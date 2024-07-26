const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to the database!");
  } catch (err) {
    console.error("Database connection error: ", err);
  }
};

module.exports = connectDB;
