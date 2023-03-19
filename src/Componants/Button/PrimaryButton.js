import React from "react";

const PrimaryButton = ({ children, className }) => {
  return (
    <button
      className={`${className} bg-indigo-600 text-white py-2 px-6 rounded mx-2 hover:bg-indigo-400 
  duration-500`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

// btn border-cyan-700 hover:border-cyan-700 bg-cyan-700  hover:bg-white hover:text-cyan-700 px-12
