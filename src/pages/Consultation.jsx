import UniqueDesign from "../assets/svg/UniqueDesign.svg";
import EfficientPlan from "../assets/svg/EfficientPlan.svg";
import homeSafety from "../assets/svg/HomeSafety.svg";
import Warranty from "../assets/svg/Guarantee.svg";
import React from "react";

function Consultation() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 font-poppins p-4">
      <div className="flex flex-col items-center w-full md:w-1/2 bg-white rounded-lg shadow p-4">
        <h1 className="text-2xl font-semibold my-4 text-black">
          Book Free Consultation
        </h1>

        <h2 className="text-xl font-semibold mb-4">Connect with Us!</h2>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <button className="bg-primary opacity-50 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0 w-full md:w-auto">
            Virtually
          </button>
          <button className="bg-primary opacity-50 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto">
            Physically
          </button>
        </div>
      </div>

      <section className="w-full md:w-1/2 mt-6 bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4">
          Constructing Dreams with Precision and Care
        </h2>
        <div className="flex flex-wrap justify-around mb-4">
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="bg-primary  rounded-full w-12 h-12 mb-2">
              <img className="m-auto mt-1.5" src={UniqueDesign} alt="" />
            </div>
            <span className="block lg:hidden">Unique</span>
            <span className="block lg:hidden">Design</span>
            <span className="hidden lg:block">Unique Design</span>
          </div>
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="bg-primary rounded-full w-12 h-12 mb-2">
              <img className="m-auto mt-1.5" src={EfficientPlan} alt="" />
            </div>
            <span className="block lg:hidden">Efficient</span>
            <span className="block lg:hidden">Planning</span>
            <span className="hidden lg:block">Efficient Planning</span>
          </div>
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="bg-primary rounded-full w-12 h-12 mb-2">
              <img className="m-auto mt-1.5" src={homeSafety} alt="" />
            </div>
            <span className="block lg:hidden">Disaster</span>
            <span className="block lg:hidden">Resilient</span>
            <span className="hidden lg:block">Disaster Resilient</span>
          </div>
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="bg-primary rounded-full w-12 h-12 mb-2">
              <img className="m-auto mt-1.5" src={Warranty} alt="" />
            </div>
            <span className="block lg:hidden">one year</span>
            <span className="block lg:hidden">Warranty</span>
            <span className="hidden lg:block">One year Warranty</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-gray-300 w-16 h-16 rounded mr-4"></div>
          <div>
            <h3 className="text-lg font-semibold">
              habi's Story - Redefines Home Building | habi
            </h3>
            <p>
              Building Better Homes: Solving Construction Challenges with Tech.
              Discover how ...
            </p>
          </div>
        </div>
      </section>

      <section className="w-full md:w-1/2 mt-6 bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Testimonials</h2>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center mb-4">
            <div className="bg-gray-300 w-16 h-16 rounded mr-4"></div>
            <div>
              <h3 className="text-lg font-semibold">Mr. Raghu & Family</h3>
              <p>
                Our journey with habi was exceptional. They not only brought our
                dream ...
              </p>
              <div className="flex">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Consultation;
