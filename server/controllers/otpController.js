const twilio = require("twilio");
const { generateToken } = require("../utils/jwtUtils");
const User = require("../models/userModel");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

const sendOtp = async (req, res) => {
  const { phoneNumber } = req.body;
  const otp = req.otp;

  try {
    await client.messages.create({
      body: `Your OTP is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    });
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

const validateOtp = async (req, res) => {
  const { phoneNumber } = req.body;
  const user = req.user;

  const token = generateToken(user);
  res.json({ success: true, token });
};

module.exports = { sendOtp, validateOtp };
