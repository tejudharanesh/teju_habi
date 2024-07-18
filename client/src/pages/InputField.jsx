import React from 'react';

const InputField = () => {
  return (
    <div className="relative mb-4">
      <label className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-700">
        First name
      </label>
      <input
        type="text"
        placeholder="Alfred"
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
      />
      <span className="absolute right-3 top-2/4 transform -translate-y-2/4 text-green-500">✔</span>
    </div>
  );
};

export default InputField;