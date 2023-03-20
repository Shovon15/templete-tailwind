import React, { useContext } from "react";
import PrimaryButton from "../../../Componants/Button/PrimaryButton";
import SectionHeading from "../../../Componants/SectionText/SectionHeading";
import SectionTitle from "../../../Componants/SectionText/SectionTitle";
import workingPng from "../../../Assets/working-laptop.svg";
import workingDark from "../../../Assets/working-laptop-dark.svg";
import { GrCheckmark } from "react-icons/gr";
import { ThemeContext } from "../../../Context/ColorContext";

const Banner = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="">
      <SectionHeading title="Empower your digital marketing" />
      <SectionTitle title="The AI-powered platform to optimize and grow your ecommerce business on every single store provider." />
      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <div className="flex items-center justify-center">
          <ion-icon name="checkmark-outline"></ion-icon>
          Reach customers
        </div>
        <div className="flex items-center justify-center">
          <ion-icon name="checkmark-outline"></ion-icon>
          Reach customer
        </div>
        <div className="flex items-center justify-center">
          <ion-icon name="checkmark-outline"></ion-icon>
          Reach customer
        </div>
      </div>
      <div className="flex justify-center items-center my-5 gap-2">
        <PrimaryButton>Free Trial</PrimaryButton>
        <PrimaryButton>Learn More</PrimaryButton>
      </div>
      <div className="mx-10 lg:mx-72">
        {/* <img src={thinkingPng} alt="..." /> */}
        {theme === "light" ? (
          <img
            src={workingPng}
            style={{ maxWidth: "100%", height: "auto", padding: 0, margin: 0 }}
            alt="appImg"
          />
        ) : (
          <img
            src={workingDark}
            style={{ maxWidth: "100%", height: "auto", padding: 0, margin: 0 }}
            alt="appImg"
          />
        )}
      </div>
    </div>
  );
};

export default Banner;
