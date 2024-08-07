import React from "react";
import UniqueDesign from "../../assets/svg/UniqueDesign.svg";
import EfficientPlan from "../../assets/svg/EfficientPlan.svg";
import homeSafety from "../../assets/svg/HomeSafety.svg";
import Warranty from "../../assets/svg/Guarantee.svg";
import Tracking from "../../assets/svg/Tracking.svg";
import BestPrice from "../../assets/svg/bestPrice.svg";
import Gurantee from "../../assets/svg/Gurantee.svg";
import Structure from "../../assets/svg/Structure.svg";
import youtube from "../../assets/svg/youtube.svg";

function HabiFeatures() {
  const thumbnailUrl = `https://img.youtube.com/vi/R3C12M4nG1o/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=R3C12M4nG1o`;

  return (
    <div>
      <div className="flex flex-col items-center w-full bg-layoutColor shadow p-4 h-auto lg:px-40">
        <div className=" rounded-xl py-5 w-full">
          <h2 className="text-[16px] md:text-[18px]  mb-4 text-center text-black">
            Constructing Dreams with Precision and Care
          </h2>

          <div className="grid grid-cols-4 gap-4 mb-1">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-primary rounded-full w-12 h-12 mb-2 flex-center">
                <img
                  className="m-auto mt-1.5"
                  src={UniqueDesign}
                  alt="Unique Design"
                />
              </div>
              <span className="block md:hidden text-xs md:text-sm text-center text-black">
                Unique
              </span>
              <span className="block md:hidden text-xs md:text-sm text-center text-black">
                Design
              </span>
              <span className="hidden md:block text-xs md:text-sm text-center text-black">
                Unique Design
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary rounded-full w-12 h-12 mb-2 flex-center">
                <img
                  className="m-auto mt-1.5"
                  src={EfficientPlan}
                  alt="Efficient Planning"
                />
              </div>
              <span className="block md:hidden text-xs md:text-sm text-center text-black">
                Efficient
              </span>
              <span className="block md:hidden text-xs md:text-sm text-center text-black">
                Planning
              </span>
              <span className="hidden md:block text-xs md:text-sm text-center text-black">
                Efficient Planning
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary rounded-full w-12 h-12 mb-2 flex-center">
                <img
                  className="m-auto mt-1.5"
                  src={homeSafety}
                  alt="Disaster Resilient"
                />
              </div>
              <span className="block md:hidden text-xs md:text-sm text-center text-black">
                Disaster
              </span>
              <span className="block md:hidden text-xs md:text-sm text-center text-black">
                Resilient
              </span>
              <span className="hidden md:block text-xs md:text-sm text-center text-black">
                Disaster Resilient
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary rounded-full w-12 h-12 mb-2 flex-center">
                <img
                  className="m-auto mt-1.5"
                  src={Warranty}
                  alt="One Year Warranty"
                />
              </div>
              <span className="block md:hidden text-xs md:text-sm text-center text-black">
                1 Year
              </span>
              <span className="block md:hidden text-xs md:text-sm text-center text-black">
                Warranty
              </span>
              <span className="hidden md:block text-xs md:text-sm text-center text-black">
                1 Year Warranty
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary rounded-full w-12 h-12 mb-2 flex-center">
                <img
                  className="m-auto mt-3"
                  src={Tracking}
                  alt="Project Tracking"
                />
              </div>
              <span className="block md:hidden text-xs md:text-sm text-center text-black">
                Project
              </span>
              <span className="block md:hidden text-xs md:text-sm text-center text-black">
                Tracking
              </span>
              <span className="hidden md:block text-xs md:text-sm text-center text-black">
                Project Tracking
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary rounded-full w-12 h-12 mb-2 flex-center">
                <img
                  className="m-auto mt-3"
                  src={Gurantee}
                  alt="50 Year Guarantee"
                />
              </div>
              <span className="block md:hidden text-xs md:text-sm text-center text-black">
                50 Year
              </span>
              <span
                className="block md:hidden text-xs md:text-sm text-center text-black"
                text-black
              >
                Guarantee
              </span>
              <span className="hidden md:block text-xs md:text-sm text-center text-black">
                50 Year Guarantee
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary rounded-full w-12 h-12 mb-2 flex-center">
                <img
                  className="m-auto mt-2"
                  src={Structure}
                  alt="Structure as per NBC"
                />
              </div>
              <span className="block md:hidden text-xs md:text-sm text-center text-black">
                Structure as
              </span>
              <span className="block md:hidden text-xs md:text-sm text-center text-black">
                per NBC
              </span>
              <span className="hidden md:block text-xs md:text-sm text-center text-black">
                Structure as per NCB
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary rounded-full w-12 h-12 mb-2 flex-center">
                <img
                  className="m-auto mt-3"
                  src={BestPrice}
                  alt="Transparent Pricing"
                />
              </div>
              <span className="block md:hidden text-xs md:text-sm text-center text-black">
                Transparent
              </span>
              <span className="block md:hidden text-xs md:text-sm text-center text-black">
                Pricing
              </span>
              <span className="hidden md:block text-xs md:text-sm text-center text-black">
                Transparent Pricing
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full bg-layoutColor shadow h-auto lg:px-40 mb-3">
        <div className=" w-full">
          <div className="flex flex-row ml-10">
            {/* Image Section */}
            <div className="p-2 relative w-auto">
              <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={thumbnailUrl}
                  alt="Responsive"
                  className="w-[250px] h-[150px] md:h-[150px] object-cover rounded-xl"
                />
                <img
                  src={youtube}
                  alt="YouTube Icon"
                  className="absolute inset-0 m-auto w-7 h-8"
                />
              </a>
            </div>
            {/* Content Section */}
            <div className="p-2 w-[50%]">
              <h3 className="text-lg font-semibold text-black">
                habi's Story - Redefines Home Building | habi
              </h3>
              <p className="text-xs">
                “Building Better Homes: Solving Construction Challenges with
                Tech”
                <span className="hidden md:inline">
                  Discover how our startup tackles industry pain points head-on
                  using cutting-edge technology. From streamlining processes to
                  enhancing safety, we’re revolutionizing home building.
                </span>
              </p>
            </div>
          </div>
          {/* kkk */}
        </div>
      </div>
    </div>
  );
}

export default HabiFeatures;
