import React from "react";

function PaymentBar({ completed }) {
  const totalSegments = 7; // Assuming the bar has 6 segments
  return (
    <div className="flex space-x-2">
      {Array.from({ length: totalSegments }).map((_, index) => (
        <div
          key={index}
          className={`w-2 h-6 ${
            index < completed ? "bg-primary" : "bg-background"
          }`}
        ></div>
      ))}
    </div>
  );
}

export default PaymentBar;
