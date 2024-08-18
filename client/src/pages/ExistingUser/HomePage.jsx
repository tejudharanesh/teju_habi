import { useState } from "react";
import Page1 from "../../components/Client_homepage/Page1";
import Page2 from "../../components/Client_homepage/Page2";
import Notifications from "../../components/Client_homepage/Notifications";

const HomePage = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const showPopup = () => {
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-background font-poppins w-full">
      <div className="flex flex-col items-center w-full bg-layoutColor shadow h-auto">
        <Page1 showPopup={showPopup} />
      </div>
      <div className="flex flex-col w-full bg-layoutColor shadow h-auto">
        <Page2 />
      </div>
      {isPopupVisible && <Notifications onClose={hidePopup} />}
    </div>
  );
};

export default HomePage;
