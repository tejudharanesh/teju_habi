import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
function HomePage() {
  const [daysLeft, setDaysLeft] = useState(180);

  useEffect(() => {
    const storedDays = localStorage.getItem('daysLeft');
    const storedDate = localStorage.getItem('lastUpdateDate');

    const currentDate = new Date().toISOString().split('T')[0];

    if (storedDays !== null && storedDate === currentDate) {
      setDaysLeft(Number(storedDays));
    } else {
      localStorage.setItem('lastUpdateDate', currentDate);
      localStorage.setItem('daysLeft', daysLeft);
    }

    const interval = setInterval(() => {
      const today = new Date().toISOString().split('T')[0];
      if (localStorage.getItem('lastUpdateDate') !== today) {
        const newDaysLeft = daysLeft - 1;
        setDaysLeft(newDaysLeft);
        localStorage.setItem('daysLeft', newDaysLeft);
        localStorage.setItem('lastUpdateDate', today);
      }
    }, 86400000); // Check once a day

    return () => clearInterval(interval);
  }, [daysLeft]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-bold">25 May 2024</div>
          <div className="flex items-center">
            <i className="bi bi-person-circle text-2xl"></i>
            <div className="ml-2">Soil Testing is Underway...</div>
            <i className="bi bi-bell ml-2 text-2xl"></i>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">{daysLeft}</div>
            <div className="flex-1 ml-2 h-2 bg-gray-300 rounded-full">
              <div className="h-2 bg-gray-700 rounded-full" style={{ width: `${daysLeft / 180 * 100}%` }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="text-lg font-semibold mb-2">Payment</div>
          <div className="flex items-center justify-between">
            <div>Due on 05 June</div>
            <div className="flex items-center space-x-1">
              {[...Array(10)].map((_, index) => (
                <div key={index} className="w-2 h-2 bg-gray-300 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="text-lg font-semibold">Soil Testing</div>
              <div>Started</div>
            </div>
            <div className="text-gray-500">initial stage</div>
            <div className="text-gray-500">25 May 2024 - 26 May 2024</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-gray-700 h-2 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>

          {Array(4).fill(0).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <div className="text-lg font-semibold">Soil Testing</div>
                <div>Yet to begin</div>
              </div>
              <div className="text-gray-500">initial stage</div>
              <div className="text-gray-500">25 May 2024 - 26 May 2024</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2"></div>
            </div>
          ))}
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default HomePage;
