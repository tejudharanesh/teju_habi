import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import youtube from "../assets/svg/youtube.svg";
import Meeting from "../components/Meeting";
import Schedule from "../components/Schedule";
import Page1 from "../components/Homepage/Page1";
import Page2 from "../components/Homepage/Page2";
import HabiFeatures from "../components/Homepage/HabiFeatures";
import dayjs from "dayjs";

import { useState, useEffect } from "react";

function Consultation({}) {
  const [showPopup, setShowPopup] = useState(false);
  const [DateTime, setDateTime] = useState(false);
  const [isPage1, setIsPage1] = useState(true);
  const [selectedDateTime, setSelectedDateTime] = useState({
    date: "",
    time: "",
  });

  useEffect(() => {
    const storedDate = localStorage.getItem("selectedDate");
    const storedTime = localStorage.getItem("selectedTime");

    if (storedDate && storedTime) {
      setSelectedDateTime({
        date: new Date(storedDate),
        time: dayjs(storedTime),
      });
      setIsPage1(false);
    }
  }, []);

  const handlePhysicallyClick = () => {
    setShowPopup(true);
  };

  const handleDateTime = () => {
    setShowPopup(false);
    setDateTime(true);
  };

  const handleBookingConfirmed = (date, time) => {
    const formattedDate = dayjs(date).format("MMMM D, YYYY");
    const formattedTime = time.format("hh:mm A");
    setDateTime(false);
    setIsPage1(false);
    setSelectedDateTime({ date, time });
    setSelectedDateTime({ date: formattedDate, time: formattedTime });
    localStorage.setItem("selectedDate", formattedDate);
    localStorage.setItem("selectedTime", formattedTime);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-background font-poppins w-full">
      <div className="flex flex-col items-center w-full bg-layoutColor shadow p-4 h-auto lg:px-40 mb-3">
        <h1 className="text-[21px] lg:text-[24px] my-4 text-black font-medium">
          Book Free Consultation
        </h1>
        {isPage1 ? (
          <Page1
            handleDateTime={handleDateTime}
            handlePhysicallyClick={handlePhysicallyClick}
          />
        ) : (
          <Page2 selectedDateTime={selectedDateTime} />
        )}
      </div>
      <HabiFeatures />

      <div className="flex flex-col items-center w-full bg-layoutColor shadow p-4 h-auto lg:px-40 ">
        <div className="rounded-xl py-5 w-full">
          <FAQ />
        </div>
      </div>
      <div className="flex flex-col items-center w-full bg-layoutColor shadow p-4 h-auto lg:px-40 mb-3">
        <div className="rounded-xl py-5 w-full">
          <Footer />
        </div>
      </div>
      <Meeting
        show={showPopup}
        onClose={() => setShowPopup(false)}
        handleDateTime={handleDateTime}
      />
      <Schedule
        show={DateTime}
        onClose={() => setDateTime(false)}
        onConfirm={handleBookingConfirmed}
      />
    </div>
  );
}

export default Consultation;
