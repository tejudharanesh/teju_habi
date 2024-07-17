import { useState } from "react";
import axios from "axios";

import logo from "../assets/habi_logo.png";
import googleLogo from "../assets/svg/Google.svg";
import facebookLogo from "../assets/svg/facebook.svg";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const LoginPage = () => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const formatPhoneNumber = (number) => {
    const phoneNumberObj = parsePhoneNumberFromString(number, "IN"); // Set the default country to India
    return phoneNumberObj ? phoneNumberObj.format("E.164") : null;
  };

  const sendOtp = async () => {
    const formattedNumber = formatPhoneNumber(phone);
    console.log("1 step");
    console.log(formattedNumber);
    try {
      const response = await axios.post("http://localhost:5000/send-otp", {
        phoneNumber: formattedNumber,
      });
      if (response) {
        console.log("otp sent");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleContinueClick = (e) => {
    e.preventDefault();
    sendOtp();
    console.log("sending otp");
  };

  return (
    <div className="min-h-screen flex md:items-center justify-center w-screen font-poppins">
      <div className="bg-white p-8 md:rounded-lg shadow-lg  w-full md:max-w-2xl lg:max-w-3xl md:flex md:flex-row">
        <div className="flex justify-center md:justify-start mb-20 md:mb-0 md:w-1/2">
          <img
            src={logo}
            alt="Habi"
            className="h-40 md:h-40 lg:h-40 xl:h-40 md:m-auto"
          />
        </div>
        <div className="md:w-2/3 md:pl-16 lg:pl-16">
          <h2 className="text-xl font-bold text-start mb-4">
            Login to Begin Your Journey
          </h2>
          <p className="text-black-500 mb-8 text-sm">
            Building Your Dream Home Starts Here.
          </p>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Enter phone number
            </label>
            <div className="flex">
              <div className="flex items-center px-4 border border-grey-300 border-r-0 bg-white-200 rounded-l-2xl">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                  alt="India Flag"
                  className="w-6 h-4 mr-2"
                />
                <span className="text-black">|+91 </span>
              </div>
              <input
                id="phone"
                type="text"
                placeholder="00000 00000"
                className="w-full border bg-white text-black border-gray-300 border-l-transparent rounded-r-2xl py-2 px-3 focus:outline-none"
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
          </div>
          <button
            onClick={handleContinueClick}
            className="w-full bg-primary opacity-50 text-white py-2 px-4 rounded-2xl hover:bg-gray-500 transition duration-300"
          >
            Continue
          </button>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="flex justify-center mt-7">
            <button className="bg-white border border-gray-300 py-2 px-2 rounded-xl flex items-center space-x-2 hover:bg-gray-50 transition duration-300 mr-5">
              <img src={googleLogo} alt="gooleLogo" />
            </button>
            <button className="bg-white border border-gray-300 py-2 px-2 rounded-xl flex items-center space-x-2 hover:bg-gray-50 transition duration-300 ml-5">
              <img src={facebookLogo} alt="gooleLogo" />
            </button>
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">
            By Clicking, I accept the{" "}
            <a href="#" className="text-primary">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
