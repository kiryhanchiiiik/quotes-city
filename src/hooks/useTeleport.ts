import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useTeleport = () => {
  const [isTeleporting, setIsTeleporting] = useState(false);
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();

  const handleTeleport = (path: string, cityName: string) => {
    setDestination(cityName);
    setIsTeleporting(true);

    setTimeout(() => {
      navigate(path, { state: { fromTeleport: true, cityName } });
    }, 2300);
  };

  return { isTeleporting, destination, handleTeleport };
};
