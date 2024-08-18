import React from "react";
import done from "../../assets/images/done.png";
import circle from "../../assets/images/circle.png";

function PaymentBlock({ data, currentStage, stageNumber }) {
  const renderStatus = () => {
    if (currentStage > stageNumber) {
      return (
        <div>
          <div className="absolute top-5 right-11 bg-[#2c9c22] rounded-full">
            <img src={done} alt="done" />
          </div>
          <div className="absolute top-20 right-2">
            <h2 className="bg-layoutColor p-1">{data.date}</h2>
          </div>
        </div>
      );
    } else if (currentStage === stageNumber) {
      return (
        <div className="absolute top-5 right-4 rounded-full">
          <button className="bg-primary text-white p-2 rounded">Pay Now</button>
        </div>
      );
    } else {
      return (
        <div className="absolute top-5 right-11 rounded-full">
          <img src={circle} alt="done" className="h-7 w-7" />
        </div>
      );
    }
  };
  return (
    <div className="relative">
      <div>
        <h3 className="text-lg m-1">Stage 01</h3>
        <p className="text-black font-semibold text-[16px] m-1">
          Acceptance of Proposal
        </p>

        {/* sub lists will be in p tag*/}
        <p className="text-md text-black m-1">01% of Total cost</p>
        <p className="text-gray-400 m-1">1st week</p>
      </div>
      <div className="absolute top-0 right-14 h-full border-l-2  border-black border-dashed"></div>
      {renderStatus()}

      <hr className="border-[1px] mt-5 w-4/6" />
    </div>
  );
}

export default PaymentBlock;
