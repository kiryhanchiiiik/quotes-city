import { motion } from "framer-motion";
import css from "./GlowingIcon.module.scss";

interface GlowingIconProps {
  src: string;
  alt: string;
  className?: string;
  rotate?: number;
  onClick: () => void;
}

const GlowingIcon = ({
  src,
  alt,
  className = "",
  rotate = 0,
  onClick,
}: GlowingIconProps) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={`${css.icon} ${className}`}
      initial={{ rotate }}
      whileHover={{
        scale: 1.1,
        rotate,
        filter: "brightness(1.4) drop-shadow(0 0 12px rgba(255,255,255,0.6))",
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      onClick={onClick}
    />
  );
};

export default GlowingIcon;
