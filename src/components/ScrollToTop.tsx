import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { smoother } from "./Navbar";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    if (smoother) {
      smoother.scrollTo(0, false);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
