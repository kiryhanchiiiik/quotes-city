import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useVideoCarousel } from "../../hooks/useVideoCarousel";
import { useTeleport } from "../../hooks/useTeleport";
import { icons } from "./iconsData";
import GlowingIcon from "../GlowingIcon/GlowingIcon";
import TeleportOverlay from "../TeleportOverlay/TeleportOverlay";
import css from "./HeroSection.module.scss";

const videos = ["/video1.mp4", "/video2.mp4", "/video3.mp4", "/video4.mp4"];

const HeroSection = () => {
  const { currentIndex, nextIndex, handleTimeUpdate, handleVideoEnded } =
    useVideoCarousel(videos);
  const { isTeleporting, destination, handleTeleport } = useTeleport();
  const [isReadyToRender, setIsReadyToRender] = useState(false);
  const hasMounted = useRef(false);

  useEffect(() => {
    hasMounted.current = true;
    setIsReadyToRender(true);
  }, []);

  return (
    <section className={css.hero}>
      {isTeleporting && <TeleportOverlay destination={destination} />}

      <AnimatePresence>
        <motion.video
          key={currentIndex}
          src={videos[currentIndex]}
          autoPlay
          muted
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnded}
          className={css.videoBg}
          initial={{ opacity: 1 }}
          animate={{ opacity: nextIndex === null ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
        {isReadyToRender && nextIndex !== null && (
          <motion.video
            key={nextIndex}
            src={videos[nextIndex]}
            autoPlay
            muted
            className={css.videoBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            onEnded={handleVideoEnded}
          />
        )}
      </AnimatePresence>

      <div className={css.overlay}>
        <motion.h1
          className={css.title}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          The City of Quotes
        </motion.h1>

        <motion.p
          className={css.subtitle}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
        >
          “Your life is happening right now.
          <span className={css.redSpan}> Don’t snooze and lose</span>”
        </motion.p>

        {icons.map(({ src, alt, path, city, className, rotate }) => (
          <GlowingIcon
            key={alt}
            src={src}
            alt={alt}
            className={`${css.icon} ${css[className]}`}
            rotate={rotate}
            onClick={() => handleTeleport(path, city)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
