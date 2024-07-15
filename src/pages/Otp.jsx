import React, { useState, useEffect, useRef } from 'react';

const Otp = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(30);
    const firstInputRef = useRef(null);

    useEffect(() => {
        // Set focus on the first OTP input field when the component mounts
        if (firstInputRef.current) {
            firstInputRef.current.focus();
        }
    }, []);

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
                <h2 className="mb-4 text-xl lg:text-xl d font-semibold text-center">Verify your details</h2>
                <p className="mb-4 text-center text-sm">Enter OTP sent to +91 9380000839 via SMS</p>
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
                            className="w-12 h-12 text-2xl text-center bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500"
                        />
                    ))}
                </div>
                <div className="flex justify-between mb-14">
                    <span>Didn't receive OTP?  
                        <button   
                            onClick={resendOtp}
                            className={  (timer === 0 ? 'text-blue-500 text-lg':'cursor-not-allowed ')}
                            disabled={timer > 0}
                        >
                            Resend
                        </button>
                    </span>
                    <span className="text-gray-500">00:
                        {timer < 10 ? `0${timer}` : timer}
                    </span>
                </div>
                <button
                    className="w-full px-4 py-2 text-white bg-primary opacity-50 rounded-lg"
                    onClick={() => console.log('OTP:', otp.join(''))}
                >
                    Verify & continue
                </button>
            </div>
        </div>
    );
};

export default Otp;
