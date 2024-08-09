import React from "react";
import whatsapp from "../../assets/images/Whatsapp.png";
import PaymentBar from "./PaymentBar";

function Page2() {
  return (
    <div>
      <div className="md:p-12 bg-gray-50 h-full">
        <div className="text-gray-500 mb-6 ml-3">25 May 2024</div>

        <div className="flex flex-col md:flex-row">
          {/* Payment and Chat for small screens */}
          <div className="flex md:hidden">
            <div className="w-[99px] h-[54px] mr-[16px] border-2 rounded-xl rounded-l-none p-3 pl-8">
              <button className="mx-auto">
                <img src={whatsapp} alt="" />
              </button>
            </div>
            <div className="w-[267px] h-[54px] border-2 flex justify-between items-center rounded-xl p-1">
              <div>
                <p className="text-sm">payment</p>
                <p className="text-sm">Due on 05 May 2024</p>
              </div>
              <div>
                <PaymentBar completed={4} />
              </div>
            </div>
          </div>

          {/* Left Panel */}
          <div className="flex-1 pr-0 md:pr-10 p-4">
            {/* Date and Timeline */}
            <div className="relative pl-">
              <div className="absolute top-0 left-0 h-full border-l-2 border-gray-300"></div>

              {/* Ongoing Section */}
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                  <span className="ml-3 text-gray-700 font-semibold">
                    ongoing
                  </span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-bold text-gray-800">Soil Testing</h3>
                  <p className="text-sm text-gray-500">initial stage</p>
                  <p className="text-sm text-gray-500">
                    25 May 2024 - 26 May 2024
                  </p>
                  <div className="h-2 bg-gray-200 rounded-full mt-2">
                    <div
                      className="h-2 bg-blue-500 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Upcoming Section */}
              <div className="mb-4">
                <div className="flex items-center mb-4">
                  <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                  <span className="ml-3 text-green-700 font-semibold">
                    upcoming
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-bold text-gray-800">Slabs</h3>
                    <p className="text-sm text-gray-500">initial stage</p>
                    <p className="text-sm text-gray-500">
                      25 May 2024 - 26 May 2024
                    </p>
                    <div className="h-2 bg-gray-200 rounded-full mt-2"></div>
                  </div>
                  {/* Repeat similar structure for other upcoming items */}
                </div>
              </div>
            </div>
          </div>

          {/* Payment and Chat for medium and larger screens */}
          <div className="hidden md:block md:w-1/3">
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <h3 className="font-bold text-gray-800">Payment</h3>
              <p className="text-sm text-gray-500">Due on 05 June</p>
              <div className="flex mt-4">
                {/* Payment Bar */}
                {/* Add your custom payment bar here */}
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <h3 className="font-bold text-gray-800">
                Chat with our Executive
              </h3>
              <div className="flex items-center mt-4">
                <button className="text-green-500">
                  {/* Add WhatsApp icon here */}
                  <span className="ml-2 text-sm font-semibold">
                    Quick Reply
                  </span>
                </button>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-gray-800">Recent Site Photos</h3>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {/* Add your images here */}
              </div>
              <a href="#" className="text-blue-500 text-sm mt-4 block">
                view more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
