import React from "react";
import IconButton from "../../../Componants/Button/IconButton";
import SectionHeading from "../../../Componants/SectionText/SectionHeading";
import SectionTitle from "../../../Componants/SectionText/SectionTitle";

const Management = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-800 ">
      <div className="w-full md:w-1/2 px-5 md:px-10 my-10">
        <SectionTitle
          className="text-start"
          title="Optional Ad Management Services"
        />
        <SectionHeading
          className="text-start "
          title="Results-driven, affordable ad management"
        />
        <p className="p-2 text-slate-200">
          Partner with our advertising experts to save time, boost performance,
          and meet your milestones on your growth journey.
        </p>
        <IconButton>Learn about our optional services</IconButton>
      </div>
      <div className="text-center w-full md:w-1/2">
        <p>image</p>
      </div>
    </div>
  );
};

export default Management;
