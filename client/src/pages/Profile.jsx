import React from "react";
import cover from "../assets/images/cover.png";
import profile from "../assets/images/profile.png";
import edit from "../assets/svg/edit.svg";
import arrow from "../assets/svg/arrow.svg";
import faq from "../assets/svg/FAQ.svg";
import policy from "../assets/svg/policy.svg";
import terms from "../assets/svg/terms.svg";
import habi from "../assets/svg/habi.svg";
import logout from "../assets/svg/Logout.svg";
import Footer from "../components/Footer";

const Profile = ({ isExpanded }) => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-background font-poppins w-full">
      <div
        className={`flex flex-col items-center w-full bg-layoutColor shadow h-auto mb-3 ${
          isExpanded ? "md:px-20 lg:px-72" : "md:px-16 lg:px-60"
        }`}
      >
        <div className="rounded-xl py-4 w-full">
          <div className="relative w-full h-40">
            <p className="text-center text-black font-medium text-[21px] md:text-[24px] mb-3">
              Profile
            </p>
            <img
              src={cover}
              alt="Background"
              className="w-full h-[110px] object-cover md:rounded-lg"
            />
            <div className="absolute -bottom-12 left-4 md:left-0 flex items-center">
              <img
                src={profile}
                alt="Profile"
                className="w-[94px] h-[94px] rounded-full"
              />
            </div>
            <div className="absolute right-3 md:right-0 -bottom-11 flex items-center">
              <button className="bg-primaryO border-2 border-primary text-primary rounded-lg w-[78px] h-[31px]">
                <img src={edit} alt="" className="inline mr-1" />
                Edit
              </button>
            </div>
          </div>
          <form className="mt-[77px] space-y-7 w-full px-4 md:px-0">
            <div className="relative mb-5">
              <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-grey">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Teju"
                className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              />
            </div>
            <div className="relative mb-5">
              <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-grey">
                Phone Number
              </label>
              <input
                type="text"
                name="name"
                placeholder="+91 8431497190"
                className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              />
            </div>
            <div className="relative mb-5">
              <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-grey">
                Email ID
              </label>
              <input
                type="text"
                name="name"
                placeholder="teju@gmail.com"
                className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              />
            </div>
            <div className="relative mb-5">
              <label className="absolute -top-2.5 left-3 bg-layoutColor px-1 text-sm text-grey">
                Site Location Pin code
              </label>
              <input
                type="text"
                name="name"
                placeholder="506103"
                className="text-black block w-full px-3 py-2 border border-gray-300 rounded-xl bg-layoutColor focus:outline-none"
              />
            </div>
          </form>
        </div>
      </div>
      <div
        className={`flex flex-col items-center w-full bg-layoutColor shadow p-2 h-auto mb-3 ${
          isExpanded ? "md:px-20 lg:px-72" : "md:px-16 lg:px-60"
        }`}
      >
        <div className=" rounded-xl py-4 w-full p-1">
          <div className="w-full">
            <ul>
              <li className="flex justify-between items-center py-2">
                <span className="flex items-center">
                  <img src={faq} alt="" />
                  <span className="ml-3.5 text-black text-[16px]">FAQ's</span>
                </span>
                <img src={arrow} className="mr-2 md:mr-0" />
              </li>
              <li className="flex justify-between items-center py-2">
                <span className="flex items-center">
                  <img src={policy} alt="" />
                  <span className="ml-4 text-black text-[16px]">
                    Privacy Policies
                  </span>
                </span>
                <img src={arrow} className="mr-2 md:mr-0" />
              </li>
              <li className="flex justify-between items-center py-2">
                <span className="flex items-center">
                  <img src={terms} alt="" />
                  <span className="ml-3.5 text-black text-[16px]">
                    Terms & conditions
                  </span>
                </span>
                <img src={arrow} className="mr-2 md:mr-0" />
              </li>
              <li className="flex justify-between items-center py-2">
                <span className="flex items-center">
                  <img src={habi} alt="" />
                  <span className="ml-2.5 text-black text-[16px]">
                    habi's story
                  </span>
                </span>
                <img src={arrow} className="mr-2 md:mr-0" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full shadow p-2 h-auto lg:px-32">
        <div className="rounded-xl py-4 w-full">
          <div className=" text-center">
            <button className="bg-layoutColor text-secondary rounded-lg w-[360px] h-[44px] border-2">
              <img src={logout} alt="" className="inline mr-2" />
              Logout
            </button>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Profile;
