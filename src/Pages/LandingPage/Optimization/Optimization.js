import React, { useContext } from "react";
import SectionHeading from "../../../Componants/SectionText/SectionHeading";
import SectionTitle from "../../../Componants/SectionText/SectionTitle";
import heroappImg from "../../../Assets/hero-app-screen.png";
import heroappDarkImg from "../../../Assets/hero-app-screen-dark.png";
import { ThemeContext } from "../../../Context/ColorContext";

const Optimization = () => {
  const { theme } = useContext(ThemeContext);
  // console.log(theme);
  const items = [
    {
      heading: "AI Powered",
      text: "Our AI handles every complex operation, letting you focus.",
    },
    {
      heading: "Real-Time Data",
      text: "All your data is processed in real-time, for better performance.",
    },
    {
      heading: "Fast & secure",
      text: "Your data is virtually unhackable compared letting you focus.",
    },
  ];
  return (
    <div>
      <SectionTitle title="The industry-leading Advertising Optimization solutio" />
      <SectionHeading title="Build optimize, and analyze your advertising" />
      <div className="px-5 py-10 md:px-32 ">
        {theme === "light" ? (
          <img
            src={heroappImg}
            style={{ maxWidth: "100%", height: "auto", padding: 0, margin: 0 }}
            alt="appImg"
          />
        ) : (
          <img
            src={heroappDarkImg}
            style={{ maxWidth: "100%", height: "auto", padding: 0, margin: 0 }}
            alt="appImg"
          />
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-10 md:mx-32">
        {items.map((item, i) => (
          <div className="" key={i}>
            <p className="font-bold text-xl">{item.heading}</p>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Optimization;
