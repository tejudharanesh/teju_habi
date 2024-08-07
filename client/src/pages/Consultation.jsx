import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Meeting from "../components/Meeting";
import Schedule from "../components/Schedule";
import Page1 from "../components/Homepage/Page1";
import Page2 from "../components/Homepage/Page2";
import Page3 from "../components/Homepage/Page3";
import Page4 from "../components/Homepage/page4";
import HabiFeatures from "../components/Homepage/HabiFeatures";
import dayjs from "dayjs";

import { useState, useEffect } from "react";

function Consultation({}) {
  const [showPopup, setShowPopup] = useState(false);
  const [DateTime, setDateTime] = useState(false);
  const [isPage1, setIsPage1] = useState(true);
  const [isPage3, setIsPage3] = useState(false);
  const [isPage4, setIsPage4] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState({
    date: "",
    time: "",
  });

  useEffect(() => {
    const storedDate = localStorage.getItem("selectedDate");
    const storedTime = localStorage.getItem("selectedTime");
    const storedOption = localStorage.getItem("selectedOption");

    if (storedDate && storedTime) {
      setSelectedDateTime({
        date: storedDate,
        time: storedTime,
      });
      setIsPage1(false);
      if (storedOption === "visitHabi") {
        setIsPage3(true);
      } else if (storedOption === "inviteHabi") {
        setIsPage4(true);
      } else {
        setIsPage1(false);
      }
    }
  }, []);

  const handlePhysicallyClick = () => {
    setShowPopup(true);
  };

  const handleDateTime = () => {
    setShowPopup(false);
    setDateTime(true);
  };

  const handleVisitHabi = () => {
    setShowPopup(false);
    setDateTime(true);
    setIsPage3(true);
    setIsPage1(false);
    localStorage.setItem("selectedOption", "visitHabi");
  };

  const handleInviteHabi = () => {
    setShowPopup(false);
    setDateTime(true);
    setIsPage4(true);
    setIsPage1(false);
    localStorage.setItem("selectedOption", "inviteHabi");
  };

  const handleBookingConfirmed = (date, time) => {
    const formattedDate = dayjs(date).format("MMMM D, YYYY");
    const formattedTime = dayjs(time).format("hh:mm A");
    setDateTime(false);
    setIsPage1(false);

    setSelectedDateTime({ date: formattedDate, time: formattedTime });
    localStorage.setItem("selectedDate", formattedDate);
    localStorage.setItem("selectedTime", formattedTime);
  };

  const handleScheduleClose = () => {
    setDateTime(false);
    setIsPage1(true);
    setIsPage3(false);
    setIsPage4(false);
    localStorage.removeItem("selectedDate");
    localStorage.removeItem("selectedTime");
    localStorage.removeItem("selectedOption");
  };

  const handleReschedule = () => {
    setIsPage1(true);
    setIsPage3(false);
    setIsPage4(false);
    setSelectedDateTime({ date: "", time: "" });
    localStorage.removeItem("selectedDate");
    localStorage.removeItem("selectedTime");
    localStorage.removeItem("selectedOption");
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
        ) : isPage3 ? (
          <Page3
            selectedDateTime={selectedDateTime}
            onReschedule={handleReschedule}
          />
        ) : isPage4 ? (
          <Page4
            selectedDateTime={selectedDateTime}
            onReschedule={handleReschedule}
          />
        ) : (
          <Page2
            selectedDateTime={selectedDateTime}
            onReschedule={handleReschedule}
          />
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
        handleVisitHabi={handleVisitHabi}
        handleInviteHabi={handleInviteHabi}
      />
      <Schedule
        show={DateTime}
        onClose={handleScheduleClose}
        onConfirm={handleBookingConfirmed}
      />
    </div>
  );
}

export default Consultation;
