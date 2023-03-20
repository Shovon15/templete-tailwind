import React from "react";
import SectionTitle from "../../../Componants/SectionText/SectionTitle";
import img from "../../../Assets/thinking.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import IconButton from "../../../Componants/Button/IconButton";
import SectionHeading from "../../../Componants/SectionText/SectionHeading";

const Feature = () => {
  return (
    <div className="mx-5 md:mx-10 flex flex-col md:flex-row mt-5 md:mt-10">
      <div className="w-full md:w-1/2 ">
        <p className="text-left font-bold px-10 text-indigo-700">DATA DRIVEN</p>
        <SectionHeading
          className="text-start"
          title="Your entire business, connected and powered by AI"
        />

        <SectionTitle
          className="text-start"
          title="To grow your business on today’s dynamic marketplaces, you need an advantage. With our AI working continually behind the scenes, you can unlock growth opportunities and compete at the highest level 24/7."
        />

        <div className="mx-5">
          <IconButton>Explore more</IconButton>
        </div>
      </div>
      <div className="w-full md:w-1/2 mx-auto">
        <img className="w-full" src={img} alt="..." />
      </div>
    </div>
  );
};

export default Feature;
