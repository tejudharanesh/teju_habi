const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const twilio = require("twilio");

const app = express();
const port = 5000;

// Replace with your Twilio account SID and Auth Token
const accountSid = "ACdb13688dd318588c2866806197c9f067";
const authToken = "2d14023885cb2dc8ae5d98ce8a73ca46";
const client = new twilio(accountSid, authToken);

app.use(cors());
app.use(bodyParser.json());

app.post("/send-otp", (req, res) => {
  const { phoneNumber } = req.body;

  // Generate a random 6-digit OTP
  const otp = Math.floor(1000 + Math.random() * 9000);

  client.messages
    .create({
      body: `Thank you for login at habi, Your OTP is  ${otp}`,
      from: "+916366306244", // Your Twilio phone number
      to: phoneNumber,
    })
    .then((message) => {
      console.log(message.sid);
      res.status(200).send({ success: true, otp });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ success: false, error });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
