import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';

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
                ? 'bg-white/80 backdrop-blur-xl border-[#1A73E8] text-black shadow-md'
                : 'bg-transparent border-transparent text-[#1A73E8]'
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
                  ${isActive
                    ? 'text-[#1A73E8] font-semibold underline underline-offset-4'
                    : scrolled
                    ? 'hover:text-[#1A73E8]'
                    : 'hover:text-[#000000]/70'}
                `}
              >
                {language === 'urdu' ? link.label.ur : link.label.en}
              </a>
            );
          })}

          <button
            onClick={toggleLanguage}
            className={`
              ml-4 text-xs font-semibold px-4 py-1 rounded-full shadow-sm border transition-all duration-500
              ${
                scrolled
                  ? 'bg-[#1A73E8] text-white hover:bg-blue-600'
                  : 'bg-transparent border-[#1A73E8] text-[#1A73E8] hover:bg-[#E0E0E0]'
              }
            `}
          >
            {language === 'urdu' ? 'ENGLISH' : 'اردو'}
          </button>
        </div>
        {scrolled && (
          <div className="absolute -bottom-2 left-0 w-full h-12 bg-[radial-gradient(ellipse_at_bottom,_rgba(26,115,232,0.2)_0%,_transparent_80%)] blur-2xl pointer-events-none z-[-1]" />
        )}
      </nav>

      {/* Mobile Hamburger */}
      <div className="fixed top-6 left-6 z-50 md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`
            text-2xl p-2 rounded-md backdrop-blur border border-[#1A73E8] 
            ${scrolled ? 'bg-white/90 text-black' : 'bg-transparent text-[#1A73E8]'}
          `}
          aria-label="Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-2xl z-40 flex flex-col justify-center items-center gap-8 text-black text-2xl font-body transition-all">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`
                  transition-colors duration-300
                  ${isActive ? 'text-[#1A73E8] font-semibold' : 'hover:text-[#1A73E8]'}
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
            className="mt-6 bg-[#1A73E8] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition"
          >
            {language === 'urdu' ? 'ENGLISH' : 'اردو'}
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
