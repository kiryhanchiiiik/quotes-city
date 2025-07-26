import { useState } from "react";
import { motion } from "framer-motion";
import { usePageClose } from "../../hooks/usePageClose";

import TeleportReveal from "../../components/TeleportGate/TeleportReveal";
import GlowingIcon from "../../components/GlowingIcon/GlowingIcon";
import PageCloseOverlay from "../../components/PageCloseOverlay/PageCloseOverlay";
import FlagConfetti from "../../components/FlagConfetti/FlagConfetti";

import closeBtn from "../../assets/img/close.svg";
import uae from "../../assets/img/flags/uae.png";
import css from "./BurjKhalifaPage.module.scss";

const BurjKhalifaPage = () => {
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
          src="/burj-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className={css.video}
        />

        <FlagConfetti src={uae} count={200} visible={showConfetti} />

        <div className={css.overlay}>
          <motion.h1 className={css.title}>
            Charlotte Brontë, Jane Eyre (1847)
          </motion.h1>
          <motion.p className={css.subtitle}>
            “Life appears to me too short{" "}
            <span className={css.redSpan}>
              to be spent in nursing animosity or registering wrongs
            </span>
            ”
          </motion.p>

          <img
            src={uae}
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

export default BurjKhalifaPage;
