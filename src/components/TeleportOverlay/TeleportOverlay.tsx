import { motion } from "framer-motion";
import css from "../HeroSection/HeroSection.module.scss";

interface Props {
  destination: string;
}

const TeleportOverlay = ({ destination }: Props) => (
  <motion.div
    className={css.loadingGate}
    initial={{ height: 0 }}
    animate={{ height: "100vh" }}
    transition={{ duration: 1.2, ease: "easeInOut" }}
  >
    <motion.div
      className={css.loadingText}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      Teleporting to <span className={css.cityName}>{destination}</span>...
    </motion.div>
  </motion.div>
);

export default TeleportOverlay;
