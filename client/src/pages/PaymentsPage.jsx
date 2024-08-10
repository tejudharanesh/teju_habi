import React from "react";

const PaymentsPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-start p-6 bg-gray-100 min-h-screen">
      {/* Left Side - Payment Stages */}
      <div className="w-full md:w-2/3 lg:w-2/3 pr-8">
        <h2 className="text-2xl font-semibold mb-6">Payments</h2>

        <div className="space-y-8">
          {/* Stage 01 */}
          <div>
            <h3 className="text-lg font-bold">Stage 01</h3>
            <p className="text-gray-600 font-semibold">
              Acceptance of Proposal
            </p>
            <p className="text-sm text-gray-500">01% of Total cost</p>
            <p className="text-xs text-gray-400">1st week</p>
          </div>

          {/* Stage 02 */}
          <div>
            <h3 className="text-lg font-bold">Stage 02</h3>
            <p className="text-gray-600 font-semibold">Mobilization Advance</p>
            <p className="text-gray-500">
              a. Site Marking
              <br />
              b. Excavation
              <br />
              c. Foundation
              <br />
              d. Upto Plinth Level
            </p>
            <p className="text-sm text-gray-500">20% of Total cost</p>
            <p className="text-xs text-gray-400">2nd week</p>
          </div>

          {/* Stage 03 */}
          <div>
            <h3 className="text-lg font-bold">Stage 03</h3>
            <p className="text-gray-600 font-semibold">Completion of Slab</p>
            <p className="text-gray-500">
              Ground Floor
              <br />
              First Floor
              <br />
              Second Floor
              <br />
              Third Floor
              <br />
              Fourth Floor
            </p>
            <p className="text-sm text-gray-500">30% of Total cost</p>
            <p className="text-xs text-gray-400">9th - 23rd week</p>
          </div>

          {/* Additional stages will follow the same structure */}
        </div>
      </div>

      {/* Right Side - Payment Summary */}
      <div className="w-full md:w-1/3 lg:w-1/3 bg-white p-6 rounded-xl shadow-lg">
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold">25 May 2024</p>
          <div className="w-4 h-4 bg-green-500 rounded-full mt-2 mb-2"></div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            Pay now
          </button>
          <p className="text-xs text-gray-400 mt-2">Due on 22 June</p>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-center">Payment Summary</h3>
          <div className="flex justify-center items-center mt-4">
            <div className="relative w-24 h-24">
              {/* This would be replaced by a real c hart in production */}
              <div className="w-full h-full rounded-full bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Paid</span>
            </div>
            <div className="flex items-center ml-4">
              <div className="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Unpaid</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;
