import { motion } from "framer-motion";
import css from "./FlagConfetti.module.scss";

type Props = {
  src: string;
  count?: number;
  duration?: number;
  visible: boolean;
};

const FlagConfetti = ({ src, count = 100, duration = 3, visible }: Props) => {
  if (!visible) return null;

  const pieces = Array.from({ length: count }).map((_, i) => {
    const angle = Math.random() * 2 * Math.PI;
    const distance = 300 + Math.random() * 300;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    return (
      <motion.img
        key={i}
        src={src}
        alt="flag"
        initial={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 0.4 }}
        animate={{
          x,
          y,
          rotate: Math.random() * 720,
          opacity: 0,
        }}
        transition={{ duration, ease: "easeOut" }}
        className={css.confettiPiece}
      />
    );
  });

  return <div className={css.confettiContainer}>{pieces}</div>;
};

export default FlagConfetti;
