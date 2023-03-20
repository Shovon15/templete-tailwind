import React from "react";

const SectionTitle = ({ title, colored, className }) => {
  return (
    <p
      className={`${className}  text-center text-lg  text-gray-400 text-wrap px-5 py-2`}
    >
      {title}
      {colored && <span className="text-indigo-700 font-bold">{colored}</span>}
    </p>
  );
};

export default SectionTitle;
