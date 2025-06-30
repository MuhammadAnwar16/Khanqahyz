import React from "react";
import { useLanguage } from "../context/LanguageContext";

const CurrentNasheenSection = () => {
  const { language } = useLanguage();

  return (
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
            {language === "urdu" ? "موجودہ سجادہ نشین" : "Current Sajjada Nasheen"}
          </h2>

          <p
            className={`text-lg  text-black/70 leading-loose mb-4 ${
              language === "urdu" ? "font-urdu text-right" : "font-body"
            }`}
          >
            {language === "urdu"
              ? "حضرت پیر صاحب قبلہ دامت برکاتہم، موجودہ سجادہ نشین، روحانیت، اخلاص، اور سنت کی روشنی میں لوگوں کی رہنمائی فرما رہے ہیں۔ آپ کی تعلیمات سلوک، اخلاق، اور ذکرِ الٰہی پر مشتمل ہیں۔"
              : "Hazrat Pir Sahib Qibla (Damat Barakatuhum), the present spiritual custodian, guides people through sincerity, spirituality, and the Sunnah. His teachings emphasize inner purification, remembrance, and service."}
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
  );
};

export default CurrentNasheenSection;
