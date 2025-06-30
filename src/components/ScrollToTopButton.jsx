import React, { useEffect, useState, useRef } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 300 && currentScrollY > lastScrollY.current) {
        setVisible(true); // Show only when scrolling down
      } else {
        setVisible(false); // Hide when scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`
        fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 transition-all duration-300
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}
      `}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="p-3 rounded-full bg-black text-white hover:bg-hover transition-all duration-300 shadow-lg hover:shadow-2xl ring-1 ring-border"
      >
        <FiArrowUp className="text-xl" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
