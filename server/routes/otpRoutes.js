const express = require("express");
const router = express.Router();
const { sendOtp, validateOtp } = require("../controllers/otpController");
const {
  sendOtpMiddleware,
  verifyOtpMiddleware,
} = require("../middleware/otpMiddleware");
const { checkUserExists } = require("../middleware/userMiddleware");

router.post("/send", sendOtpMiddleware, sendOtp);
router.post("/validate", verifyOtpMiddleware, checkUserExists, validateOtp);

module.exports = router;
