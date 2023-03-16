import React from "react";
import SectionTitle from "../../../Componants/SectionText/SectionTitle";
import img from "../../../Assets/thinking.svg";
import { AiOutlineArrowRight } from "react-icons/ai";

const Feature = () => {
  return (
    <div className="mx-auto flex flex-col md:flex-row mt-5 md:mt-10">
      <div className="w-full md:w-1/2 ">
        <p className="text-left font-bold px-10 text-indigo-700">DATA DRIVEN</p>
        <p className="font-bold text-4xl px-10 py-5">
          Your entire business, connected and powered by AI
        </p>
        <SectionTitle title="To grow your business on today’s dynamic marketplaces, you need an advantage. With our AI working continually behind the scenes, you can unlock growth opportunities and compete at the highest level 24/7." />
        <div className="mx-10">
          <button
            className="flex items-center bg-indigo-600 text-white py-2 px-6 rounded mx-2 hover:bg-indigo-400 
  duration-500 font-bold"
          >
            Explore more <AiOutlineArrowRight className="mx-2 font-bold" />
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 mx-auto">
        <img className="w-full" src={img} alt="..." />
      </div>
    </div>
  );
};

export default Feature;
