import React from "react";
import CarouselReviews from "../carousels/CarouselReviews";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

const slides = [
  {
    id: 1,
    name: "Dean",
    review:
      "I love the quality of the products and the customer service is amazing. I will definitely be shopping here again.",
  },
  {
    id: 2,
    name: "Samantha",
    review:
      "I was so impressed with the quality of the products and the customer service. I will definitely be shopping here again.",
  },
  {
    id: 3,
    name: "John",
    review:
      "I love the quality of the products and the customer service is amazing. I will definitely be shopping here again.",
  },
  {
    id: 4,
    name: "Jane",
    review:
      "I was so impressed with the quality of the products and the customer service. I will definitely be shopping here again.",
  },
];

const ReviewsHome = () => {
  return (
    <div className="mt-[75px]">
      <h2 className="text-[28.4px]/[30px] font-black uppercase tracking-normal text-[#FFFFFF] md:text-[64px]/[64px]">
      <AnimatedShinyText> What Our Customers Say</AnimatedShinyText>
      </h2>
      <p className="text-[14px] font-light tracking-normal">
        Insightful <span className="italic">Reviews</span> from{" "}
        <span className="font-bold">Satisfied</span> Shoppers.
      </p>
      <div className="mt-[25px]">
        <CarouselReviews slides={slides} options={{ loop: true, align: 'start' }} />
      </div>
    </div>
  );
};

export default ReviewsHome;
