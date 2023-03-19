import React, { useContext } from "react";
import SectionTitle from "../../../Componants/SectionText/SectionTitle";
import { ThemeContext } from "../../../Context/ColorContext";

const GridSection = () => {
  const { theme } = useContext(ThemeContext);
  const items = [
    {
      icon: "mail-outline",
      color: "purple",
      heading: "Campaigns",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
    },
    {
      icon: "bag-add-outline",
      color: "green",
      heading: "Campaigns",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
    },
    {
      icon: "grid-outline",
      color: "orange",
      heading: "Campaigns",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
    },
    {
      icon: "card-outline",
      color: "purple",
      heading: "Campaigns",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
    },
    {
      icon: "time-outline",
      color: "green",
      heading: "Campaigns",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
    },
    {
      icon: "notifications-outline",
      color: "green",
      heading: "Campaigns",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
    },
    {
      icon: "logo-facebook",
      color: "blue",
      heading: "Campaigns",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
    },

    {
      icon: "chatbubble-outline",
      color: "orange",
      heading: "Campaigns",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus. Hoc est non dividere, sed frangere.",
    },
  ];
  return (
    <div className="mx-5 md:md-10 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col p-5 md:p-10">
          <div className="flex flex-col">
            <div
              className={`flex justify-center items-center  w-10 rounded-lg ${
                theme === "light" ? "bg-slate-200" : "bg-slate-900"
              }`}
            >
              <ion-icon
                name={item.icon}
                style={{
                  fontSize: "28px",

                  color: `${item.color}`,
                  paddingTop: "3px",
                  paddingBottom: "3px",
                }}
              ></ion-icon>
            </div>
            <p className="font-bold text-xl py-2">{item.heading}</p>
            <p className="text-start text-md  text-gray-400 text-wrap">
              {item.text}
            </p>
            {/* <p>{item.text}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridSection;
