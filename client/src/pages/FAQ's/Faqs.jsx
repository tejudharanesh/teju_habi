import React, { useState } from "react";

function Faqs({ isExpanded }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "Approximately how long does it take to complete the construction of one floor?",
      answer:
        "Yes! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      question:
        "What are the major factors on which house construction cost depends?",
      answer: "Answer to this question goes here.",
    },
    {
      question:
        "What is a super built-up area, built-up area, and carpet area?",
      answer: "Answer to this question goes here.",
    },
    {
      question:
        "What is the estimated time it will take to build a full house?",
      answer: "Answer to this question goes here.",
    },
    {
      question: "Do I have to pay the full amount before the project starts?",
      answer: "Answer to this question goes here.",
    },
    {
      question:
        "What to consider when constructing a home by a builder or constructor?",
      answer: "Answer to this question goes here.",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center bg-background font-poppins w-full">
      <div
        className={`flex flex-col items-center w-full bg-layoutColor shadow h-auto mb-3 ${
          isExpanded ? "md:px-20 lg:px-72" : "md:px-16 lg:px-60"
        }`}
      >
        <div className="max-w-2xl mx-auto p-4">
          <h2 className="text-2xl font-bold text-center mb-4">FAQ's</h2>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search for topics or questions"
              className="w-full p-2 border border-gray-300 rounded-xl bg-inherit"
            />
          </div>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-2">
              <div
                className={`cursor-pointer py-1  text-[16px] lg:text-[18px] ${
                  openIndex === index ? "" : "border-b border-gray-300"
                }`}
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
              </div>
              {openIndex === index && (
                <div className="py-1 border-gray-300">
                  <p className="text-[14px] lg:text-[16px]">{faq.answer}</p>
                  <div className="mt-3 text-gray-600">
                    <p>Was this helpful?</p>
                  </div>
                  <div className="flex">
                    <button className="w-1/2 py-1 border-y border-gray-300">
                      Yes
                    </button>
                    <button className="w-1/2  border border-gray-300 border-r-0">
                      No
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faqs;
