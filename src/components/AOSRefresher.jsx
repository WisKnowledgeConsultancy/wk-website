// src/components/AOSRefresher.jsx
import { useEffect } from "react";
import AOS from "aos";

const AOSRefresher = () => {
  useEffect(() => {
    const onScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
};

export default AOSRefresher;
