"use client";

import { useEffect, useRef } from "react";
import { ProductProps } from "../../products/[id]/page";

interface VideoFiles {
    webMFile: string;
    mp4File: string;
    }

const VideoplayerCarousel: React.FC<VideoFiles> = ({ webMFile, mp4File }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

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

  return (
    <div className={`relative h-full flex items-center w-full`}>
      <div className="max-h-full">
        <div className="overflow-hidden relative top-0 h-full">
          <video
            ref={videoRef}
            className={`relative top-0 w-full h-full`}
            loop
            muted
            autoPlay
            playsInline
            preload="auto"
            onClick={handleVideoClick}
          >
            <source src={mp4File} type="video/mp4;codecs=hvc1" />
            <source src={webMFile} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoplayerCarousel;
