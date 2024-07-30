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
import Image from "next/image";

type PropType = {
  slides: {
    id: string;
    name: string;
    imageUrl1: string | null;
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
      <div className="embla__viewport pl-2" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="flex-grow-0 flex-shrink-0 basis-[34%] md:basis-[15%] pl-2 m-w-0" key={index}>
              <Link href={`/products/art/${slide.id}`} className=" ">
                <div className="flex flex-col">
                  <div className="w-[100px] h-[140px] md:w-[170px] md:h-[240px] bg-[#1F1F1F] rounded-[5px]">
                    <Image
                      src={slide.imageUrl1 || ""}
                      alt={slide.name}
                      width={170}
                      height={240}
                      className={`rounded-[5px] ${
                        slide.imageUrl1 === null ? "hidden" : ""
                      }`}
                    />
                  </div>
                  <h3 className="text-[14px] font-light tracking-normal text-[#FFFFFF]">
                    {slide.name}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-[50px] left-0 sm:hidden">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      </div>
      <div className="absolute top-[50px] right-0 sm:hidden">
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
};
export default CarouselArt;
