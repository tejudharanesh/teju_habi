import React from "react";
import home from "../../assets/images/Rectangle 521.png";
import profile from "../../assets/images/profile.png";
import bell from "../../assets/svg/Bell.svg";
import SemiCircularProgressBar from "../../components/SemiCircularProgressBar";

function Page1() {
  return (
    <div className="relative w-full">
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
    </div>
  );
}

export default Page1;
