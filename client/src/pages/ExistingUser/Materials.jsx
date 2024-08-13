import React from "react";
import steel from "../../assets/images/steel.png";

function Materials() {
  const isExpanded = true;
  return (
    <div className="min-h-screen flex flex-col font-poppins w-full bg-background h-auto">
      <div
        className={`flex flex-col w-full bg-layoutColor shadow h-auto p-2 mb-2 ${
          isExpanded
            ? "md:px-20 lg:px-52 xl:px-[300px]"
            : "md:px-16 lg:px-48 xl:px-[300px]"
        }`}
      >
        <header className="text-center m-2 ">
          <h1 className="text-xl font-semibold text-black">materials</h1>
        </header>
        <div>
          <div className="p-2">
            <div className="inline-block mr-4">
              <img src={steel} alt="" />
            </div>
            <div className="inline-block">
              <p className="font-semibold">TATA Steel</p>
              <p className="text-sm text-gray-400  ">
                brand TATA, diameter: 32 mm & above
              </p>
              <p className="text-sm text-gray-400  ">
                single piece 12 meter...
              </p>
            </div>
            <hr className="mt-2" />
          </div>
          <div className="p-2">
            <div className="inline-block mr-4">
              <img src={steel} alt="" />
            </div>
            <div className="inline-block">
              <p className="font-semibold">TATA Steel</p>
              <p className="text-sm text-gray-400  ">
                brand TATA, diameter: 32 mm & above
              </p>
              <p className="text-sm text-gray-400  ">
                single piece 12 meter...
              </p>
            </div>
            <hr className="mt-2" />
          </div>
          <div className="p-2">
            <div className="inline-block mr-4">
              <img src={steel} alt="" />
            </div>
            <div className="inline-block">
              <p className="font-semibold">TATA Steel</p>
              <p className="text-sm text-gray-400  ">
                brand TATA, diameter: 32 mm & above
              </p>
              <p className="text-sm text-gray-400  ">
                single piece 12 meter...
              </p>
            </div>
            <hr className="mt-2" />
          </div>
          <div className="p-2">
            <div className="inline-block mr-4">
              <img src={steel} alt="" />
            </div>
            <div className="inline-block">
              <p className="font-semibold">TATA Steel</p>
              <p className="text-sm text-gray-400  ">
                brand TATA, diameter: 32 mm & above
              </p>
              <p className="text-sm text-gray-400  ">
                single piece 12 meter...
              </p>
            </div>
            <hr className="mt-2" />
          </div>
          <div className="p-2">
            <div className="inline-block mr-4">
              <img src={steel} alt="" />
            </div>
            <div className="inline-block">
              <p className="font-semibold">TATA Steel</p>
              <p className="text-sm text-gray-400  ">
                brand TATA, diameter: 32 mm & above
              </p>
              <p className="text-sm text-gray-400  ">
                single piece 12 meter...
              </p>
            </div>
            <hr className="mt-2" />
          </div>
          <div className="p-2">
            <div className="inline-block mr-4">
              <img src={steel} alt="" />
            </div>
            <div className="inline-block">
              <p className="font-semibold">TATA Steel</p>
              <p className="text-sm text-gray-400  ">
                brand TATA, diameter: 32 mm & above
              </p>
              <p className="text-sm text-gray-400  ">
                single piece 12 meter...
              </p>
            </div>
            <hr className="mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Materials;
