import React, { useState, useEffect } from "react";
import site from "../../assets/images/site.png";

function Gallery({ isExpanded }) {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Mock fetching data from backend
    const fetchGalleryData = async () => {
      // Replace with actual API call
      const data = [
        {
          heading: "Soil testing - 25 May 2024",
          images: [site, site, site],
        },
        {
          heading: "Flooring - 30 May 2024",
          images: [site, site],
        },
      ];
      setGalleryData(data);
    };

    fetchGalleryData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-poppins w-full bg-background h-auto">
      <div
        className={`flex flex-col w-full bg-layoutColor  h-auto p-2 ${
          isExpanded
            ? "md:px-20 lg:px-52 xl:px-[300px]"
            : "md:px-16 lg:px-48 xl:px-[300px]"
        }`}
      >
        <header className="text-center  m-2">
          <h1 className="text-black font-semibold text-lg">Gallery</h1>
        </header>
      </div>

      {galleryData.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col w-full bg-layoutColor shadow h-auto p-2 ${
            isExpanded
              ? "md:px-20 lg:px-52 xl:px-[300px]"
              : "md:px-16 lg:px-48 xl:px-[300px]"
          }`}
        >
          <header className="text-sm m-2 ">
            <p className="text-black">{section.heading}</p>
          </header>

          <div className="grid grid-cols-4 gap-4 justify-around items-center">
            {section.images.map((image, imgIndex) => (
              <img
                key={imgIndex}
                src={image}
                alt={`Site Photo ${imgIndex + 1}`}
                className="w-[78px] md:w-[100px] h-[75px] object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
