import React from "react";
import IconButton from "../../../../Componants/Button/IconButton";
import SectionHeading from "../../../../Componants/SectionText/SectionHeading";
import SectionTitle from "../../../../Componants/SectionText/SectionTitle";

const WorkWithBanner = () => {
  return (
    <div className="bg-indigo-300 px-5 md:px-10 py-20 flex flex-col md:flex-row justify-center items-center">
      <div className="w-full md:w-1/2">
        <SectionTitle className="text-start" colored="TOP 3%" />
        <SectionHeading
          className="text-start"
          title="A High-Performing Senior Elite Team"
        />
        <SectionTitle
          className="text-start"
          title="Partner with our advertising experts to save time, boost performance, and meet your milestones on your growth journey."
        />
        <IconButton>Learn More</IconButton>
      </div>
      <div className="w-full md:w-1/2">
        <h1>ldsjfjfsfk</h1>
      </div>
    </div>
  );
};

export default WorkWithBanner;
