import React from "react";
import { useLanguage } from "../context/LanguageContext";

const HeroSection = () => {
  const { language } = useLanguage();

  return (
    <section
      id="hero"
      className="relative bg-cover bg-center bg-no-repeat text-white min-h-screen flex items-center justify-center px-6 md:px-20 py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/masjid.jpg')", 
      }}
    >
      {/* Dark spiritual overlay for readability and mood */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

      {/* Optional sacred pattern over the image (very subtle) */}
      <div className="absolute inset-0 bg-[url('/patterns/sacred-bg.svg')] bg-repeat opacity-5 pointer-events-none z-0" />

      {/* Decorative glowing orb (optional spiritual design) */}
      <div className="absolute w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full border border-border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 blur-3xl opacity-20" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
          {language === "urdu"
            ? "خانقاہ یاسین زئی میں خوش آمدید"
            : "Welcome to Khanqah Yaseen Zai"}
        </h1>

        <p className="text-base font-urdu sm:text-lg md:text-xl font-nastaliq text-white/90 leading-relaxed max-w-2xl mx-auto mb-8">
          {language === "urdu"
            ? "ایک روحانی مرکز جہاں دلوں کو سکون، ذکرِ الٰہی، اور روحانی تربیت میسر آتی ہے۔"
            : "A spiritual sanctuary for remembrance, peace, and divine connection."}
        </p>

        <div className="text-sm md:text-base italic text-white tracking-wide">
          {language === "urdu"
            ? "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ"
            : "Verily, in the remembrance of Allah do hearts find rest. (Qur’an 13:28)"}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
