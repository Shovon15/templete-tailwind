import React from "react";
import avatar from "../../../Assets/150x150.png";
import img1 from "../../../Assets/blog/post-1.svg";
import img2 from "../../../Assets/blog/post-2.svg";
import img3 from "../../../Assets/blog/post-3.svg";
import img4 from "../../../Assets/blog/post-4.svg";
import img5 from "../../../Assets/blog/post-5.svg";
import img6 from "../../../Assets/blog/post-6.svg";
import PrimaryButton from "../../../Componants/Button/PrimaryButton";
import BlogCard from "../../../Componants/CardComp/BlogCard";
// import BLogCard from "../../../Componants/CardComp/BlogCard";

const BlogSection = () => {
  const items = [
    {
      avatar: avatar,
      topic: "TECHNOLOGY",
      heading: "How 3D and augmented reality are changing our world",
      text: "Companies like Apple and Google are investing huge amounts of capital into Augmented Reality, or AR . taste of how AR can impact our lives. ",
      view: 1230,
      blogImg: img1,
    },
    {
      avatar: avatar,
      topic: "JOBS",
      heading: "How 3D and augmented reality are changing our world",
      text: "Companies like Apple and Google are investing huge amounts of capital into Augmented Reality, or AR . taste of how AR can impact our lives. ",
      view: 1430,
      blogImg: img2,
    },
    {
      avatar: avatar,
      topic: "ECOLOGY",
      heading: "How 3D and augmented reality are changing our world",
      text: "Companies like Apple and Google are investing huge amounts of capital into Augmented Reality, or AR . taste of how AR can impact our lives. ",
      view: 1030,
      blogImg: img3,
    },
    {
      avatar: avatar,
      topic: "BUSINESS",
      heading: "How 3D and augmented reality are changing our world",
      text: "Companies like Apple and Google are investing huge amounts of capital into Augmented Reality, or AR . taste of how AR can impact our lives. ",
      view: 1230,
      blogImg: img2,
    },
    {
      avatar: avatar,
      topic: "TECHNOLOGY",
      heading: "How 3D and augmented reality are changing our world",
      text: "Companies like Apple and Google are investing huge amounts of capital into Augmented Reality, or AR . taste of how AR can impact our lives. ",
      view: 830,
      blogImg: img5,
    },
    {
      avatar: avatar,
      topic: "FINANCE",
      heading: "How 3D and augmented reality are changing our world",
      text: "Companies like Apple and Google are investing huge amounts of capital into Augmented Reality, or AR . taste of how AR can impact our lives. ",
      view: 230,
      blogImg: img6,
    },
    {
      avatar: avatar,
      topic: "FINANCE",
      heading: "How 3D and augmented reality are changing our world",
      text: "Companies like Apple and Google are investing huge amounts of capital into Augmented Reality, or AR . taste of how AR can impact our lives. ",
      view: 330,
      blogImg: img4,
    },
    {
      avatar: avatar,
      topic: "FINANCE",
      heading: "How 3D and augmented reality are changing our world",
      text: "Companies like Apple and Google are investing huge amounts of capital into Augmented Reality, or AR . taste of how AR can impact our lives. ",
      view: 530,
      blogImg: img5,
    },
  ];
  return (
    <div>
      <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-5 mx-10 md:mx-32 ">
        {items.map((item, i) => (
          <BlogCard item={item} key={i}></BlogCard>
        ))}
      </div>
      <div className="flex justify-center items-center py-5">
        <PrimaryButton>View More</PrimaryButton>
      </div>
    </div>
  );
};

export default BlogSection;
