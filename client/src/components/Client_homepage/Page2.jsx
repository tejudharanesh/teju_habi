import React from "react";
import whatsapp from "../../assets/images/Whatsapp.png";
import PaymentBar from "./PaymentBar";

function Page2() {
  return (
    <div>
      <div className="md:px-16 bg-layoutColor h-full">
        <div className="text-gray-500 mb-3 ml-3 md:hidden">25 May 2024</div>

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
                <PaymentBar completed={3} />
              </div>
            </div>
          </div>

          {/* Left Panel */}
          <div className="flex-1 pr-3 md:pr-6 pl-4">
            {/* Date and Timeline */}

            <div className="relative">
              <div className="absolute top-0 left-0 h-full border-l-2 border-gray-300"></div>

              {/* Ongoing Section */}
              <div className="mb-10">
                <div>
                  <div className="relative bg-layoutColor p-4 rounded-3xl rounded-tl-none border-2 ">
                    <h3 className="font-bold text-gray-800">Soil Testing</h3>
                    <p className="text-sm text-gray-500">initial stage</p>
                    <p className="text-sm text-gray-500">
                      25 May 2024 - 26 May 2024
                    </p>
                    <div className="h-2 bg-layoutColor rounded-full mt-2">
                      <div
                        className="h-2 bg-blue-500 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                    <div className="flex items-center absolute -top-2 -left-2">
                      <div className="w-5 h-5 bg-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <p className="m-2">Ongoing</p>
                <div className="relative bg-layoutColor p-4 rounded-3xl rounded-tl-none border-2 ">
                  <h3 className="font-bold text-gray-800">Soil Testing</h3>
                  <p className="text-sm text-gray-500">initial stage</p>
                  <p className="text-sm text-gray-500">
                    25 May 2024 - 26 May 2024
                  </p>
                  <div className="h-2 bg-layoutColor rounded-full mt-2">
                    <div
                      className="h-2 bg-blue-500 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <div className="flex items-center absolute -top-2 -left-2">
                    <div className="w-5 h-5 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Upcoming Section */}
            </div>
          </div>

          {/* Payment and Chat for medium and larger screens */}
          <div className="hidden md:block md:w-1/3">
            <div className="w-[267px] h-[54px] border-2 flex justify-between items-center rounded-xl p-1 mb-4">
              <div>
                <p className="text-sm">payment</p>
                <p className="text-sm">Due on 05 May 2024</p>
              </div>
              <div>
                <PaymentBar completed={4} />
              </div>
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
        </div>
      </div>
    </div>
  );
}

export default Page2;
