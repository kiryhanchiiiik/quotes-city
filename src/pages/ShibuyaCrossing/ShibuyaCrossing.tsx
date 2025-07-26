import { useState } from "react";
import { usePageClose } from "../../hooks/usePageClose";
import { motion } from "framer-motion";

import GlowingIcon from "../../components/GlowingIcon/GlowingIcon";
import PageCloseOverlay from "../../components/PageCloseOverlay/PageCloseOverlay";
import TeleportReveal from "../../components/TeleportGate/TeleportReveal";
import FlagConfetti from "../../components/FlagConfetti/FlagConfetti";

import closeBtn from "../../assets/img/close.svg";
import japan from "../../assets/img/flags/japan.png";
import css from "./ShibuyaCrossing.module.scss";

const ShibuyaCrossing = () => {
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
          src="/shibuya-crossing.mp4"
          autoPlay
          muted
          loop
          playsInline
          className={css.video}
        />

        <FlagConfetti src={japan} count={200} visible={showConfetti} />

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
            David Mitchell, Number9Dream (2001)
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
            “The city’s heartbeat is the crossing —{" "}
            <span className={css.redSpan}>
              where countless lives intersect for just a moment.
            </span>
            ”
          </motion.p>

          <img
            src={japan}
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

export default ShibuyaCrossing;
