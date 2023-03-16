import React, { useEffect, useState } from "react";
import PrimaryButton from "../../Componants/Button/PrimaryButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  console.log(theme);

  let Links = [
    {
      name: "Product",
      link: "/",
    },
    {
      name: "Pricing",
      link: "/",
    },
    {
      name: "Company",
      link: "/",
    },
    {
      name: "Resourse",
      link: "/",
    },
  ];
  return (
    <div>
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white dark:bg-slate-700  py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]
      text-gray-800"
          >
            <span className="text-3xl text-indigo-600 mr-1 pt-2">
              <ion-icon name="logo-ionic"></ion-icon>
            </span>
            Logo
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center bg-white dark:bg-slate-700 md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-gray-400 dark:text-white dark:hover:text-slate-500 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <PrimaryButton>Get Started</PrimaryButton>
            <div>
              <label className="relative flex justify-between items-center group p-0 text-xl pointer cursor-pointer my-2 md:my-0">
                <input
                  onClick={handleThemeSwitch}
                  type="checkbox"
                  className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
                />
                {/* {theme === "dark" ? (
                  <span
                    className="w-[2.75rem] h-5 flex items-center flex-shrink-0 ml-2 p-0 bg-gray-500 rounded-full duration-300 
                  ease-in-out peer-checked:bg-green-400 after:w-[1.75rem] after:h-7 after:bg-red-500 after:rounded-full after:shadow-md 
                  after:duration-300 peer-checked:after:translate-x-4 peer-checked:after:bg-slate-300 group-hover:after:translate-x-0 "
                  ></span>
                ) : (
                  <span
                    className="w-[2.75rem] h-5 flex items-center flex-shrink-0 ml-2 p-0 bg-gray-500 rounded-full duration-300 
                ease-in-out peer-checked:bg-green-400 after:w-[1.75rem] after:h-7 after:bg-red-500 after:rounded-full after:shadow-md 
                after:duration-300 peer-checked:after:translate-x-4 peer-checked:after:bg-green-500 group-hover:after:translate-x-0 "
                  >
                    <ion-icon name="sunny-outline"></ion-icon>
                  </span>
                )} */}

                <span
                  className="w-[2.75rem] h-5 flex items-center flex-shrink-0 ml-2 p-0 bg-gray-500 rounded-full duration-300 
                 ease-in-out peer-checked:bg-green-400 after:w-[1.75rem] after:h-7 after:bg-red-500 after:rounded-full after:shadow-md 
                 after:duration-300 peer-checked:after:translate-x-4 peer-checked:after:bg-blue-500 group-hover:after:translate-x-0 "
                ></span>
              </label>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
