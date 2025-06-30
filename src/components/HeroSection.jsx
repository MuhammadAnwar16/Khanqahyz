import React from "react";
import { useLanguage } from "../context/LanguageContext";

const HeroSection = () => {
  const { language } = useLanguage();

  return (
    <section
      id="hero"
      className="relative bg-white text-black min-h-screen flex items-center justify-center px-6 md:px-20 py-24 overflow-hidden"
    >
      {/* Sacred Background Pattern (optional SVG or texture) */}
      <div className="absolute inset-0 bg-[url('/patterns/sacred-bg.svg')] bg-center bg-cover opacity-5 pointer-events-none" />

      {/* Gradient Mist Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-mist to-mist opacity-90 z-0" />

      {/* Decorative Circular Glow */}
      <div className="absolute w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full border border-border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 blur-2xl opacity-30" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-black leading-tight mb-6">
          {language === "urdu"
            ? "خانقاہ یاسین زئی میں خوش آمدید"
            : "Welcome to Khanqah Yaseen Zai"}
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-body text-subtext leading-relaxed max-w-2xl mx-auto mb-8">
          {language === "urdu"
            ? "ایک روحانی مرکز جہاں دلوں کو سکون، ذکرِ الٰہی، اور روحانی تربیت میسر آتی ہے۔"
            : "A spiritual sanctuary for remembrance, peace, and divine connection."}
        </p>

        <div className="text-sm md:text-base italic text-black tracking-wide">
          {language === "urdu"
            ? "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ"
            : "Verily, in the remembrance of Allah do hearts find rest. (Qur’an 13:28)"}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
