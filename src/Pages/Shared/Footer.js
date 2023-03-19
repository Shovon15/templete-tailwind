import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../Componants/Button/PrimaryButton";
import logo from "../../Assets/logo.svg";

const Footer = () => {
  const icons = [
    {
      icon: "logo-facebook",
    },
    {
      icon: "logo-linkedin",
    },
    {
      icon: "logo-youtube",
    },
    {
      icon: "logo-twitter",
    },
    {
      icon: "logo-github",
    },
  ];
  return (
    <div className="px-5 md:px-10 pt-36 md:pt-24 pb-10 bg-slate-900 text-slate-400 min-h-max">
      <div className=" grid grid-cols-1 md:grid-cols-5  gap-3">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-white">PRODUCT</p>
          <Link to="/">Core features</Link>
          <Link to="/">Core features</Link>
          <Link to="/">Core features</Link>
          <Link to="/">Core features</Link>
          <Link to="/">Core features</Link>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold text-white">COMPANY</p>
          <Link to="/">Core features</Link>
          <Link to="/">Core features</Link>
          <Link to="/">Core features</Link>
          <Link to="/">Core features</Link>
          <Link to="/">Core features</Link>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold text-white">API</p>
          <Link to="/">Core features</Link>
          <Link to="/">Core features</Link>
          <Link to="/">Core features</Link>
          <Link to="/">Core features</Link>
          <Link to="/">Core features</Link>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold text-white">ASSISTANCE</p>
          <Link to="/">Core features</Link>
          <Link to="/">Core features</Link>
          <Link to="/">Core features</Link>
          <Link to="/">Core features</Link>
          <Link to="/">Core features</Link>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <p className="font-bold text-white pb-2">Subscribe Now</p>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Your email"
            type="email"
            name="email"
          />
          <PrimaryButton className="mx-0" typo="submit">
            Subscribe
          </PrimaryButton>
          <div className="flex gap-3 mx-auto m-5 ">
            {icons.map((item, i) => (
              <ion-icon
                style={{ fontSize: "28px", cursor: "pointer" }}
                name={item.icon}
                key={i}
              ></ion-icon>
            ))}
          </div>
        </div>
      </div>
      <div className="flex border-t-2 border-indigo-500 pt-10 ">
        <div className="w-7/12 flex flex-col md:flex-row items-center gap-4">
          <img className="w-12 h-12" src={logo} alt="logo" />
          <Link>Contact us</Link>
          <Link>Privacy</Link>
          <Link>Terms of Service</Link>
        </div>
        <div className="w-5/12">
          <p>© 2022-2023 Css Ninja. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
