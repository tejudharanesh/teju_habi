import { Route, Routes } from "react-router-dom";

import React, { useState, useEffect } from "react";
import ToggleButton from "../components/ToggleButton";
import Consultation from "./NewUser/Consultation";
import Navbar from "../components/Navbar";
import CostEstimator from "./CostEstimator";
import Projects from "./Projects";
import Profile from "./Profile";
import HomePage from "./HomePage";
import PaymentsPage from "./PaymentsPage";
import ProjectDetails from "./ProjectDetails";
function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("userType");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

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
          <Route
            path="/"
            element={
              user == "new" ? (
                <Consultation isExpanded={collapsed} />
              ) : (
                <HomePage isExpanded={collapsed} />
              )
            }
          />
          <Route
            path="/packages"
            element={
              user == "new" ? (
                <CostEstimator isExpanded={collapsed} />
              ) : (
                <PaymentsPage isExpanded={collapsed} />
              )
            }
          />
          <Route
            path="/projects"
            element={
              user == "new" ? (
                <Projects isExpanded={collapsed} />
              ) : (
                <ProjectDetails isExpanded={collapsed} />
              )
            }
          />
          <Route
            path="profile"
            element={<Profile isExpanded={collapsed} user={user} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
