import { FaHome, FaUser, FaCog, FaChartBar } from "react-icons/fa";
import { useState } from "react";

const Test = ({ collapsed }) => {
  const [selectedItem, setSelectedItem] = useState("Home");

  const menuItems = [
    { name: "Home", icon: <FaHome /> },
    { name: "Profile", icon: <FaUser /> },
    { name: "Settings", icon: <FaCog /> },
    { name: "Reports", icon: <FaChartBar /> },
  ];

  return (
    <div
      className={`relative flex flex-col h-screen bg-gray-800 text-white transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <nav className="flex-grow relative">
        <ul className="space-y-2 relative">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`flex items-center p-4 hover:bg-gray-700 relative ${
                selectedItem === item.name ? "bg-gray-700" : ""
              }`}
              onClick={() => setSelectedItem(item.name)}
            >
              {selectedItem === item.name && (
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-teal-500"></span>
              )}
              <div className="flex items-center justify-center w-full">
                {item.icon}
                {!collapsed && <span className="ml-4">{item.name}</span>}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Test;
