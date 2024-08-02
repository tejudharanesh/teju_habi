import React from "react";
import home from "../assets/images/Rectangle 521.png";

const ProjectDetails = () => {
  return (
    <div className="p-2">
      <div className="relative">
        <img
          src={home}
          alt="Project"
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-lg font-semibold">PROJECT ID: RABE0001</p>
          <p className="text-sm">Banashankari, Bengaluru - 560109</p>
        </div>
        <div className="absolute top-4 right-4 flex items-center space-x-2 bg-gray-800 bg-opacity-50 p-2 rounded-lg">
          <img
            src="profile.jpg"
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <span>Soil Testing is Underway...</span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span>25 May 2024</span>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="text-sm font-medium">Payment</span>
            <span className="text-xs text-red-500 ml-2">Due on 05 June</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
