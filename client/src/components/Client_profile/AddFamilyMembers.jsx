import React from "react";
import cancel from "../../assets/svg/cancel.svg";

function AddFamilyMembers({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-3 rounded-2xl shadow-lg text-center w-[361px] h-[404px] lg:w-[416px] lg:h-[444px] relative md:ml-48 lg:ml-[]">
        <p className="text-black font-semibold text-lg">
          Invite Family Members
        </p>
        <form className="mt-[40px] space-y-7 w-full px-4 md:px-0">
          <div className="relative mb-5">
            <label className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-grey">
              Name
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
              Phone Number
            </label>
            <input
              type="text"
              name="name"
              placeholder="+91 8431497190"
              className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none"
            />
          </div>
          <div className="relative mb-5 ">
            <label className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-grey">
              Email ID
            </label>
            <input
              type="text"
              name="name"
              placeholder="teju@gmail.com"
              className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none"
            />
          </div>

          <button className="bg-primary w-[308px] h-[51px] rounded-2xl text-white">
            Send Invite
          </button>
        </form>
        <button
          className="absolute top-4 right-4 text-gray-500"
          onClick={onClose}
        >
          <img src={cancel} alt="" />
        </button>
      </div>
    </div>
  );
}

export default AddFamilyMembers;
