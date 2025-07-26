import { useState } from "react";
import { usePageClose } from "../../hooks/usePageClose";
import { motion } from "framer-motion";

import GlowingIcon from "../../components/GlowingIcon/GlowingIcon";
import PageCloseOverlay from "../../components/PageCloseOverlay/PageCloseOverlay";
import TeleportReveal from "../../components/TeleportGate/TeleportReveal";
import FlagConfetti from "../../components/FlagConfetti/FlagConfetti";

import closeBtn from "../../assets/img/close.svg";
import china from "../../assets/img/flags/china.png";
import css from "./ShanghaiSkylinePage.module.scss";

const ShanghaiSkylinePage = () => {
  const { isClosing, handleClose } = usePageClose(1000);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleFlagClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };
  return (
    <TeleportReveal>
      <div className={css.hero}>
        <video
          src="/shanghai-skyline.mp4"
          autoPlay
          muted
          loop
          playsInline
          className={css.video}
        />

        <FlagConfetti src={china} count={200} visible={showConfetti} />

        <div className={css.overlay}>
          <motion.h1
            className={css.title}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          >
            Amy Tan, The Joy Luck Club (1989)
          </motion.h1>
          <motion.p
            className={css.subtitle}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 1.2,
              ease: "easeOut",
            }}
          >
            “A city is more than a place in space,{" "}
            <span className={css.redSpan}>it is a drama in time</span>”
          </motion.p>

          <img
            src={china}
            alt="UAE flag"
            className={css.flag}
            onClick={handleFlagClick}
          />
        </div>
        <GlowingIcon
          className={css.closeContainer}
          src={closeBtn}
          alt="Close button"
          onClick={() => handleClose("/")}
        />
        <PageCloseOverlay isClosing={isClosing} />
      </div>
    </TeleportReveal>
  );
};

export default ShanghaiSkylinePage;
