import React from "react";
import home from "../../assets/images/Rectangle 521.png";
import profile from "../../assets/images/profile.png";
import bell from "../../assets/svg/Bell.svg";
import SemiCircularProgressBar from "../../components/SemiCircularProgressBar";
import whatsapp from "../../assets/images/Whatsapp.png";

function Page1() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image with Gradient Overlay */}
      <div
        className="relative inset-0 bg-cover bg-center w-full h-[350px]  rounded-b-[20px] md:rounded-b-[100px]"
        style={{
          backgroundImage: `url(${home})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-b-[20px] md:rounded-b-[100px]"></div>

        {/* Content on top of the image */}

        <div className="absolute -bottom-3 left-10 md:bottom-1 md:left-20 text-white">
          <SemiCircularProgressBar />
        </div>
        <div className="absolute bottom-3 left-48 md:bottom-8 md:left-60 text-white">
          <p className="text-lg font-semibold">PROJECT ID: teju188</p>
          <p className="text-sm">Kodihalli Hosadurga - 577527</p>
        </div>
        <div className="absolute top-3 left-3 md:top-2 md:left-auto md:right-20 flex items-center space-x-2 p-2 rounded-lg">
          <img
            src={profile}
            alt="Profile"
            className="h-[60px] w-[60px] rounded-full"
          />
        </div>
        <div className="absolute top-4 right-4 md:top-4 md:right-40 flex items-center space-x-2 p-2 rounded-lg">
          <div className="flex items-center backdrop-blur-sm rounded-md border-white border-2 px-3 whitespace-nowrap -mr-6 h-[25px]">
            <span className="text-sm text-black">
              Soil Testing is Underway...
            </span>
          </div>
          <div className="w-[40px] h-[40px] z-10 rounded-full bg-white">
            <img
              src={bell}
              alt="Bell Icon"
              className="w-[24px] h-[24px] mx-auto my-2"
            />
          </div>
        </div>
      </div>

      <div className="p-6 md:p-12 bg-gray-50 h-full">
        <div className="text-gray-500 mb-6">25 May 2024</div>

        <div className="flex flex-col md:flex-row">
          {/* Payment and Chat for small screens */}
          <div className="md:hidden flex space-x-6 mb-6">
            <div className="flex-1 bg-white p-4 rounded-lg shadow">
              <button className="text-green-500">
                <img src={whatsapp} alt="" />
              </button>
            </div>
            <div className="flex-1 bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-gray-800">Payment</h3>
              <p className="text-sm text-gray-500">Due on 05 June</p>
              <div className="flex mt-4">
                {/* Payment Bar */}
                {/* Add your custom payment bar here */}
              </div>
            </div>
          </div>

          {/* Left Panel */}
          <div className="flex-1 pr-0 md:pr-10">
            {/* Date and Timeline */}
            <div className="relative pl-6">
              <div className="absolute top-0 left-0 h-full border-l-2 border-gray-300"></div>

              {/* Ongoing Section */}
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                  <span className="ml-3 text-gray-700 font-semibold">
                    ongoing
                  </span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-bold text-gray-800">Soil Testing</h3>
                  <p className="text-sm text-gray-500">initial stage</p>
                  <p className="text-sm text-gray-500">
                    25 May 2024 - 26 May 2024
                  </p>
                  <div className="h-2 bg-gray-200 rounded-full mt-2">
                    <div
                      className="h-2 bg-blue-500 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Upcoming Section */}
              <div className="mb-4">
                <div className="flex items-center mb-4">
                  <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                  <span className="ml-3 text-green-700 font-semibold">
                    upcoming
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold text-gray-800">Slabs</h3>
                    <p className="text-sm text-gray-500">initial stage</p>
                    <p className="text-sm text-gray-500">
                      25 May 2024 - 26 May 2024
                    </p>
                    <div className="h-2 bg-gray-200 rounded-full mt-2"></div>
                  </div>
                  {/* Repeat similar structure for other upcoming items */}
                </div>
              </div>
            </div>
          </div>

          {/* Payment and Chat for medium and larger screens */}
          <div className="hidden md:block md:w-1/3">
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <h3 className="font-bold text-gray-800">Payment</h3>
              <p className="text-sm text-gray-500">Due on 05 June</p>
              <div className="flex mt-4">
                {/* Payment Bar */}
                {/* Add your custom payment bar here */}
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <h3 className="font-bold text-gray-800">
                Chat with our Executive
              </h3>
              <div className="flex items-center mt-4">
                <button className="text-green-500">
                  {/* Add WhatsApp icon here */}
                  <span className="ml-2 text-sm font-semibold">
                    Quick Reply
                  </span>
                </button>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-gray-800">Recent Site Photos</h3>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {/* Add your images here */}
              </div>
              <a href="#" className="text-blue-500 text-sm mt-4 block">
                view more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
