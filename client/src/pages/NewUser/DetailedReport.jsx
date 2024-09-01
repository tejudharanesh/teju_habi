import React from "react";
import { useLocation } from "react-router-dom";
import PieChart1 from "./PieChart";

function DetailedReport() {
  const location = useLocation();
  const { sump, estimatedCost, floors, floorHeight } = location.state || {};

  // Calculating costs based on estimatedCost
  const designFees = 0.03 * estimatedCost;
  const excavation = 0.03 * estimatedCost;
  const sand = 0.04 * estimatedCost;
  const steelReinforcement = 0.13 * estimatedCost;
  const cement = 0.07 * estimatedCost;
  const solidBlocks = 0.09 * estimatedCost;
  const stones = 0.03 * estimatedCost;
  const rmc = 0.09 * estimatedCost;
  const formwork = 0.03 * estimatedCost;
  const painting = 0.1 * estimatedCost;
  const plumbing = 0.07 * estimatedCost;
  const electricalWork = 0.05 * estimatedCost;
  const exteriorFlooring = 0.05 * estimatedCost;
  const compoundWall = 0.02 * estimatedCost;
  const doorsWindows = 0.03 * estimatedCost;
  const miscellaneous = 0.07 * estimatedCost;
  const internalFlooring = 0.07 * estimatedCost;

  // Calculate Floor Height cost
  var x = 0;

  if (floorHeight == 10) {
    x = 0;
  } else if (floorHeight == 11) {
    x = 8000;
  } else if (floorHeight == 12) {
    x = 16000;
  } else if (floorHeight == 13) {
    x = 24000;
  } else if (floorHeight == 14) {
    x = 32000;
  } else if (floorHeight == 15) {
    x = 40000;
  }
  const floorHeightCost = floorHeight * x * floors;

  // Calculate Sump cost
  const sumpCost = sump * 17;

  // Total Estimated Cost
  const totalEstimatedCost = estimatedCost + floorHeightCost + sumpCost;

  const costs = {
    designFees: 0.03 * estimatedCost,
    excavation: 0.03 * estimatedCost,
    sand: 0.04 * estimatedCost,
    steelReinforcement: 0.13 * estimatedCost,
    cement: 0.07 * estimatedCost,
    solidBlocks: 0.09 * estimatedCost,
    stones: 0.03 * estimatedCost,
    rmc: 0.09 * estimatedCost,
    formwork: 0.03 * estimatedCost,
    painting: 0.1 * estimatedCost,
    plumbing: 0.07 * estimatedCost,
    electricalWork: 0.05 * estimatedCost,
    exteriorFlooring: 0.05 * estimatedCost,
    compoundWall: 0.02 * estimatedCost,
    doorsWindows: 0.03 * estimatedCost,
    miscellaneous: 0.07 * estimatedCost,
    internalFlooring: 0.07 * estimatedCost,
    floorHeightCost: floorHeightCost,
    sumpCost: sumpCost,
  };

  return (
    <div className="bg-slate-500 w-screen h-auto p-2 flex flex-col items-center justify-center">
      <div className="bg-white w-full max-w-lg rounded-2xl border-2 shadow-md mb-3 pb-3">
        <h2 className="text-black font-bold text-2xl mb-6 text-center">
          Cost Breakdown Details
        </h2>

        <div className="bg-white p-4 px-6 rounded-lg mt-4 space-y-2">
          <div className="flex justify-between relative">
            <span className="font-semibold text-gray-700">Design Fees</span>
            <span className="text-gray-700 absolute right-28 md:right-32 ">
              3%
            </span>
            <span className="text-gray-700">₹{designFees.toFixed(2)}</span>
          </div>
          <div className="flex justify-between relative">
            <span className="font-semibold text-gray-700">Excavation</span>
            <span className="text-gray-700 absolute right-28 md:right-32 ">
              3%
            </span>
            <span className="text-gray-700">₹{excavation.toFixed(2)}</span>
          </div>
          <div className="flex justify-between relative">
            <span className="font-semibold text-gray-700">Sand</span>
            <span className="text-gray-700 absolute right-28 md:right-32 ">
              4%
            </span>
            <span className="text-gray-700">₹{sand.toFixed(2)}</span>
          </div>
          <div className="flex justify-between relative">
            <span className="font-semibold text-gray-700">
              Steel Reinforcement
            </span>
            <span className="text-gray-700 absolute right-28 md:right-32 ">
              13%
            </span>
            <span className="text-gray-700">
              ₹{steelReinforcement.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between relative">
            <span className="font-semibold text-gray-700">Cement</span>
            <span className="text-gray-700 absolute right-28 md:right-32 ">
              7%
            </span>
            <span className="text-gray-700">₹{cement.toFixed(2)}</span>
          </div>
          <div className="flex justify-between relative">
            <span className="font-semibold text-gray-700">Solid Blocks</span>
            <span className="text-gray-700 absolute right-28 md:right-32 ">
              9%
            </span>
            <span className="text-gray-700">₹{solidBlocks.toFixed(2)}</span>
          </div>
          <div className="flex justify-between relative">
            <span className="font-semibold text-gray-700">Stones</span>
            <span className="text-gray-700 absolute right-28 md:right-32 ">
              3%
            </span>
            <span className="text-gray-700">₹{stones.toFixed(2)}</span>
          </div>
          <div className="flex justify-between relative">
            <span className="font-semibold text-gray-700">RMC</span>
            <span className="text-gray-700 absolute right-28 md:right-32 ">
              9%
            </span>
            <span className="text-gray-700">₹{rmc.toFixed(2)}</span>
          </div>
          <div className="flex justify-between relative">
            <span className="font-semibold text-gray-700">Formwork</span>
            <span className="text-gray-700 absolute right-28 md:right-32 ">
              3%
            </span>
            <span className="text-gray-700">₹{formwork.toFixed(2)}</span>
          </div>
          <div className="flex justify-between relative">
            <span className="font-semibold text-gray-700">Painting</span>
            <span className="text-gray-700 absolute right-28 md:right-32 ">
              10%
            </span>
            <span className="text-gray-700">₹{painting.toFixed(2)}</span>
          </div>
          <div className="flex justify-between relative">
            <span className="font-semibold text-gray-700">Plumbing</span>
            <span className="text-gray-700 absolute right-28 md:right-32 ">
              7%
            </span>
            <span className="text-gray-700">₹{plumbing.toFixed(2)}</span>
          </div>
          <div className="flex justify-between relative">
            <span className="font-semibold text-gray-700">Electrical Work</span>
            <span className="text-gray-700 absolute right-28 md:right-32 ">
              5%
            </span>
            <span className="text-gray-700">₹{electricalWork.toFixed(2)}</span>
          </div>
          <div className="flex justify-between relative">
            <span className="font-semibold text-gray-700">
              Exterior Flooring
            </span>
            <span className="text-gray-700 absolute right-28 md:right-32 ">
              5%
            </span>
            <span className="text-gray-700">
              ₹{exteriorFlooring.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between relative">
            <span className="font-semibold text-gray-700">Compound Wall</span>
            <span className="text-gray-700 absolute right-28 md:right-32 ">
              2%
            </span>
            <span className="text-gray-700">₹{compoundWall.toFixed(2)}</span>
          </div>
          <div className="flex justify-between relative">
            <span className="font-semibold text-gray-700">Doors & Windows</span>
            <span className="text-gray-700 absolute right-28 md:right-32 ">
              3%
            </span>
            <span className="text-gray-700">₹{doorsWindows.toFixed(2)}</span>
          </div>
          <div className="flex justify-between relative">
            <span className="font-semibold text-gray-700">Miscellaneous</span>
            <span className="text-gray-700 absolute right-28 md:right-32 ">
              7%
            </span>
            <span className="text-gray-700">₹{miscellaneous.toFixed(2)}</span>
          </div>
          <div className="flex justify-between relative">
            <span className="font-semibold text-gray-700">
              Internal Flooring
            </span>
            <span className="text-gray-700 absolute right-28 md:right-32 ">
              7%
            </span>
            <span className="text-gray-700">
              ₹{internalFlooring.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">
              Floor Height Cost
            </span>
            <span className="text-gray-700">₹{floorHeightCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Sump Cost</span>
            <span className="text-gray-700">₹{sumpCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-black">Total Estimated Cost</span>
            <span className="text-black font-bold">
              ₹{totalEstimatedCost.toFixed(2)}
            </span>
          </div>
        </div>
        <br />
        <PieChart1 costs={costs} />
      </div>
    </div>
  );
}

export default DetailedReport;
