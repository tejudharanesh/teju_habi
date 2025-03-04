const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const generateToken = (user) => {
  const payload = {
    name: user.name,
    phoneNumber: user.phoneNumber,
    email: user.email,
  };

  return jwt.sign(payload, secret, { expiresIn: "1m" });
};

const verifyToken = (token) => {
  return jwt.verify(token, secret);
};

module.exports = { generateToken, verifyToken };
