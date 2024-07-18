const User = require("../models/userModel");
const { generateToken } = require("../utils/jwtUtils");

// Create a new user
const createUser = async (req, res) => {
  const { name, phoneNumber, email, pinCode } = req.body;

  try {
    const newUser = new User({ name, phoneNumber, email, pinCode });
    await newUser.save();
    const token = generateToken(newUser);
    res.status(201).json({ user: newUser, token });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Example of a protected route
const getProfile = (req, res) => {
  res.json({ user: req.user });
};

module.exports = { createUser, getProfile };
