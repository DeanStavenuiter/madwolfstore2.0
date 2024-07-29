import React from "react";
import CarouselArt from "../carousels/CarouselArt";

const slides = [
  {
    id: 1,
    name: "Art 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Art 2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Art 3",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Art 4",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Art 5",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Art 6",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Art 7",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Art 8",
    image: "https://via.placeholder.com/150",
  },
];

const MadwolfArtHome = () => {
  return (
    <div className="mt-[55px]">
      <h2 className="text-[28.4px]/[30px] font-black uppercase tracking-normal text-[#FFFFFF] md:text-[64px]/[64px]">
        Explore Our Art Collection
      </h2>
      <p>
        <span className="italic">Elevate</span> Your Home with{" "}
        <span className="font-bold">Beautiful</span> Art
      </p>
      <div className="mt-[25px]">
        <CarouselArt slides={slides} options={{ loop: true }} />
      </div>
    </div>
  );
};

export default MadwolfArtHome;
