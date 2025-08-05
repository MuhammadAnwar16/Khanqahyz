import { FiMenu, FiX } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const links = [
    { path: '/', label: { en: 'Home', ur: 'سرورق' } },
    { path: '/about', label: { en: 'About', ur: 'تعارف' } },
    {
      label: { en: 'Lineage', ur: 'شجرہ' },
      submenu: [
        { path: '/shajra', label: { en: 'Shajrah-e-Nasab', ur: 'شجرہ نسب' } },
        { path: '/ShajrahTasawuf', label: { en: 'Shajrah-e-Tasawuf', ur: 'شجرہ تصوف' } },
      ],
    },
    { path: '/publications', label: { en: 'Publications', ur: 'مطبوعات' } },
    { path: '/VideoGallery', label: { en: ' Media ', ur: ' میڈیا' } },
    /*{ path: '/DuasAndSayings', label: { en: ' Quotes ', ur: ' اقوال' } },*/
    { path: '/contact', label: { en: 'Contact', ur: 'رابطہ' } },
  ];

  return (
      <div dir={language === 'urdu' ? 'rtl' : 'ltr'}>
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
                : 'bg-transparent border-transparent text-black'
            }
          `}
        >
          {links.map((link, index) => {
            const isActive = location.pathname === link.path;

            if (link.submenu) {
              return (
                <div key={index} className="relative group">
                  <button
                    className={`
                      flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                      transform hover:scale-150 hover:font-bold
                      ${
                        scrolled
                          ? 'text-white hover:text-white'
                          : 'text-black hover:text-black'
                      }
                    `}
                  >
                    {language === 'urdu' ? link.label.ur : link.label.en}
                    <FaChevronDown className="text-xs mt-[1px] transition-transform duration-300 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown */}
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 bg-white shadow-xl rounded-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-50 overflow-hidden"
                  >
                    {link.submenu.map((sublink, subIndex) => (
                      <a
                        key={subIndex}
                        href={sublink.path}
                        className="block px-4 py-2 text-sm text-black hover:font-bold  hover:bg-hover transition-all"
                      >
                        {language === 'urdu' ? sublink.label.ur : sublink.label.en}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

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

          {/* Language Toggle */}
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

        {/* Gradient under navbar */}
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
        <div className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 flex flex-col justify-center items-center gap-8 text-white text-2xl font-body transition-all">
          {links.map((link, index) => {
            const isActive = location.pathname === link.path;

            if (link.submenu) {
              return (
                <div key={index} className="flex flex-col items-center">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 text-white font-semibold text-2xl"
                  >
                    {language === 'urdu' ? link.label.ur : link.label.en}
                    <FaChevronDown
                      className={`text-xs mt-1 transition-transform duration-300 ${
                        dropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="flex flex-col gap-2 mt-3 text-lg">
                      {link.submenu.map((sublink, subIndex) => (
                        <a
                          key={subIndex}
                          href={sublink.path}
                          onClick={() => setMenuOpen(false)}
                          className="text-subtext hover:text-white transition"
                        >
                          {language === 'urdu' ? sublink.label.ur : sublink.label.en}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

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
    </div>
  );
};

export default Navbar;
