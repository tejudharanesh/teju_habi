import UniqueDesign from "../assets/svg/UniqueDesign.svg";
import EfficientPlan from "../assets/svg/EfficientPlan.svg";
import homeSafety from "../assets/svg/HomeSafety.svg";
import Warranty from "../assets/svg/Guarantee.svg";
import Tracking from "../assets/svg/Tracking.svg";
import BestPrice from "../assets/svg/bestPrice.svg";
import Gurantee from "../assets/svg/Gurantee.svg";
import Structure from "../assets/svg/Structure.svg";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import youtube from "../assets/svg/youtube.svg";
import Meeting from "../components/Meeting";
import Schedule from "../components/Schedule";

import { useState } from "react";

const thumbnailUrl = `https://img.youtube.com/vi/R3C12M4nG1o/hqdefault.jpg`;
const videoUrl = `https://www.youtube.com/watch?v=R3C12M4nG1o`;

function Consultation({ isExpanded }) {
  const [showPopup, setShowPopup] = useState(false);
  const [DateTime, setDateTime] = useState(false);

  const handlePhysicallyClick = () => {
    setShowPopup(true);
  };

  const handleDateTime = () => {
    setShowPopup(false);
    setDateTime(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-background font-poppins w-full">
      <div
        className={`flex flex-col items-center w-full bg-layoutColor shadow ${
          isExpanded ? "md:pl-0" : "md:pl-5"
        } p-4`}
      >
        <h1 className="text-[21px] lg:text-[24px] my-4 text-black font-medium">
          Book Free Consultation
        </h1>
        <div className="border-2 rounded-xl px-6 py-5 w-full">
          <h2 className="text-[16px] lg:text-[18px] font-medium mb-3 text-center text-black">
            Connect with Us!
          </h2>
          <div className="flex flex-col justify-center items-center md:flex-row md:space-x-4 lg:space-x-1">
            <button
              className="bg-primary1 text-black py-3 px-4 rounded-lg mb-2 md:mb-0 w-[275px] h-[58px] md:mr-[16px] lg:mr-[74px]"
              onClick={handleDateTime}
            >
              Virtually
            </button>
            <button
              className="bg-primary1 text-black py-3 px-4 rounded-lg w-[275px] h-[58px]"
              onClick={handlePhysicallyClick}
            >
              Physically
            </button>
          </div>
        </div>
      </div>
      <section className="w-full mt-4 bg-layoutColor shadow md:px-[60px] lg:px-[220px] p-4">
        <h2 className="text-lg font-semibold mb-4 text-center text-black">
          Constructing Dreams with Precision and Care
        </h2>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-primary rounded-full w-12 h-12 mb-2 flex-center">
              <img
                className="m-auto mt-1.5"
                src={UniqueDesign}
                alt="Unique Design"
              />
            </div>
            <span className="block md:hidden text-xs text-center">Unique</span>
            <span className="block md:hidden text-xs text-center">Design</span>
            <span className="hidden md:block text-xs text-center">
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
            <span className="block md:hidden text-xs text-center">
              Efficient
            </span>
            <span className="block md:hidden text-xs text-center">
              Planning
            </span>
            <span className="hidden md:block text-xs text-center">
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
            <span className="block md:hidden text-xs text-center">
              Disaster
            </span>
            <span className="block md:hidden text-xs text-center">
              Resilient
            </span>
            <span className="hidden md:block text-xs text-center">
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
            <span className="block md:hidden text-xs text-center">1 Year</span>
            <span className="block md:hidden text-xs text-center">
              Warranty
            </span>
            <span className="hidden md:block text-xs text-center">
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
            <span className="block md:hidden text-xs text-center">Project</span>
            <span className="block md:hidden text-xs text-center">
              Tracking
            </span>
            <span className="hidden md:block text-xs text-center">
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
            <span className="block md:hidden text-xs text-center">50 Year</span>
            <span className="block md:hidden text-xs text-center">
              Guarantee
            </span>
            <span className="hidden md:block text-xs text-center">
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
            <span className="block md:hidden text-xs text-center">
              Structure as
            </span>
            <span className="block md:hidden text-xs text-center">per NBC</span>
            <span className="hidden md:block text-xs text-center">
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
            <span className="block md:hidden text-xs text-center">
              Transparent
            </span>
            <span className="block md:hidden text-xs text-center">Pricing</span>
            <span className="hidden md:block text-xs text-center">
              Transparent Pricing
            </span>
          </div>
        </div>

        <div className="flex items-center ml-2 w-auto">
          <div className="relative mr-2">
            <a href={videoUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={thumbnailUrl}
                alt="YouTube Video Thumbnail"
                className="rounded-lg w-96 h-28 md:w-68 md:h-28 lg:w-60 lg:h-34"
              />
              <img
                src={youtube} // Replace with the path to your YouTube icon
                alt="YouTube Icon"
                className="absolute inset-0 m-auto w-7 h-8"
              />
            </a>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black">
              habi's Story - Redefines Home Building | habi
            </h3>
            <p className="text-xs">
              “Building Better Homes: Solving Construction Challenges with Tech”
              Discover how...
            </p>
          </div>
        </div>
      </section>
      <section className="w-full mt-4 bg-layoutColor shadow  md:px-[60px] lg:px-[220px] p-4">
        <FAQ />
      </section>
      <section className="w-full bg-layoutColor shadow md:px-[60px] lg:px-[220px] p-4">
        <Footer />
      </section>
      <Meeting
        show={showPopup}
        onClose={() => setShowPopup(false)}
        handleDateTime={handleDateTime}
      />
      <Schedule show={DateTime} onClose={() => setDateTime(false)} />
    </div>
  );
}

export default Consultation;
