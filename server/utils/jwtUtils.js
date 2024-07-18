const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const generateToken = (user) => {
  const payload = {
    id: user._id,
    name: user.name,
    phoneNumber: user.phoneNumber,
    email: user.email,
  };
  return jwt.sign(payload, secret, { expiresIn: "1h" });
};

const verifyToken = (token) => {
  return jwt.verify(token, secret);
};

module.exports = { generateToken, verifyToken };
