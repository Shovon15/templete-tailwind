import React from "react";
import IconButton from "../Button/IconButton";

const BlogCard = ({ item }) => {
  const { blogImg, avatar, topic, heading, text, view } = item;
  console.log(item);
  return (
    <div className="dark:bg-slate-600 rounded-lg shadow-md ">
      <div className="flex items-center px-5 pt-5">
        <div>
          <img className="rounded-full w-16" src={avatar} alt="..." />
        </div>
        <div className="ml-2">
          <p className="text-indigo-500 font-medium">{topic}</p>
          <p className="font-bold py-1">{heading}</p>
        </div>
      </div>
      <p className="text-wrap px-5 py-2">{text}</p>
      <div className="flex flex-col md:flex-row justify-between px-5 ">
        <IconButton className="m-2">Read More</IconButton>
        <p className="flex items-center gap-2">
          <ion-icon name="eye-outline" />
          {view}
        </p>
      </div>
      <div className="w-full ">
        <img className="w-full rounded-b-lg" src={blogImg} alt="..." />
      </div>
    </div>
  );
};

export default BlogCard;
