// Login.jsx
import React from 'react';
import Gallery from '../assets/svg/Gallery.svg'


const CompleteProfile = () => {
  return (
    <div className="min-h-screen flex justify-center w-screen font-poppins">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-lg font-semibold mb-6">Complete Your Profile</h2>
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center border border-primary">
            <span className="text-gray-400 text-5xl">
              <img src={Gallery} alt="Pic" />
            </span>
          </div>
        </div>
        <form>
          <div className="relative mb-5">
            <label className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-grey">
              Name
            </label>
            <input
              type="text"
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
              placeholder=""
              value="8431497190"
              className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none"
           />
          </div>
          <div className="relative mb-5">
            <label className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-grey">
              Email ID
            </label>
            <input
              type="text"
              placeholder=""
              className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none"
           />
          </div>
          <div className="relative mb-5">
            <label className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-grey">
              Current Address
            </label>
            <textarea
              rows="3"
              placeholder=""
              className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none"
           ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary opacity-50 text-white p-2 rounded-xl hover:bg-primary  mt-20 md:mt-3"
          >
            Complete
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfile;
