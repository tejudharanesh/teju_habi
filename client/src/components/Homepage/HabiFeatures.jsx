import React from "react";
import UniqueDesign from "../../assets/svg/UniqueDesign.svg";
import EfficientPlan from "../../assets/svg/EfficientPlan.svg";
import HomeSafety from "../../assets/svg/HomeSafety.svg";
import Warranty from "../../assets/svg/Guarantee.svg";
import Tracking from "../../assets/svg/Tracking.svg";
import BestPrice from "../../assets/svg/bestPrice.svg";
import Gurantee from "../../assets/svg/Gurantee.svg";
import Structure from "../../assets/svg/Structure.svg";
import Youtube from "../../assets/svg/youtube.svg";

function FeatureItem({ icon, smallText, fullText }) {
  return (
    <div className="flex flex-col items-center justify-center font-poppins">
      <div className="bg-primary rounded-full w-12 h-12 mb-2 flex-center">
        <img className="m-auto" src={icon} alt={fullText} />
      </div>
      <span className="block md:hidden text-xs text-center text-black">
        {smallText[0]}
      </span>
      <span className="block md:hidden text-xs text-center text-black">
        {smallText[1]}
      </span>
      <span className="hidden md:block text-xs text-center text-black">
        {fullText}
      </span>
    </div>
  );
}

function HabiFeatures() {
  const features = [
    {
      icon: UniqueDesign,
      smallText: ["Unique", "Design"],
      fullText: "Unique Design",
    },
    {
      icon: EfficientPlan,
      smallText: ["Efficient", "Planning"],
      fullText: "Efficient Planning",
    },
    {
      icon: HomeSafety,
      smallText: ["Disaster", "Resilient"],
      fullText: "Disaster Resilient",
    },
    {
      icon: Warranty,
      smallText: ["1 Year", "Warranty"],
      fullText: "1 Year Warranty",
    },
    {
      icon: Tracking,
      smallText: ["Project", "Tracking"],
      fullText: "Project Tracking",
    },
    {
      icon: Gurantee,
      smallText: ["50 Year", "Guarantee"],
      fullText: "50 Year Guarantee",
    },
    {
      icon: Structure,
      smallText: ["Structure as", "per NBC"],
      fullText: "Structure as per NBC",
    },
    {
      icon: BestPrice,
      smallText: ["Transparent", "Pricing"],
      fullText: "Transparent Pricing",
    },
  ];

  const thumbnailUrl = `https://img.youtube.com/vi/R3C12M4nG1o/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=R3C12M4nG1o`;

  return (
    <div>
      <div className="flex flex-col items-center w-full bg-layoutColor shadow p-4 h-auto lg:px-40">
        <div className="rounded-xl py-5 w-full">
          <h2 className="text-[16px] md:text-[18px] mb-4 text-center text-black">
            Constructing Dreams with Precision and Care
          </h2>

          <div className="grid grid-cols-4 gap-4 mb-1">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                smallText={feature.smallText}
                fullText={feature.fullText}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full bg-layoutColor shadow h-auto lg:px-40 mb-3">
        <div className="w-full">
          <div className="ml-10">
            <div className="p-2 relative w-[173px] h-[105px] inline-block">
              <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={thumbnailUrl}
                  alt="Responsive"
                  className="w-[250px] h-[150px] md:h-[150px] object-cover rounded-xl"
                />
                <img
                  src={Youtube}
                  alt="YouTube Icon"
                  className="absolute inset-0 m-auto w-7 h-8"
                />
              </a>
            </div>

            <div className="p-2 w-[60%] inline-block">
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
        </div>
      </div>
    </div>
  );
}

export default HabiFeatures;
