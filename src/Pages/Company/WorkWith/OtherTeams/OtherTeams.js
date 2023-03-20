import React from "react";
import SectionHeading from "../../../../Componants/SectionText/SectionHeading";
import SectionTitle from "../../../../Componants/SectionText/SectionTitle";
import avatar from "../../../../Assets/150x150.png";

const OtherTeams = () => {
  const items = [
    {
      avatar: avatar,
      name: "Daniel Abikzer",
      desig: "General Manager",
      icon: [
        {
          icon1: "logo-linkedin",
          icon2: "logo-twitter",
          icon3: "logo-github",
        },
      ],
    },
    {
      avatar: avatar,
      name: "Daniel Abikzer",
      desig: "General Manager",
      icon: [
        {
          icon1: "logo-linkedin",
          icon2: "logo-twitter",
          icon3: "logo-github",
        },
      ],
    },
    {
      avatar: avatar,
      name: "Daniel Abikzer",
      desig: "General Manager",
      icon: [
        {
          icon1: "logo-linkedin",
          icon2: "logo-twitter",
          icon3: "logo-github",
        },
      ],
    },
    {
      avatar: avatar,
      name: "Daniel Abikzer",
      desig: "General Manager",
      icon: [
        {
          icon1: "logo-linkedin",
          icon2: "logo-twitter",
          icon3: "logo-github",
        },
      ],
    },
    {
      avatar: avatar,
      name: "Daniel Abikzer",
      desig: "General Manager",
      icon: [
        {
          icon1: "logo-linkedin",
          icon2: "logo-twitter",
          icon3: "logo-github",
        },
      ],
    },
    {
      avatar: avatar,
      name: "Daniel Abikzer",
      desig: "General Manager",
      icon: [
        {
          icon1: "logo-linkedin",
          icon2: "logo-twitter",
          icon3: "logo-github",
        },
      ],
    },
    {
      avatar: avatar,
      name: "Daniel Abikzer",
      desig: "General Manager",
      icon: [
        {
          icon1: "logo-linkedin",
          icon2: "logo-twitter",
          icon3: "logo-github",
        },
      ],
    },
    {
      avatar: avatar,
      name: "Daniel Abikzer",
      desig: "General Manager",
      icon: [
        {
          icon1: "logo-linkedin",
          icon2: "logo-twitter",
          icon3: "logo-github",
        },
      ],
    },
    {
      avatar: avatar,
      name: "Daniel Abikzer",
      desig: "General Manager",
      icon: [
        {
          icon1: "logo-linkedin",
          icon2: "logo-twitter",
          icon3: "logo-github",
        },
      ],
    },
    {
      avatar: avatar,
      name: "Daniel Abikzer",
      desig: "General Manager",
      icon: [
        {
          icon1: "logo-linkedin",
          icon2: "logo-twitter",
          icon3: "logo-github",
        },
      ],
    },
    {
      avatar: avatar,
      name: "Daniel Abikzer",
      desig: "General Manager",
      icon: [
        {
          icon1: "logo-linkedin",
          icon2: "logo-twitter",
          icon3: "logo-github",
        },
      ],
    },
    {
      avatar: avatar,
      name: "Daniel Abikzer",
      desig: "General Manager",
      icon: [
        {
          icon1: "logo-linkedin",
          icon2: "logo-twitter",
          icon3: "logo-github",
        },
      ],
    },
  ];
  return (
    <div>
      <SectionTitle colored="And The Others" />
      <SectionHeading title="Meet The Team" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 md:mx-32 my-10">
        {items.map((item, i) => (
          <div className="w-full bg-white dark:bg-slate-900 rounded-xl flex gap-2 ">
            <img className="w-20 rounded-full p-2" src={avatar} alt="..." />
            <div className="py-2">
              <p className="text-xl font-semibold text-slate-500">
                {item.name}
              </p>
              <p className="text-md text-blue-500">{item.desig}</p>
              {item.icon.map((iteIicon, i) => (
                <div className="flex flex-row gap-2">
                  <ion-icon
                    style={{ fontSize: "16px" }}
                    name={iteIicon.icon1}
                  ></ion-icon>
                  <ion-icon
                    style={{ fontSize: "16px" }}
                    name={iteIicon.icon2}
                  ></ion-icon>
                  <ion-icon
                    style={{ fontSize: "16px" }}
                    name={iteIicon.icon3}
                  ></ion-icon>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <ion-icon name="logo-linkedin"></ion-icon> */}
    </div>
  );
};

export default OtherTeams;
