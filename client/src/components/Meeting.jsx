// src/components/Popup.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Meeting = ({ show, onClose }) => {
  const navigate = useNavigate();

  if (!show) return null;

  const handleVisitHabi = () => {
    navigate(""); //redirect here
  };

  const handleInviteHabi = () => {
    navigate("/"); //redirect here
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-3 rounded-2xl shadow-lg text-center w-[361px] h-[244px] lg:w-[397px] lg:h-[244px] relative">
        <p className="mb-4 text-gray-600 text-[12px] lg:text-[14px]">
          Meet our habi's executive at office.
        </p>
        <button
          className="bg-primary1 text-black text-lg h-[61px] px-4 rounded-xl mb-4 mx-auto w-[279px] lg:w-[315px]"
          onClick={handleVisitHabi}
        >
          Visit habi
        </button>
        <p className="mb-4 text-gray-600 text-[12px] lg:text-[14px]">
          A executive from our habi will be visit your home.
        </p>
        <button
          className="bg-primary1 text-black text-lg h-[61px] px-4 rounded-xl mx-auto w-[279px] lg:w-[315px]"
          onClick={handleInviteHabi}
        >
          Invite habi
        </button>
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Meeting;
