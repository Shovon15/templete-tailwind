import React from "react";

const SectionTitle = ({ title, colored }) => {
  return (
    <p className="text-center text-lg p-2 text-gray-400 text-wrap">
      {title}{" "}
      {colored && <span className="text-indigo-700 font-bold">{colored}</span>}
    </p>
  );
};

export default SectionTitle;
