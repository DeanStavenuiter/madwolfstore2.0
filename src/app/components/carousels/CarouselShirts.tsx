"use client";

import React, { useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "../../library/functions/formatPrice";

type SlideType = {
  id: string;
  webM: string;
  mp4: string;
  price: number;
  name: string;
};

interface EmblaCarouselProps {
  slides: SlideType[];
  options?: EmblaOptionsType;
}

type EmblaOptionsType = {
  loop: boolean;
  align: "start" | "center" | "end";
};

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 5000 }),
  ]);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const currentIndex = emblaApi.selectedScrollSnap();
      videoRefs.current.forEach((video, index) => {
        if (video) {
          if (index === currentIndex) {
            video.play();
          } else {
            video.pause();
            video.currentTime = 0; // Reset the video to the beginning
          }
        }
      });
    };

    emblaApi.on("select", onSelect);

    // Play the first video initially
    if (videoRefs.current[0]) {
      videoRefs.current[0].play();
    }

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="embla relative z-10">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div
              className="embla__slide relative hover:cursor-pointer"
              key={slide.id}
            >
              <Link href={`/products/${slide.id}`}>
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el!;
                  }}
                  className="embla__slide__number"
                  muted
                  loop
                >
                  <source src={slide.webM} type="video/webm" />
                  <source src={slide.mp4} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="embla__slide__name text-[#FFFFFF]">
                  <div className="flex items-center gap-2">
                    <Image
                      alt={"white madwolf logo"}
                      src={"/logo/logo_wit.webp"}
                      width={20}
                      height={20}
                    />
                    <h2 className="uppercase font-bold text-[20px]">madwolf</h2>
                  </div>
                  <h3 className="font-light text-[14.5px] text-[#eaeaea] italic">
                    {slide.name}
                  </h3>
                  <p className="font-medium">{formatPrice(slide.price)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
