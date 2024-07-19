import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [isOtpValid, setIsOtpValid] = useState(false);
  const firstInputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const phoneNumber = location.state?.phoneNumber || "";

  useEffect(() => {
    // Set focus on the first OTP input field when the component mounts
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    // Check if OTP is valid (all fields are filled)
    setIsOtpValid(otp.every((digit) => digit !== ""));
  }, [otp]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input field automatically
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const validateOtp = async () => {
    try {
      const otpString = otp.join("");
      const response = await axios.post("http://localhost:5000/validate-otp", {
        phoneNumber: phoneNumber,
        otp: otpString,
      });
      console.log(response);
      if (response) {
        navigate("/home", { state: { phoneNumber: phoneNumber } });
      } else {
        navigate("/error");
      }
    } catch (error) {
      console.error("Error validating OTP:", error);
      navigate("/error");
    }
  };

  const resendOtp = () => {
    setTimer(30);
    // Logic to resend OTP
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="min-h-screen flex md:items-center justify-center w-screen font-poppins">
      <div className="w-full md:max-w-md lg:max-w-lg p-8 bg-white md:rounded-lg shadow-md">
        <h2 className="mb-4 text-xl md:text-lg lg:text-xl font-semibold text-center text-black">
          Verify your details
        </h2>
        <p className="mb-4 text-center text-sm md:text-xl lg:text-xl">
          Enter OTP sent to <span className="text-black">{phoneNumber}</span>{" "}
          via SMS
        </p>
        <div className="flex mb-2 mt-5 justify-center">
          <p className="text-grey font-semibold">Enter OTP</p>
        </div>
        <div className="flex justify-center mb-4 space-x-2">
          {otp.map((value, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              ref={index === 0 ? firstInputRef : null}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-2xl text-center bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
            />
          ))}
        </div>
        <div className="flex justify-between mb-14">
          <span>
            Didn't receive OTP?
            <button
              onClick={resendOtp}
              className={
                timer === 0 ? "text-primary text-lg" : "cursor-not-allowed"
              }
              disabled={timer > 0}
            >
              Resend
            </button>
          </span>
          <span className="text-gray-500">
            00:
            {timer < 10 ? `0${timer}` : timer}
          </span>
        </div>
        <button
          className={`w-full px-4 py-2 text-white rounded-lg transition duration-300 ${
            isOtpValid ? "bg-primary" : "bg-primary opacity-50"
          }`}
          onClick={validateOtp}
          disabled={!isOtpValid}
        >
          Verify & continue
        </button>
      </div>
    </div>
  );
};

export default Otp;

// import { useState, useEffect, useRef } from "react";
// import axios from "../axiosConfig";
// import { useLocation, useNavigate } from "react-router-dom";

// const Otp = () => {
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [timer, setTimer] = useState(30);
//   const [isOtpValid, setIsOtpValid] = useState(false);
//   const firstInputRef = useRef(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const phoneNumber = location.state?.phoneNumber || "";

//   useEffect(() => {
//     if (firstInputRef.current) {
//       firstInputRef.current.focus();
//     }
//   }, []);

//   useEffect(() => {
//     setIsOtpValid(otp.every((digit) => digit !== ""));
//   }, [otp]);

//   const handleChange = (e, index) => {
//     const value = e.target.value;
//     if (/^\d*$/.test(value)) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);

//       if (value && index < otp.length - 1) {
//         e.target.nextElementSibling.focus();
//       } else if (!value && index > 0) {
//         e.target.previousElementSibling.focus();
//       }
//     }
//   };

//   const validateOtp = async () => {
//     try {
//       const otpString = otp.join("");
//       const response = await axios.post("/otp/validate", {
//         phoneNumber,
//         otp: otpString,
//       });
//       if (response.data.success) {
//         localStorage.setItem("token", response.data.token);
//         navigate("/home", { state: { phoneNumber } });
//       } else {
//         navigate("/error");
//       }
//     } catch (error) {
//       console.error("Error validating OTP:", error);
//       navigate("/error");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center font-poppins">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-center text-lg font-semibold mb-6">Enter OTP</h2>
//         <div className="flex justify-center mb-6">
//           {otp.map((digit, index) => (
//             <input
//               key={index}
//               ref={index === 0 ? firstInputRef : null}
//               type="text"
//               value={digit}
//               maxLength="1"
//               onChange={(e) => handleChange(e, index)}
//               className="w-12 h-12 m-1 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//           ))}
//         </div>
//         <button
//           onClick={validateOtp}
//           disabled={!isOtpValid}
//           className="w-full bg-primary text-white p-2 rounded-lg"
//         >
//           Validate
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Otp;
