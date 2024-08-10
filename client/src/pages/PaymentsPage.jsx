import React from "react";

const PaymentsPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-start p-2 bg-layoutColor min-h-screen font-poppins">
      <div className="w-full md:w-[30%]">
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
      </div>
    </div>
  );
};

export default PaymentsPage;
