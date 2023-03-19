import React from "react";

const SectionHeading = ({ title, className }) => {
  return (
    <p
      className={`${className} text-center font-bold text-4xl p-2 text-indigo-700`}
    >
      {title}
    </p>
  );
};

export default SectionHeading;
