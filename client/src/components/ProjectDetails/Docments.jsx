import React from "react";
import pdf from "../../assets/images/pdf.png";
import more from "../../assets/images/option.png";

function Docments() {
  return (
    <div>
      <p>Costing</p>
      <div key="1" className="flex justify-between items-center mr-4">
        <div className="flex items-center space-x-2">
          <p className="text-black text-lg mr-2">1. </p>
          <img src={pdf} alt="pdf icon" />
          <div>
            <p className="text-black text-lg">Tentative Quotation</p>
            <p className="text-gray-400 text-sm">18 July 2024</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          {1 && (
            <button className="bg-primaryO text-primary px-2 rounded-md border-[1px] border-primary mr-2">
              version1
            </button>
          )}
          <img src={more} alt="more" />
        </div>
      </div>
    </div>
  );
}

export default Docments;
