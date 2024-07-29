// "use client";
// import React, { useCallback } from "react";
// import { EmblaOptionsType } from "embla-carousel";
// import useEmblaCarousel from "embla-carousel-react";
// import Link from "next/link";
// import { DotButton, useDotButton } from "./CarouselButtonDots";

// type PropType = {
//   slides: {
//     id: number;
//     name: string;
//     review: string;
//   }[];
//   options?: EmblaOptionsType;
// };

// const CarouselReviews: React.FC<PropType> = (props) => {
//   const { slides, options } = props;
//   const [emblaRef, emblaApi] = useEmblaCarousel(options);

//   const { selectedIndex, scrollSnaps, onDotButtonClick } =
//     useDotButton(emblaApi);

//   return (
//     <section className="embla relative">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="flex">
//           {slides.map((slide, index) => (
//             <Link href={`/products/art/${slide.id}`} key={index}>
//               <div className="flex-grow-0 flex-shrink-0 flex flex-col min-w-0 pl-[13px]">
//                 <div className="flex flex-col justify-between w-[270px] h-[190px] bg-[#1F1F1F] rounded-[5px] animate-pulse p-[25px]">
//                   <p className="text-[14px] font-light tracking-normal text-[#FFFFFF]">
//                     {slide.review}
//                   </p>
//                   <span>
//                     - {slide.name}
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       <div className="embla__dots">
//         {scrollSnaps.map((_, index) => (
//           <DotButton
//             key={index}
//             onClick={() => onDotButtonClick(index)}
//             className={"embla__dot".concat(
//               index === selectedIndex ? " embla__dot--selected" : ""
//             )}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };
// export default CarouselReviews;

"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./CarouselButtonDots";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

type PropType = {
  slides: {
    id: number;
    name: string;
    review: string;
  }[];
  options?: EmblaOptionsType;
};

const CarouselReviews: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            // <div className="embla__slide" key={index}>
            //   <div className="embla__slide__number">{index + 1}</div>
            // </div>
            <>
              <div
                key={index}
                className="flex-grow-0 flex-shrink-0 flex flex-col min-w-0 pl-[13px]"
              >
                <div className="flex flex-col justify-between w-[270px] h-[190px] bg-[#1F1F1F] rounded-[5px] animate-pulse p-[25px] ">
                  <p className="text-[14px] font-light tracking-normal text-[#FFFFFF]">
                    {slide.review}
                    
                  </p>
                  <span>- {slide.name}</span>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-[12px]">
        <div className="embla__dots">
          {scrollSnaps.map((snap, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselReviews;
