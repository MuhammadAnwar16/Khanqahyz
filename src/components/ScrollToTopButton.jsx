import React, { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 transition-all duration-300 ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="p-3 rounded-full bg-white text-black hover:bg-[#1A73E8] hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl ring-1 ring-gray-200"
      >
        <FiArrowUp className="text-xl" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
