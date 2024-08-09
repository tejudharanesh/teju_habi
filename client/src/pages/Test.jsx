import React, { useState, useEffect } from "react";
import home from "../assets/images/Rectangle 521.png";
import profile from "../assets/images/profile.png";
import bell from "../assets/svg/Bell.svg";
import SemiCircularProgressBar from "../components/SemiCircularProgressBar";

const HomePage = ({ isExpanded }) => {
  const statusData = [
    {
      title: "Soil Testing",
      stage: "initial stage",
      date: "25 May 2024 - 26 May 2024",
      progress: 100,
      status: "Started",
    },
    {
      title: "Slabs",
      stage: "initial stage",
      date: "25 May 2024 - 26 May 2024",
      progress: 0,
      status: "Yet to begin",
    },
    {
      title: "Foundation",
      stage: "initial stage",
      date: "25 May 2024 - 26 May 2024",
      progress: 0,
      status: "Yet to begin",
    },
    {
      title: "IDK",
      stage: "initial stage",
      date: "25 May 2024 - 26 May 2024",
      progress: 0,
      status: "Yet to begin",
    },
    {
      title: "Stage 06",
      stage: "initial stage",
      date: "25 May 2024 - 26 May 2024",
      progress: 0,
      status: "Yet to begin",
    },
    {
      title: "Stage IDK",
      stage: "initial stage",
      date: "25 May 2024 - 26 May 2024",
      progress: 0,
      status: "Yet to begin",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-layoutColor font-poppins w-full">
      <main className="flex lg:flex-col">
        <div className=" bg-layoutColor">
          <div
            className="relative"
            style={
              isExpanded
                ? { width: "calc(100vw - 98px)", height: "550px" }
                : { width: "calc(100vw - 217px)", height: "550px" }
            }
          >
            <div
              className="absolute inset-0 bg-cover bg-center rounded-b-[20px] md:rounded-b-[100px]"
              style={{ backgroundImage: `url(${home})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-b-[20px] md:rounded-b-[100px]"></div>
            <div className="absolute -bottom-4 left-10 md:bottom-1 md:left-20 text-white">
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
              <div className="notification flex items-center backdrop-blur-sm rounded-md border-white border-2 px-3 whitespace-nowrap -mr-6 h-[25px]">
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
          <div className="flex justify-between items-center mt-4">
            <span>25 May 2024</span>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <span className="text-sm font-medium">Payment</span>
                <span className="text-xs text-red-500 ml-2">
                  Due on 05 June
                </span>
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

          <div className="p-4">
            <div className="border-l-2 border-gray-200 pl-4">
              {statusData.map((item, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <span className="text-xs">{item.status}</span>
                  </div>
                  <p className="text-sm">{item.stage}</p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                  <div className="relative mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                    <span className="absolute right-0 text-xs">
                      {item.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

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
      </main>
    </div>
  );
};

export default HomePage;
