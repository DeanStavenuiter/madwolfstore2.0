import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import React from "react";
import CarouselBlogPosts from "../carousels/CarouselBlogPosts";

const slides = [
  {
    id: "1",
    title: "The creative process",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl1: "/images/blog/blog1.jpg",
  },
  {
    id: "2",
    title: "The creative process",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl1: "/images/blog/blog2.jpg",
  },
  {
    id: "3",
    title: "The creative process",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl1: "/images/blog/blog3.jpg",
  },
  {
    id: "4",
    title: "The creative process",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl1: "/images/blog/blog4.jpg",
  },
  {
    id: "5",
    title: "The creative process",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl1: "/images/blog/blog5.jpg",
  },
  {
    id: "6",
    title: "The creative process",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl1: "/images/blog/blog6.jpg",
  },
];

const BlogPostsHome = () => {
  return (
    <div className="mt-[75px]">
      <h2 className="text-[28.4px]/[30px] font-black uppercase tracking-normal text-[#FFFFFF] md:text-[64px]/[64px]">
        <AnimatedShinyText>Latest Insights</AnimatedShinyText>
      </h2>
      <p className="text-[14px] font-light tracking-normal">
        Where <span className="italic">Ideas</span> Come to{" "}
        <span className="font-bold">Life</span>.
      </p>
      <div className="mt-[25px]">
        <CarouselBlogPosts
          slides={slides}
          options={{ align: "start", loop: true }}
        />
      </div>
    </div>
  );
};

export default BlogPostsHome;
