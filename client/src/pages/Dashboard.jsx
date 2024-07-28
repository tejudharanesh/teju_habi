// import React from "react";
import { Route, Routes } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Consultation from "./Consultation";
// import CostCalculator from "./CostEstimator";

// const Dashboard = () => {
//   return (
//     <div className="flex md:flex-row flex-col-reverse">
//       <Navbar />
//       <div className="flex-grow">
//         <Routes>
//           <Route path="/" element={<Consultation />} />
//           <Route path="packages" element={<CostCalculator />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import ToggleButton from "../components/ToggleButton";
import Consultation from "./Consultation";
import Navbar from "../components/Navbar";
import CostEstimator from "./CostEstimator";
import ProjectsPage from "./Projects";
import Profile from "./Profile";
function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex h-screen">
      <Navbar isExpanded={collapsed} />
      <div className="relative">
        <ToggleButton collapsed={collapsed} toggleSidebar={toggleSidebar} />
      </div>
      <Routes>
        <Route path="/" element={<Consultation />} />
        <Route path="packages" element={<CostEstimator />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
