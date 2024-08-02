import React from "react";

const StatusTimeline = () => {
  const statusData = [
    {
      title: "Soil Testing",
      stage: "initial stage",
      date: "25 May 2024 - 26 May 2024",
      progress: 70,
      status: "Started",
    },
    {
      title: "Slabs",
      stage: "initial stage",
      date: "25 May 2024 - 26 May 2024",
      progress: 0,
      status: "Yet to begin",
    },
    {
      title: "Foundation",
      stage: "initial stage",
      date: "25 May 2024 - 26 May 2024",
      progress: 0,
      status: "Yet to begin",
    },
    {
      title: "IDK",
      stage: "initial stage",
      date: "25 May 2024 - 26 May 2024",
      progress: 0,
      status: "Yet to begin",
    },
    {
      title: "Stage 06",
      stage: "initial stage",
      date: "25 May 2024 - 26 May 2024",
      progress: 0,
      status: "Yet to begin",
    },
    {
      title: "Stage IDK",
      stage: "initial stage",
      date: "25 May 2024 - 26 May 2024",
      progress: 0,
      status: "Yet to begin",
    },
  ];

  return (
    <div className="p-4">
      <div className="border-l-2 border-gray-200 pl-4">
        {statusData.map((item, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <span className="text-xs">{item.status}</span>
            </div>
            <p className="text-sm">{item.stage}</p>
            <p className="text-xs text-gray-500">{item.date}</p>
            <div className="relative mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
              <span className="absolute right-0 text-xs">{item.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusTimeline;
