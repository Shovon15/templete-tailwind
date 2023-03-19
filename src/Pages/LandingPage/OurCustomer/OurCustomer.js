import React from "react";
import SectionHeading from "../../../Componants/SectionText/SectionHeading";
import SectionTitle from "../../../Componants/SectionText/SectionTitle";
import img from "../../../Assets/150x150.png";
import logo1 from "../../../Assets/company logo/covenant.svg";
import logo2 from "../../../Assets/company logo/grubspot.svg";
import logo3 from "../../../Assets/company logo/infinite.svg";
import logo4 from "../../../Assets/company logo/kromo.svg";
import logo5 from "../../../Assets/company logo/phasekit.svg";
import OurCustomerCard from "../../../Componants/CardComp/OurCustomerCard";

const OurCustomer = () => {
  const Items = [
    {
      img: img,
      logo: logo1,
      desig: "CFO @Kromo",
      heading: "Mike Williams",
      text: "Not only are our metrics and performance up and exceeding expectations, but I’ve been really impressed with the way that they manage our business.",
    },
    {
      img: img,
      logo: logo2,
      desig: "CFO @Kromo",
      heading: "Mike Williams",
      text: "Not only are our metrics and performance up and exceeding expectations, but I’ve been really impressed with the way that they manage our business.",
    },
    {
      img: img,
      logo: logo3,
      desig: "CFO @Kromo",
      heading: "Mike Williams",
      text: "Not only are our metrics and performance up and exceeding expectations, but I’ve been really impressed with the way that they manage our business.",
    },
    {
      img: img,
      logo: logo4,
      desig: "CFO @Kromo",
      heading: "Lana Henriks",
      text: "Not only are our metrics and performance up and exceeding expectations, but I’ve been really impressed with the way that they manage our business.",
    },
    {
      img: img,
      logo: logo3,
      desig: "CFO @Kromo",
      heading: "Mike Williams",
      text: "Not only are our metrics and performance up and exceeding expectations, but I’ve been really impressed with the way that they manage our business.",
    },
    {
      img: img,
      logo: logo4,
      desig: "CFO @Kromo",
      heading: "Lana Henriks",
      text: "Not only are our metrics and performance up and exceeding expectations, but I’ve been really impressed with the way that they manage our business.",
    },
  ];
  return (
    <div className="mx-5 md:mx-10">
      <SectionTitle colored="Take a quick look at what they say" />
      <SectionHeading title="We volk, Straight from our customers" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 my-5">
        {Items.map((item, i) => (
          <OurCustomerCard item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default OurCustomer;
