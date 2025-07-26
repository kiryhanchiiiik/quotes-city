import { useState } from "react";

export const useVideoCarousel = (videos: string[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    const timeLeft = video.duration - video.currentTime;

    if (timeLeft < 1 && !isTransitioning) {
      setIsTransitioning(true);
      setNextIndex((currentIndex + 1) % videos.length);
    }
  };

  const handleVideoEnded = () => {
    if (nextIndex !== null) {
      setCurrentIndex(nextIndex);
      setNextIndex(null);
      setIsTransitioning(false);
    }
  };

  return {
    currentIndex,
    nextIndex,
    handleTimeUpdate,
    handleVideoEnded,
  };
};
