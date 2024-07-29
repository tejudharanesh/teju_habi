// src/components/Popup.js
import React from "react";
import { useNavigate } from "react-router-dom";
import cancel from "../assets/svg/cancel.svg";

const Meeting = ({ show, onClose, handleDateTime }) => {
  const navigate = useNavigate();

  if (!show) return null;

  const handleVisitHabi = () => {
    handleDateTime();
  };

  const handleInviteHabi = () => {
    handleDateTime();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-3 rounded-2xl shadow-lg text-center w-[361px] h-[268px] lg:w-[397px] lg:h-[244px] relative md:ml-48 lg:ml-80">
        <p className="mt-[30px] mb-[8px] text-gray-600 text-[12px] lg:text-[14px]">
          Meet our habi's executive at office.
        </p>
        <button
          className="bg-primary1 text-black text-lg h-[61px] rounded-xl mx-auto w-[279px] lg:w-[315px]"
          onClick={handleVisitHabi}
        >
          Visit habi
        </button>
        <p className="mt-[24px] mb-[8px] text-gray-600 text-[12px] lg:text-[14px]">
          An executive from habi will visit your home.
        </p>
        <button
          className=" bg-primary1 text-black text-lg h-[61px] rounded-xl mx-auto w-[279px] lg:w-[315px]"
          onClick={handleInviteHabi}
        >
          Invite habi
        </button>
        <button
          className="absolute top-4 right-4 text-gray-500"
          onClick={onClose}
        >
          <img src={cancel} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Meeting;
