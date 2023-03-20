import React from "react";
import SectionHeading from "../../../../Componants/SectionText/SectionHeading";
import SectionTitle from "../../../../Componants/SectionText/SectionTitle";
import img from "../../../../Assets/270x333.png";

const Founders = () => {
  const items = [
    {
      img: img,
      name: "Daniel Abikzer",
      desig: "Co-Founder",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate. Hoc non est positum in nostra actione. Primum in nostrane potestate est, quid meminerimus",
    },
    {
      img: img,
      name: "Hakeem Elba",
      desig: "Co-Founder",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate. Hoc non est positum in nostra actione. Primum in nostrane potestate est, quid meminerimus",
    },
  ];
  return (
    <div className="mx-5 md:mx-10">
      <SectionTitle colored="The Big Guys" />
      <SectionHeading title="About The Founders" />
      <div className="flex justify-center items-center flex-col md:flex-row gap-5 ">
        {items.map((item, i) => (
          <div className="w-80">
            <img className="w-full" src={item.img} alt="..." />
            <div className="p-5 text-center">
              <p className="font-semibold text-xl">{item.name}</p>
              <p className="text-blue-500">{item.desig}</p>
              <p className="text-slate-500">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
