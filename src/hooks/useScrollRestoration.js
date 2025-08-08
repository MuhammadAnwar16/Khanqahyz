import { useEffect } from "react";

const useScrollRestoration = () => {
  useEffect(() => {
    const savedScrollY = sessionStorage.getItem("scroll-position");
    if (savedScrollY) {
      window.scrollTo(0, parseInt(savedScrollY, 10));
    }

    const handleBeforeUnload = () => {
      sessionStorage.setItem("scroll-position", window.scrollY.toString());
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
};

export default useScrollRestoration;
