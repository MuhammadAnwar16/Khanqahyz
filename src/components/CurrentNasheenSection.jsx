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
        <div className="overflow-hidden rounded-xl shadow-md border border-border">
          <img
            src="/images/sajjada-nasheen.jpg"
            alt="Current Sajjada Nasheen"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Textual Info */}
        <div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-black border-b-2 border-border inline-block pb-2">
            {language === "urdu" ? "موجودہ مسندہ نشین" : "Current Masnad-e-Nasheen"}
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
