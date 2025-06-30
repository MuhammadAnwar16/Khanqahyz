import React from "react";
import { useLanguage } from "../context/LanguageContext";

const quotes = [
  {
    ur: "اللَّهُمَّ اجعلني من الذاکرین – اے اللہ! مجھے اپنا ذکر کرنے والوں میں شامل فرما۔",
    en: "O Allah, make me among those who remember You often.",
  },
  {
    ur: "اللَّهُمَّ اغفر لي ولوالدي – اے اللہ! مجھے اور میرے والدین کو بخش دے۔",
    en: "O Allah, forgive me and my parents.",
  },
  {
    ur: "رَبِّ زِدْنِي عِلْمًا – اے میرے رب! میرے علم میں اضافہ فرما۔",
    en: "My Lord, increase me in knowledge.",
  },
  {
    ur: "يا حي يا قيوم برحمتك أستغيث – اے زندہ، قائم رہنے والے! میں تیری رحمت سے فریاد کرتا ہوں۔",
    en: "O Ever-Living, O Sustainer, I seek help through Your mercy.",
  },
  {
    ur: "أَفْضَلُ الذِّكْرِ: لا إِلَهَ إِلَّا الله – سب سے افضل ذکر: لا إِلَهَ إِلَّا الله",
    en: "The best remembrance is: La ilaha illallah. (Tirmidhi)",
  },
  {
    ur: "إنما الأعمال بالنيات – اعمال کا دارومدار نیتوں پر ہے۔",
    en: "Actions are judged by intentions. (Bukhari & Muslim)",
  },
  {
    ur: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ – سب سے بہتر انسان وہ ہے جو لوگوں کو نفع پہنچائے۔",
    en: "The best of people are those who benefit others. (Daraqutni)",
  },
  {
    ur: "لا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا – غم نہ کرو، بے شک اللہ ہمارے ساتھ ہے۔",
    en: "Do not grieve; indeed, Allah is with us. (Qur’an 9:40)",
  },
  {
    ur: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ – اور وہ تمہارے ساتھ ہے جہاں کہیں تم ہو۔",
    en: "And He is with you wherever you are. (Qur’an 57:4)",
  },
  {
    ur: "مَنْ صَمَتَ نَجَا – جو خاموش رہا وہ نجات پا گیا۔",
    en: "Whoever remains silent is saved. (Tirmidhi)",
  },
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

const Footer = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-24 font-body border-t border-border">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-center md:text-left">

        {/* Identity */}
        <div>
          <h2 className="text-2xl font-heading mb-3">{
            language === "urdu" ? "خانقاہ یاسین زئی" : "Khanqah Yaseen Zai"
          }</h2>
          <p className="text-sm italic text-subtext">
            {language === "urdu"
              ? "ذکرِ الٰہی سے دلوں کو سکون ملتا ہے۔"
              : "Truly, in the remembrance of Allah do hearts find rest."}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">{
            language === "urdu" ? "روابط" : "Quick Links"
          }</h3>
          <ul className="space-y-2 text-sm text-subtext">
            {[
              { href: "#about", ur: "تعارف", en: "About" },
              { href: "#events", ur: "تقریبات", en: "Events" },
              { href: "#gallery", ur: "گیلری", en: "Gallery" },
              { href: "#contact", ur: "رابطہ", en: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white transition">
                  {language === "urdu" ? link.ur : link.en}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">{
            language === "urdu" ? "رابطہ" : "Contact"
          }</h3>
          <ul className="text-sm space-y-2 text-subtext">
            <li>📞 <span className="font-medium text-white">+92 300 1234567</span></li>
            <li>📱 WhatsApp:{" "}
              <a
                href="https://wa.me/923001234567"
                className="hover:text-white font-medium transition"
                target="_blank" rel="noreferrer"
              >
                +92 300 1234567
              </a>
            </li>
            <li>📫 {language === "urdu" ? "پوسٹ کوڈ: 29110" : "Postal Code: 29110"}</li>
            <li>📍 <span className="leading-snug font-medium text-white">
              {language === "urdu"
                ? "خانقاہ یاسین زئی، پنیالہ، تحصیل پروآ، ضلع ڈیرہ اسماعیل خان، خیبر پختونخوا"
                : "Khanqah Yaseen Zai, Panyala, Tehsil Paharpur, District D.I. Khan, KP"}
            </span></li>
          </ul>
        </div>

        {/* Donations */}
        <div>
          <ul className="text-sm space-y-1 mb-4 text-subtext">
            <li><span className="font-semibold text-white">{language === "urdu" ? "اکاؤنٹ کا نام" : "Account Name"}:</span> Khanqah Yaseen Zai Welfare Trust</li>
            <li><span className="font-semibold text-white">{language === "urdu" ? "بینک" : "Bank"}:</span> Meezan Bank</li>
            <li><span className="font-semibold text-white">{language === "urdu" ? "اکاؤنٹ نمبر" : "Account No"}:</span> 0123-4567890-1</li>
            <li><span className="font-semibold text-white">IBAN:</span> PK67MEZN00012345678901</li>
          </ul>
          <button
            onClick={toggleLanguage}
            className="mt-6 bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-hover transition"
          >
            {language === "urdu" ? "ENGLISH" : "اردو"}
          </button>
        </div>
      </div>

      {/* Quote */}
      <div className="mt-12 text-center text-sm italic text-subtext max-w-xl mx-auto">
        ❝ {language === "urdu" ? randomQuote.ur : randomQuote.en} ❞
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-subtext border-t border-border pt-4">
        © {new Date().getFullYear()} Khanqah Yaseen Zai —{" "}
        {language === "urdu" ? "تمام حقوق محفوظ ہیں۔" : "All rights reserved."}
      </div>
    </footer>
  );
};

export default Footer;
