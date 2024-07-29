"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./CarouselButtonArrows";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

type PropType = {
  slides: {
    id: number;
    name: string;
    image: string;
  }[];
  options?: EmblaOptionsType;
};

const CarouselArt: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <Link href={`/products/art/${slide.id}`} key={index}>
              <div className="flex-grow-0 flex-shrink-0 flex flex-col min-w-0 pl-[13px]">
                <div className="w-[100px] h-[140px] bg-[#1F1F1F] rounded-[5px] animate-pulse"></div>
                <h3 className="text-[14px] font-light tracking-normal text-[#FFFFFF]">
                  {slide.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="absolute top-[50px] left-0">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      </div>
      <div className="absolute top-[50px] right-0">
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
};
export default CarouselArt;
