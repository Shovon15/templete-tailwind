import React from "react";
import PrimaryButton from "../../../Componants/Button/PrimaryButton";
import SectionHeading from "../../../Componants/SectionText/SectionHeading";
import SectionTitle from "../../../Componants/SectionText/SectionTitle";

const BlogBanner = () => {
  return (
    <div>
      <SectionTitle colored="Company Blog" />
      <SectionHeading title="Our Latest News" />
      <SectionTitle
        className=""
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vides, quid faciat. Mihi vero, inquit, placet agi subtilius et, ut ipse."
      />
      <div className="flex flex-col md:flex-row justify-center px-5 md:px-10 gap-3">
        <input
          className="max-w-96 md:w-96 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Your email"
          type="email"
          name="email"
        />
        <PrimaryButton className="px-2 py-4 " typo="submit">
          Subscribe
        </PrimaryButton>
      </div>
    </div>
  );
};

export default BlogBanner;
