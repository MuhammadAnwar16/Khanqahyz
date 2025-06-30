import React from "react";
import { useLanguage } from "../context/LanguageContext";

const HeroSection = () => {
  const { language } = useLanguage();

  return (
    <section
      id="hero"
      className="relative bg-white text-black min-h-screen flex items-center justify-center px-6 md:px-20 py-24 overflow-hidden"
    >
      {/* Sacred Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/patterns/sacred-bg.svg')] bg-center bg-cover opacity-5 pointer-events-none" />

      {/* Optional Light Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#F5F5F5] via-white to-white opacity-80 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-[#1A73E8] mb-6 leading-tight">
          {language === "urdu"
            ? "خانقاہ یاسین زئی میں خوش آمدید"
            : "Welcome to Khanqah Yaseen Zai"}
        </h1>

        <p className="text-lg md:text-xl font-body text-[#4A4A4A] max-w-2xl mx-auto mb-8 leading-relaxed">
          {language === "urdu"
            ? "ایک روحانی مرکز جہاں دلوں کو سکون، ذکرِ الٰہی، اور روحانی تربیت میسر آتی ہے۔"
            : "A spiritual sanctuary for remembrance, peace, and divine connection."}
        </p>

        <div className="text-sm italic text-[#1A73E8] mt-6 tracking-wide">
          {language === "urdu"
            ? "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ"
            : "Verily, in the remembrance of Allah do hearts find rest. (Qur’an 13:28)"}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
