import React from "react";
import rupee from "../../assets/images/rupee.png";
import arrow from "../../assets/svg/arrow.svg";

function OnePercent() {
  return (
    <div className="flex flex-col items-center w-full bg-layoutColor shadow p-4 h-auto md:px-10 lg:px-40 mb-2">
      <div className="rounded-xl w-full px- py-1">
        <div className="flex justify-between items-center py-2">
          <span className="flex items-center">
            <img src={rupee} alt="" />
            <span className="ml-3.5 text-black text-[16px]">
              Pay the 1% token Amount to proceed
            </span>
          </span>
          <button>
            <img src={arrow} className="md:mr-0" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OnePercent;
