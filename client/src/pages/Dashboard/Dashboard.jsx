import { Route, Routes } from "react-router-dom";

import React, { useState, useEffect } from "react";
import ToggleButton from "../../components/Navbar/ToggleButton";
import Consultation from "../NewUser/Consultation";
import Navbar from "../../components/Navbar/Navbar";
import CostEstimator from "../NewUser/CostEstimator";
import Projects from "../NewUser/Projects";
import Profile from "../NewUser/Profile";
import HomePage from "../ExistingUser/HomePage";
import PaymentsPage from "../ExistingUser/PaymentsPage";
import ProjectDetails from "../ExistingUser/ProjectDetails";
import Materials from "../ExistingUser/Materials";
import Gallery from "../ExistingUser/Gallery";

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
                <HomePage />
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
          <Route
            path="/materials"
            element={<Materials isExpanded={collapsed} />}
          />
          <Route path="/gallery" element={<Gallery isExpanded={collapsed} />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
