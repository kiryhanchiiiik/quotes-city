import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import css from "./TeleportReveal.module.scss";

interface Props {
  children: React.ReactNode;
}

const TeleportReveal = ({ children }: Props) => {
  const location = useLocation();
  const [showGates, setShowGates] = useState(false);
  const fromTeleport = location.state?.fromTeleport;

  useEffect(() => {
    if (fromTeleport) {
      setShowGates(true);

      const timeout = setTimeout(() => {
        setShowGates(false);
      }, 2300);

      return () => clearTimeout(timeout);
    }
  }, [fromTeleport]);

  return (
    <div className={css.wrapper}>
      {children}

      <AnimatePresence>
        {showGates && (
          <>
            <motion.div
              className={css.leftGate}
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.div
              className={css.rightGate}
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeleportReveal;
