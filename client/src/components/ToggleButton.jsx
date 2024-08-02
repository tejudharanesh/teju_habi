// src/ToggleButton.js
import React from "react";
import arrow from "../assets/svg/arrow.svg";

const ToggleButton = ({ collapsed, toggleSidebar }) => {
  return (
    <div className="relative md:flex mt-10 justify-center h-screen hidden z-10">
      <button
        onClick={toggleSidebar}
        className="absolute left-0 w-8 h-8 bg-white text-black rounded-full border-4 border-gray-200 focus:outline-none transform -translate-x-1/2"
      >
        <img
          src={arrow}
          alt=""
          className={`ml-2 ${collapsed ? "" : "rotate-180"}`}
        />
      </button>
    </div>
  );
};

export default ToggleButton;
