import React from "react";

const OurCustomerCard = ({ item }) => {
  const { heading, img, logo, text, desig } = item;
  return (
    <div className="relative dark:bg-slate-600 rounded-lg shadow-md p-10">
      <div className="flex items-center">
        <div>
          <img className="rounded-full w-12" src={img} alt="..." />
        </div>
        <div className="ml-2">
          <p className="font-bold py-1">{heading}</p>
          <p className="text-slate-500">{desig}</p>
        </div>
      </div>
      <p>{text}</p>
      <div className="absolute top-0 right-5">
        <img className="w-20 h-20" src={logo} alt="..." />
      </div>
    </div>
  );
};

export default OurCustomerCard;
