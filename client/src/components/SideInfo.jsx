import React from "react";

const SideInfo = () => {
  return (
    <div className="hidden lg:block p-4">
      <div className="flex justify-between items-center mb-4">
        <span>25 May 2024</span>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Payment</span>
          <span className="text-xs text-red-500 ml-2">Due on 05 June</span>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span>Chat with our Executive</span>
        <button className="bg-green-500 text-white py-1 px-3 rounded-lg">
          Quick Reply
        </button>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Recent Site Photos</h3>
        <div className="grid grid-cols-2 gap-2">
          <img
            src="photo1.jpg"
            alt="Site Photo 1"
            className="w-full h-20 object-cover rounded-lg"
          />
          <img
            src="photo2.jpg"
            alt="Site Photo 2"
            className="w-full h-20 object-cover rounded-lg"
          />
          <img
            src="photo3.jpg"
            alt="Site Photo 3"
            className="w-full h-20 object-cover rounded-lg"
          />
          <img
            src="photo4.jpg"
            alt="Site Photo 4"
            className="w-full h-20 object-cover rounded-lg"
          />
        </div>
        <button className="text-blue-500 mt-2">view more &gt;</button>
      </div>
    </div>
  );
};

export default SideInfo;
