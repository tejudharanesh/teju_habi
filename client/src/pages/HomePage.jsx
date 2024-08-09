import React, { useState, useEffect } from "react";
import Page1 from "../components/Client_homepage/Page1";
import Page2 from "../components/Client_homepage/Page2";

const HomePage = ({ isExpanded }) => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-background font-poppins w-full">
      <div className="flex flex-col items-center w-full bg-layoutColor shadow h-auto">
        <Page1 />
      </div>
      <div className="flex flex-col w-full bg-layoutColor shadow h-auto">
        <Page2 />
      </div>
    </div>
  );
};

export default HomePage;
