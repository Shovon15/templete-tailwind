import React, { useContext, useState } from "react";
import PrimaryButton from "../../Componants/Button/PrimaryButton";
import { ThemeContext } from "../../Context/ColorContext";
import { ScrollContext } from "../../Context/ScrollPosition";
import NavLinks from "../../Componants/NavComp/NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { handleThemeSwitch } = useContext(ThemeContext);
  const { scrollPosition } = useContext(ScrollContext);

  const items = (
    <>
      <PrimaryButton>Get Started</PrimaryButton>
      <label className="relative flex justify-between items-center group p-0 text-xl pointer cursor-pointer my-2 md:my-0">
        <input
          onClick={handleThemeSwitch}
          type="checkbox"
          className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
        />

        <span
          className="w-[2.75rem] h-5 flex items-center flex-shrink-0 ml-2 p-0 bg-gray-500 rounded-full duration-300 
               ease-in-out peer-checked:bg-green-400 after:w-[1.75rem] after:h-7 after:bg-orange-300 after:rounded-full after:shadow-md 
               after:duration-300 peer-checked:after:translate-x-4 peer-checked:after:bg-blue-500 group-hover:after:translate-x-0 "
        ></span>
      </label>
    </>
  );

  return (
    <div
      className={`w-full  fixed top-0 left-0 sticky top-0 z-20  transition-shadow ${
        scrollPosition > 0 ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="md:flex items-center justify-between  bg-slate-100 dark:bg-slate-700  py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center 
                     text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Logo
        </div>

        <ul
          className={`md:flex   md:items-center bg-slate-100 md:bg-transparent md:dark:bg-transparent dark:bg-slate-700 md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-[77px]" : "top-[-490px]"
          }`}
        >
          <NavLinks />

          <div className="md:hidden flex justify-around">{items}</div>
        </ul>
        <div className="hidden md:flex">{items}</div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
