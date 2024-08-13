import React from "react";
import site from "../../assets/images/site.png";
import { useNavigate } from "react-router-dom";

function Gallery({ isExpanded }) {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate("/dashboard/gallery");
  };

  return (
    <div
      className={`flex flex-col w-full bg-layoutColor shadow h-auto p-2 mb-2 ${
        isExpanded
          ? "md:px-20 lg:px-52 xl:px-[300px]"
          : "md:px-16 lg:px-48 xl:px-[300px]"
      }`}
    >
      <header className="text-center m-2 relative">
        <p className="text-xl font-semibold text-black inline-block">Gallery</p>
      </header>
      <div className="grid grid-cols-4 justify-around items-center">
        <img
          src={site}
          alt="Site Photo 1"
          className="w-[78px] md:w-[100px] h-[75px] object-cover rounded-lg"
        />
        <img
          src={site}
          alt="Site Photo 1"
          className="w-[78px] md:w-[100px] h-[75px] object-cover rounded-lg "
        />
        <img
          src={site}
          alt="Site Photo 1"
          className="w-[78px] md:w-[100px] h-[75px] object-cover rounded-lg"
        />
        <button onClick={onButtonClick}>
          <img
            src={site}
            alt="Site Photo 1"
            className="w-[78px] md:w-[100px] h-[75px] object-cover rounded-lg"
          />
        </button>
      </div>
    </div>
  );
}

export default Gallery;
