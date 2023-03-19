import React, { useContext } from "react";
import SectionHeading from "../../../Componants/SectionText/SectionHeading";
import SectionTitle from "../../../Componants/SectionText/SectionTitle";
import earnImg from "../../../Assets/earning.svg";
import earnDarkImg from "../../../Assets/earning-dark.svg";
import { ThemeContext } from "../../../Context/ColorContext";
import IconButton from "../../../Componants/Button/IconButton";
import PrimaryButton from "../../../Componants/Button/PrimaryButton";
import { GrCheckmark } from "react-icons/gr";

const AISection = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="relative mb-36 mx-5 md:mx-10 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <SectionTitle colored="Artificial Intelligence" />
        <SectionHeading
          title="Artificial Intelligence
          Unlock growth with artificial intelligence"
        />
        <p className="p-2 text-slate-500">
          Save time and money with automated campaign creation, execution and
          optimization. Input your strategic objectives (growth, profitability,
          brand defense, awareness), and rely on Vulk's ad engine to execute
          tactically.
        </p>
        <IconButton>Learn More about our Product</IconButton>
      </div>
      <div className="w-full md:w-1/2">
        {theme === "light" ? (
          <img
            src={earnImg}
            style={{ maxWidth: "100%", height: "auto", padding: 0, margin: 0 }}
            alt="appImg"
          />
        ) : (
          <img
            src={earnDarkImg}
            style={{ maxWidth: "100%", height: "auto", padding: 0, margin: 0 }}
            alt="appImg"
          />
        )}
      </div>
      <div className="absolute bottom-[-255px] md:bottom-[-200px] left-0 right-0 bg-indigo-800  rounded-lg w-11/12 mx-auto h-64 md:h-40 p-5 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <p className="text-white font-medium">30-day free trial</p>
          <p className="text-wrap text-start text-white font-bold text-2xl py-2">
            Maximize your marketplace potential
          </p>
        </div>
        <div className="w-full md:w-1/2 ">
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 ">
            <button
              className="w-full  bg-indigo-600 text-white py-2 px-6 rounded  hover:bg-indigo-400 
                           duration-500"
            >
              Get Started
            </button>
            <button
              className="w-full bg-white text-slate-600 py-2 px-6 rounded  hover:bg-indigo-400 
                     duration-500"
            >
              Let's talk
            </button>
          </div>
          <div className="flex justify-center items-center py-5 ">
            <div className="flex items-center  justify-center text-white hidden md:inline-flex">
              <ion-icon
                name="checkmark-outline"
                style={{ fontSize: "22px", paddingRight: "2px" }}
              ></ion-icon>
              Reach customers
            </div>
            <div className="flex items-center justify-center text-white hidden md:inline-flex mx-5">
              <ion-icon
                name="checkmark-outline"
                style={{ fontSize: "22px", paddingRight: "2px" }}
              ></ion-icon>
              Reach customer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISection;
