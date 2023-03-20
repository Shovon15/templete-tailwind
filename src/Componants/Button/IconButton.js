import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const IconButton = ({ children, className }) => {
  return (
    <button
      className={`${className} flex items-center justify-center bg-inherite text-indigo-700 dark:text-white font-bold py-2 px-2  rounded  hover:bg-indigo-400 
      duration-500`}
    >
      {children}
      <AiOutlineArrowRight style={{ marginLeft: "1rem", fontSize: "18px" }} />
    </button>
  );
};

export default IconButton;
