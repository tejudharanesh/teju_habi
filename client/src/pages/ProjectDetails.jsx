import React from "react";
import Docments from "../components/ProjectDetails/Docments";
import Details from "../components/ProjectDetails/Details";
import DVisualize from "../components/ProjectDetails/3DVisualize";
function ProjectDetails({ isExpanded }) {
  return (
    <div className="min-h-screen flex flex-col font-poppins w-full bg-background">
      <Details isExpanded={isExpanded} />
      <div
        className={`flex flex-col w-full bg-layoutColor shadow h-auto p-2 mb-2 ${
          isExpanded
            ? "md:px-20 lg:px-52 xl:px-[300px]"
            : "md:px-16 lg:px-48 xl:px-[300px]"
        }`}
      >
        <header className="text-center m-2 ">
          <h1 className="text-xl font-semibold text-black">Project Details</h1>
        </header>
        <Docments />
      </div>
      <DVisualize />
    </div>
  );
}

export default ProjectDetails;
