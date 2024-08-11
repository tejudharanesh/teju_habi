import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import ToggleButton from "../components/ToggleButton";
import Consultation from "./Consultation";
import Navbar from "../components/Navbar";
import CostEstimator from "./CostEstimator";
import Projects from "./Projects";
import Profile from "./Profile";
import HomePage from "./HomePage";
import PaymentsPage from "./PaymentsPage";
import ProjectDetails from "./ProjectDetails";
function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex h-screen">
      <Navbar isExpanded={collapsed} />
      <div className="relative z-9">
        <ToggleButton collapsed={collapsed} toggleSidebar={toggleSidebar} />
      </div>
      <div className="flex-grow z-8">
        <Routes>
          <Route path="/" element={<ProjectDetails isExpanded={collapsed} />} />
          {/* <Route path="/" element={<Consultation isExpanded={collapsed} />} /> */}
          <Route
            path="packages"
            element={<CostEstimator isExpanded={collapsed} />}
          />
          <Route
            path="projects"
            element={<Projects isExpanded={collapsed} />}
          />
          <Route path="profile" element={<Profile isExpanded={collapsed} />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
