import React from "react";

const PaymentsPage = () => {
  const paidSegments = 3;
  const totalSegments = 7;
  const segmentAngle = 360 / totalSegments;
  const paidAngle = paidSegments * segmentAngle;
  const unpaidAngle = 360 - paidAngle;
  return (
    <div className="relative flex flex-col md:flex-row items-start p-2 bg-layoutColor min-h-screen font-poppins px-4 md:pl-10 lg:pl-28 xl:pl-60">
      <div className="w-full md:w-[60%] lg:w-[50%]">
        <h2 className="text-2xl font-semibold mb-6 text-center text-black">
          Payments
        </h2>

        <div className="relative">
          <div>
            <h3 className="text-lg m-1">Stage 01</h3>
            <p className="text-black font-semibold text-[16px] m-1">
              Acceptance of Proposal
            </p>
            <p className="text-md text-black m-1">01% of Total cost</p>
            <p className="text-gray-400 m-1">1st week</p>
          </div>
          <div className="absolute top-0 right-14 h-full border-l-2  border-black border-dashed"></div>
          <div className="absolute top-5 right-2">
            <button className="bg-primary text-white w-[94px] h-[41px] rounded-2xl">
              Pay now
            </button>
          </div>
          <div className="absolute top-20 right-2">
            <h2 className="bg-layoutColor p-1">25 May 2024</h2>
          </div>
          <hr className="border-[1px] mt-5 w-4/6" />
        </div>

        <div className="relative">
          <div>
            <h3 className="text-lg m-1">Stage 01</h3>
            <p className="text-black font-semibold text-[16px] m-1">
              Acceptance of Proposal
            </p>
            <p className="text-md text-black m-1">01% of Total cost</p>
            <p className="text-gray-400 m-1">1st week</p>
          </div>
          <div className="absolute top-0 right-14 h-full border-l-2  border-black border-dashed"></div>
          <div className="absolute top-5 right-2">
            <button className="bg-primary text-white w-[94px] h-[41px] rounded-2xl">
              Pay now
            </button>
          </div>
          <div className="absolute top-20 right-2">
            <h2 className="bg-layoutColor p-1">25 May 2024</h2>
          </div>
          <hr className="border-[1px] mt-5 w-4/6" />
        </div>
      </div>
      <div className="absolute hidden md:inline w-48 h-60 bg-layoutColor rounded-lg border-2 items-center top-20 right-[3%] lg:right-[10%] xl:right-[20%]">
        <h2 className="text-gray-800 font-semibold m-4 text-center">
          Payment Summary
        </h2>
        <div className="relative w-32 h-32 flex items-center justify-center mx-auto">
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `conic-gradient(#0FB4C3 ${paidAngle}deg, #e5e7eb 0deg 360deg)`,
            }}
          ></div>
          <div className="absolute w-24 h-24 bg-layoutColor rounded-full"></div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="flex items-center mx-2">
            <span className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></span>
            <span className="text-gray-700 text-sm">Paid</span>
          </div>
          <div className="flex items-center mx-2">
            <span className="w-3 h-3 bg-gray-200 rounded-full mr-2"></span>
            <span className="text-gray-700 text-sm">Unpaid</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;
