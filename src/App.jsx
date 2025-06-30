import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import ScrollToTopButton from './components/ScrollToTopButton';

import FamilyTree from './pages/FamilyTree'; 
import Publications from './pages/Publications';
import CurrentNasheenSection from './components/CurrentNasheenSection';

const HomePage = () => (
  <>
    <HeroSection />
    <AboutSection />
    <CurrentNasheenSection/>
    <EventsSection />
    <GallerySection />
  </>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/shajra" element={<FamilyTree />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
