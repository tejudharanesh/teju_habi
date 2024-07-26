import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/habi_logo.png"; // Import the logo image
import meetIcon from "../assets/svg/meet.svg";
import packagesIcon from "../assets/svg/Packages.svg";
import profileIcon from "../assets/svg/Profile.svg";
import projectsIcon from "../assets/svg/Projects.svg";
import SelectionIndicator from "../components/SelectionIndicator";

const Navbar = ({ isExpanded }) => {
  const [selected, setSelected] = useState("meet");
  // const [isExpanded, setIsExpanded] = useState(true); // State to toggle navbar width

  const buttons = [
    { id: "meet", icon: meetIcon, alt: "Meet us", label: "Meet us", link: "/" },
    {
      id: "packages",
      icon: packagesIcon,
      alt: "Packages",
      label: "Packages",
      link: "packages",
    },
    {
      id: "projects",
      icon: projectsIcon,
      alt: "Projects",
      label: "Projects",
      link: "projects",
    },
    {
      id: "profile",
      icon: profileIcon,
      alt: "Profile",
      label: "Profile",
      link: "profile",
    },
  ];

  return (
    <nav
      className={`fixed bottom-0 left-0 bg-layoutColor md:sticky ${
        isExpanded ? "md:w-[80px]" : "md:w-[180px]" 
      } md:flex-shrink-0 h-14 md:h-auto w-full border-r-2 z-10 md:z-0`}
    >
      <div className="flex flex-col justify-between relative h-auto">
        {/* Logo Image */}
        <div className={`hidden md:flex justify-center px-4 items-center py-4`}>
          <img
            src={logo}
            alt="Logo"
            className={`h-auto ml-3 ${isExpanded ? "w-10" : "w-20"}`}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-around md:items-start m-0 md:m-0 md:flex-col md:justify-start md:space-y-3 w-full">
          {buttons.map((button) => (
            <div key={button.id} className="relative w-full">
              <Link
                to={button.link}
                className={`btn border-none flex flex-col md:flex-row md:items-center md:space-x-3 hover:bg-primaryO w-full ${
                  selected === button.id ? " bg-primaryO" : "bg-inherit"
                }`}
                onClick={() => setSelected(button.id)}
              >
                <img
                  src={button.icon}
                  alt={button.alt}
                  className={`w-6 h-6 ${
                    selected === button.id
                      ? "fill-primary-content"
                      : "text-black"
                  }`}
                />
                <span
                  className={`hidden md:inline ${
                    selected == button.id
                      ? "text-primary font-bold text-lg"
                      : "text-black"
                  }
                  ${isExpanded ? "md:hidden" : ""}`}
                >
                  {button.label}
                </span>
              </Link>
              {selected === button.id && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-teal-500 md:hidden" />
              )}
              <div>{selected === button.id && <SelectionIndicator />}</div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
