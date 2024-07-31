import React from "react";
import CarouselArt from "../carousels/CarouselArt";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { getArt } from "@/app/crud/getProducts";

const MadwolfArtHome = async () => {
  const art = await getArt();

  return (
    <div className="mt-[55px]">
      <h2 className="text-[28.4px]/[30px] font-black uppercase tracking-normal  bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-900 md:text-[64px]/[64px] ">
        <AnimatedShinyText>Explore Our Art Collection</AnimatedShinyText>
      </h2>
      <p>
        <span className="italic">Elevate</span> Your Home with{" "}
        <span className="font-bold">Beautiful</span> Art
      </p>
      <div className="mt-[25px]">
        <CarouselArt slides={art} options={{ loop: true, align: "start" }} />
      </div>
    </div>
  );
};

export default MadwolfArtHome;
