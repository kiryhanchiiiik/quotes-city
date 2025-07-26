import { motion, AnimatePresence } from "framer-motion";
import css from "./PageCloseOverlay.module.scss";

interface PageCloseOverlayProps {
  isClosing: boolean;
  duration?: number;
}

const PageCloseOverlay = ({
  isClosing,
  duration = 1,
}: PageCloseOverlayProps) => {
  return (
    <AnimatePresence>
      {isClosing && (
        <motion.div
          className={css.closingOverlay}
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(15px)" }}
          exit={{ opacity: 0 }}
          transition={{ duration, ease: "easeInOut" }}
        />
      )}
    </AnimatePresence>
  );
};

export default PageCloseOverlay;
