import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const usePageClose = (duration = 1000) => {
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

  const handleClose = (to: string) => {
    setIsClosing(true);
    setTimeout(() => navigate(to), duration);
  };

  return { isClosing, handleClose };
};
