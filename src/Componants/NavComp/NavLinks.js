import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";

const NavLinks = ({ items }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-2 font-bold flex justify-between items-center md:pr-0 pr-12 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-down" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:pt-1 md:ml-0  md:block hidden group-hover:rotate-180 group-hover:-pt-2">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-down" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
            </h1>
            {/* dropdown----------------------------- */}
            {link.submenu && (
              <div>
                <div className="absolute top-[48px]  hidden group-hover:md:block hover:md:block">
                  {/* this the marker or dropdown */}
                  <div className="py-3">
                    <div
                      className="w-6 h-6 left-5 absolute 
                    mt-2 bg-slate-200 dark:bg-slate-900 rotate-45"
                    ></div>
                  </div>
                  <div className="w-[500px] mt-2 bg-slate-200 dark:bg-slate-900 p-5 ">
                    {/* grid */}
                    {link.sublinks.map((mysublinks) => (
                      <div className="">
                        <h1 className="text-lg font-semibold ">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <Link to={slink.link}>
                            <li className="text-lg px-2 font-semibold hover:bg-gray-700 hover:text-white text-gray-600 dark:text-white my-1 py-1.5 ">
                              {slink.name}
                            </li>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"} flex
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <button>button</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
