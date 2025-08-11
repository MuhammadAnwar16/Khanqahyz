import React from "react";
import { useLanguage } from "../context/LanguageContext";

const CurrentNasheenSection = () => {
  const { language } = useLanguage();

  return (
    <div dir={language === 'urdu' ? 'rtl' : 'ltr'}>
    <section
      id="sajjada-nasheen"
      className="bg-white text-black py-24 px-6 md:px-24 font-body "
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative group max-w-xl mx-auto overflow-hidden rounded-2xl shadow-lg border border-border">
  {/* Main Image */}
  <img
    src="/images/masnad-nasheen.jpg"
    alt="Current Sajjada Nasheen"
    className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
  />

  {/* Subtle Gradient Overlay for Depth */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500"></div>

  {/* Text Overlay */}
  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-center">
    <p
      className={`text-lg md:text-xl text-white font-serif tracking-wide ${
        language === "urdu"
          ? "font-urdu text-right leading-relaxed"
          : "font-body text-center"
      }`}
    >
      {language === "urdu"
        ? "حضرت مولانا ڈاکٹر صاحبزادہ رشید احمد صاحب"
        : "Hazrat Maulana Dr. Sahibzada Rasheed Ahmed Sahib"}
    </p>
  </div>
</div>


        {/* Textual Info */}
        <div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-black border-b-2 border-border inline-block pb-2">
            {language === "urdu" ? "موجودہ مسند نشین" : "Current Masnad-e-Nasheen"}
          </h2>

          <p
            className={`text-lg  text-black/70 leading-loose mb-4 ${
              language === "urdu" ? "font-urdu text-right" : "font-body"
            }`}
          >
            {language === "urdu"
              ? "حضرت مولانا ڈاکٹر صاحبزادہ رشید احمد صاحب دامت برکاتھم خانقاہ کے موجودہ مسند نشین ہیں۔ آپ شریعت، طریقت اور سیاست کے جامع ہیں اور اسلاف کے طریقے پر دین اسلام کے ان تینوں شعبوں میں لوگوں کی تربیت فرما رہے ہیں۔"
              : "Hazrat Maulana Dr. Sahibzada Rasheed Ahmed Sahib Damat Barakatuhum is the current Masnad-e-Nasheen of the Khanqah. He is a comprehensive scholar in Shariah, Tariqat, and politics, training people in all three fields according to the ways of our predecessors."}
          </p>

          <p className="text-sm italic text-subtext">
            {language === "urdu"
              ? "اللہ تعالیٰ آپ کے فیض کو عام فرمائے۔"
              : "May Allah spread his blessings far and wide."}
          </p>
        </div>
      </div>

      {/* Optional Quote */}
      <div
        className={`mt-16 text-center italic text-black/70 text-lg max-w-3xl mx-auto ${
          language === "urdu" ? "font-urdu " : ""
        }`}
      >
        ❝{" "}
        {language === "urdu"
          ? "روحانیت وہ چراغ ہے جو اندھیروں میں بھی روشنی دیتا ہے۔"
          : "Spirituality is a lamp that lights even in the darkest of nights."}
        ❞
      </div>
    </section>
    </div>
  );
};

export default CurrentNasheenSection;
