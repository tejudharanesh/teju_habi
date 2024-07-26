import React from "react";

const CostCalculator = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-6 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-md font-bold text-black">
            House Construction Cost Calculator
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative mb-5">
                <label className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-grey">
                  Area Sq.Feet*
                </label>
                <input
                  type="text"
                  name="name"
                  className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none"
                />
              </div>
              <div className="relative mb-5">
                <label className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-grey">
                  No of Floors*
                </label>
                <input
                  type="text"
                  name="name"
                  className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative mb-5">
                <label className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-grey">
                  Site Pin code
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Teju"
                  className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none"
                />
              </div>
              <div className="relative mb-5">
                <label className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-grey">
                  No of Cars
                </label>
                <input
                  type="number"
                  name="name"
                  placeholder="00"
                  className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary opacity-50"
            >
              Estimate cost 
            </button>
          </div>
        </form>
        <div className="mt-6">
          <h3 className="text-center text-xl font-bold text-gray-900">
            Packages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {[
              {
                price: "₹ 1850/ Sq. Feet",
                name: "Essential",
                description: "structure + civil",
              },
              {
                price: "₹ 2100/ Sq. Feet",
                name: "Classic",
                description: "structure + civil",
              },
              {
                price: "₹ 2400/ Sq. Feet",
                name: "Classic Plus",
                description: "structure + civil + Interiors",
              },
              {
                price: "₹ 2510/ Sq. Feet",
                name: "Premium",
                description: "structure + civil",
              },
              {
                price: "₹ 2900/ Sq. Feet",
                name: "Premium Plus",
                description: "structure + civil + Interiors",
              },
              {
                price: "₹ 3215/ Sq. Feet",
                name: "Luxury",
                description: "structure + civil + Interiors",
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-md text-center bg-white"
              >
                <h4 className="text-md font-semibold">{pkg.price}</h4>
                <p className="text-sm text-gray-500">{pkg.name}</p>
                <p className="text-sm text-gray-400">{pkg.description}</p>
                <button className="mt-4 text-teal-600 hover:text-teal-800">
                  Click to view
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;
