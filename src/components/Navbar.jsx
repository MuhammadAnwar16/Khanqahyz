import { FiMenu, FiX } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  return () => {
    document.body.style.overflow = '';
  };
}, [menuOpen]);

  const links = [
    { path: '/', label: { en: 'Home', ur: 'صفحہ اول' } },
    { path: '/about', label: { en: 'About', ur: 'تعارف' } },
    { path: '/shajra', label: { en: 'Lineage', ur: 'شجرہ' } },
    { path: '/publications', label: { en: 'Publications', ur: 'اشاعت' } },
    { path: '/contact', label: { en: 'Contact', ur: 'رابطہ' } },
  ];

  return (
    <>
        {/* Desktop Navbar */}
<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-in-out">
  <div
    className={`
      hidden md:flex rounded-full px-6 py-2 items-center font-body gap-6
      transition-all duration-700 ease-in-out border 
      ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-border text-white shadow-md'
          : 'bg-transparent border-transparent text-black '
      }
    `}
  >
    {links.map((link) => {
      const isActive = location.pathname === link.path;
      return (
        <a
          key={link.path}
          href={link.path}
          className={`
            px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
            transform hover:scale-150 hover:font-bold
            ${
              isActive
                ? scrolled
                  ? 'text-white underline underline-offset-4'
                  : 'text-black underline underline-offset-4'
                : scrolled
                ? 'text-white/80 hover:text-white'
                : 'text-black hover:text-black'
            }
          `}
        >
          {language === 'urdu' ? link.label.ur : link.label.en}
        </a>
      );
    })}

    <button
      onClick={toggleLanguage}
      className={`
        ml-4 text-xs font-semibold px-4 py-1 rounded-full shadow-sm border border-border transition-all duration-300
        transform hover:scale-105 hover:font-bold
        ${
          scrolled
            ? 'bg-white text-black hover:bg-hover'
            : 'bg-black text-white hover:subtext'
        }
      `}
    >
      {language === 'urdu' ? 'ENGLISH' : 'اردو'}
    </button>
  </div>

  {scrolled && (
    <div className="absolute -bottom-2 left-0 w-full h-12 bg-[radial-gradient(ellipse_at_bottom,_rgba(0,0,0,0.05)_0%,_transparent_80%)] blur-2xl pointer-events-none z-[-1]" />
  )}
</nav>

      {/* Mobile Hamburger Icon */}
      <div className="fixed top-6 left-6 z-50 md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`
            text-2xl p-2 rounded-md backdrop-blur border border-border
            ${scrolled ? 'bg-black/90 text-white' : 'bg-transparent text-subtext'}
          `}
          aria-label="Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 flex flex-col justify-center items-center gap-8 text-white  text-2xl font-body transition-all">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`
                  transition-colors duration-300
                  ${isActive ? 'text-white font-bold' : 'hover:text-subtext'}
                `}
              >
                {language === 'urdu' ? link.label.ur : link.label.en}
              </a>
            );
          })}
          <button
            onClick={() => {
              toggleLanguage();
              setMenuOpen(false);
            }}
            className="mt-6 bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-hover transition"
          >
            {language === 'urdu' ? 'ENGLISH' : 'اردو'}
          </button>
        </div>
      )}
    </>
  );
};


export default Navbar;