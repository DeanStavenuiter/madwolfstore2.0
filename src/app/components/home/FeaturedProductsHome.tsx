import React from "react";
import CarouselShirts from "../carousels/CarouselShirts";
import { getTshirts } from "../../crud/getProducts";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

const FeaturedProductsHome = async () => {
  const products = await getTshirts({});

  const video = products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      webM: product.webMFile,
      mp4: product.mp4File,
      price: product.price,
    };
  });

  return (
    <div className="mb-[75px]">
      <h2 className="text-[28.4px]/[30px] font-black uppercase tracking-normal  bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-900 md:text-[64px]/[64px] ">
        <AnimatedShinyText>featured products</AnimatedShinyText>
      </h2>
      <p className="text-[14px] font-light tracking-normal">
        <span className="italic">Top</span>-Rated Featured Products You’ll{" "}
        <span className="font-bold">Love</span>.
      </p>
      <CarouselShirts slides={video} options={{ loop: true, align: "start" }} />
    </div>
  );
};

export default FeaturedProductsHome;
