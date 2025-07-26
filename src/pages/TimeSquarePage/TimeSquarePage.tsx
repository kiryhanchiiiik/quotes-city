import { useState } from "react";
import { usePageClose } from "../../hooks/usePageClose";
import { motion } from "framer-motion";

import GlowingIcon from "../../components/GlowingIcon/GlowingIcon";
import PageCloseOverlay from "../../components/PageCloseOverlay/PageCloseOverlay";
import TeleportReveal from "../../components/TeleportGate/TeleportReveal";
import FlagConfetti from "../../components/FlagConfetti/FlagConfetti";

import closeBtn from "../../assets/img/close.svg";
import usa from "../../assets/img/flags/usa.png";
import css from "./TimeSquarePage.module.scss";

const TimeSquarePage = () => {
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
          src="/time-square.mp4"
          autoPlay
          muted
          loop
          playsInline
          className={css.video}
        />

        <FlagConfetti src={usa} count={200} visible={showConfetti} />

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
            Tom Wolfe, The Bonfire of the Vanities, (1987)
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
            “One belongs to New York instantly,{" "}
            <span className={css.redSpan}>
              one belongs to it as much in five minutes as in five years
            </span>
            ”
          </motion.p>

          <img
            src={usa}
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

export default TimeSquarePage;
