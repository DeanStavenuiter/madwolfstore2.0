"use client";

import { useEffect, useRef, useState } from "react";
import { ProductProps } from "../../products/[id]/page";

const VideoPlayer: React.FC<ProductProps> = ({ product }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressBarFillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const showVideos = async () => {
      const video = videoRef.current;
      if (video) {
        await video.play();
        video.pause();
      }
    };
    showVideos();
  }, []);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      console.log("play clicked");
      video.play();
    } else if (video) {
      console.log("pause clicked");
      video.pause();
    }
  };

  const handleMouseOver = async () => {
    if (videoRef.current?.paused) {
      videoRef.current?.play();
    }
  };

  const handleMouseOut = () => {
    if (!videoRef.current?.paused) {
      videoRef.current?.pause();
    }
  };

  return (
    <div className={`relative z-10 flex pb-[13px] items-center w-full`}>
      <div className="max-h-full">
          <video
            ref={videoRef}
            className={`relative`}
            loop
            muted
            autoPlay
            playsInline
            preload="auto"
            onClick={handleVideoClick}
          >
            <source src={product.mp4File} type="video/mp4;codecs=hvc1" />
            <source src={product.webMFile} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div
            ref={progressBarRef}
            className={`h-full w-full cursor-pointer bg-gray-300 `}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{ background: "transparent" }}
          ></div>
      </div>
    </div>
  );
};

export default VideoPlayer;
