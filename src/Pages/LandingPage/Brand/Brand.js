import React from "react";
import SectionTitle from "../../../Componants/SectionText/SectionTitle";

const Brand = () => {
  const brands = [
    "https://i.ibb.co/27wHw8Y/image-5.png",
    "https://i.ibb.co/vVSVd76/image-6.png",
    "https://i.ibb.co/vVSVd76/image-6.png",
    "https://i.ibb.co/Rhk2VSh/image-9.png",
    "https://i.ibb.co/Rhk2VSh/image-9.png",
    "https://i.ibb.co/27wHw8Y/image-5.png",
    "https://i.ibb.co/vVSVd76/image-6.png",
    "https://i.ibb.co/Rhk2VSh/image-9.png",
  ];
  return (
    <div>
      <SectionTitle colored="WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500" />
      <div className="mx-auto mt-5">
        <div className="grid grid-cols-2 md:grid-cols-4 mx-5 md:mx-20 gap-5 ">
          {brands.map((brand, i) => (
            <img key={i} src={brand} alt="brands" style={{ width: "70%" }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
