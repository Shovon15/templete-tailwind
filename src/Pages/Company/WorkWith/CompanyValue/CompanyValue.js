import React from "react";
import SectionHeading from "../../../../Componants/SectionText/SectionHeading";
import SectionTitle from "../../../../Componants/SectionText/SectionTitle";
import { TbDog } from "react-icons/tb";
import { BiBrain } from "react-icons/bi";
import { BsRocket } from "react-icons/bs";
import { FaFan } from "react-icons/fa";

const CompanyValue = () => {
  const items = [
    {
      icon: <TbDog />,
      color: "text-emerald-500",
      title: "We are human",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate. Hoc non est positum in nostra actione. Primum in nostrane potestate est, quid meminerimus.",
    },
    {
      icon: <BiBrain />,
      color: "text-green-600",
      title: "We are focused",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate. Hoc non est positum in nostra actione. Primum in nostrane potestate est, quid meminerimus.",
    },
    {
      icon: <BsRocket />,
      color: "text-teal-500",
      title: "We are productive",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate. Hoc non est positum in nostra actione. Primum in nostrane potestate est, quid meminerimus.",
    },
    {
      icon: <FaFan />,
      color: "text-cyan-500",
      title: "We are creative",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille pellit, qui permulcet sensum voluptate. Hoc non est positum in nostra actione. Primum in nostrane potestate est, quid meminerimus.",
    },
  ];
  return (
    <div className="mx-5 md:mx-10">
      <SectionTitle colored="Dedicated Team" />
      <SectionHeading title="Our Company Values" />
      <div className="flex flex-col md:flex-row bg-white dark:bg-cyan-900 shadow-md rounded-md p-4 gap-5">
        {items.map((item, i) => (
          <div key={1}>
            <div className={`${item.color} text-4xl my-4`}>{item.icon}</div>

            <h1 className="font-semibold text-xl">{item.title}</h1>
            <p className="text-slate-500">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyValue;
