import React from "react";
import PrimaryButton from "../../../Componants/Button/PrimaryButton";
import SectionHeading from "../../../Componants/SectionText/SectionHeading";
import SectionTitle from "../../../Componants/SectionText/SectionTitle";
import thinkingPng from "../../../Assets/working-laptop.svg";
import { GrCheckmark } from "react-icons/gr";

const Banner = () => {
  return (
    <div className="pt-24">
      <SectionHeading title="Empower your digital marketing" />
      <SectionTitle title="The AI-powered platform to optimize and grow your ecommerce business on every single store provider." />
      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <div className="flex items-center justify-center">
          <GrCheckmark className="mx-2" />
          Reach customers
        </div>
        <div className="flex items-center justify-center">
          <GrCheckmark className="mx-2" />
          Reach customer
        </div>
        <div className="flex items-center justify-center">
          <GrCheckmark className="mx-2" />
          Reach customer
        </div>
      </div>
      <div className="flex justify-center items-center my-5">
        <PrimaryButton>Free Trial</PrimaryButton>
        <PrimaryButton>Learn More</PrimaryButton>
      </div>
      <div className="mx-10 lg:mx-72">
        <img src={thinkingPng} alt="..." />
      </div>
    </div>
  );
};

export default Banner;
