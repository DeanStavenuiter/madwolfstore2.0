"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./CarouselButtonArrowsWhite";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ProductContentProps } from "@/app/products/[id]/page";

type PropType = {
  content: ProductContentProps[];
  options?: EmblaOptionsType;
};

const CarouselProduct: React.FC<PropType> = (props) => {
  const { content, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  let webM = "";
  let mp4 = "";

  if (content[0].webMFile) {
    webM = content[0].webMFile;
  }
  if (content[0].mp4File) {
    mp4 = content[0].mp4File;
  }

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const updatedContent = content.map(({ mp4File, webMFile, ...rest }) => rest);

  const imageData = updatedContent.flatMap((item) => {
    return [
      {
        imageUrl: item.imageUrl1,
        altText: item.imageUrl1Alt,
      },
      {
        imageUrl: item.imageUrl2,
        altText: item.imageUrl2Alt,
      },
      {
        imageUrl: item.imageUrl3,
        altText: item.imageUrl3Alt,
      },
      {
        imageUrl: item.imageUrl4,
        altText: item.imageUrl4Alt,
      },
    ];
  });


  return (
    <section className="embla md:hidden relative z-10 pb-[18px]">
      <div className="embla__viewport pl-2" ref={emblaRef}>
        <div className="embla__container">
          {imageData.map((image, index) => {
            return (
              <div
                className="flex-grow-0 flex-shrink-0 basis-[34%] md:basis-[15%] pl-2 m-w-0 "
                key={index}
              >
                <div className="flex flex-col">
                  <div className="w-[100px] h-[140px] md:w-[170px] md:h-[240px] bg-[#1F1F1F] rounded-[5px]">
                    <Image
                      key={index}
                      src={image.imageUrl || ""}
                      alt={image.altText || ""}
                      width={170}
                      height={240}
                      className="rounded-[5px]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute top-[35%] left-0 sm:hidden">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      </div>
      <div className="absolute top-[35%] right-0 sm:hidden">
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
};

export default CarouselProduct;
