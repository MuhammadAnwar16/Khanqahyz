import React from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

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
    <div dir={language === "urdu" ? "rtl" : "ltr"}>
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-24 font-body border-t border-gray-800">
      <div className={`max-w-7xl mx-auto grid md:grid-cols-4 gap-12 ${language === "urdu" ? "text-right" : "text-left"}`}>


        {/* Identity */}
        <div>
          <h2 className={`text-2xl font-heading mb-3 text-white ${language === "urdu" ? "text-right" : "text-left"}`}>

            {language === "urdu" ? "خانقاہ یٰسین زئی" : "Khanqah Yaseen Zai"}
          </h2>
          <p className="text-sm italic text-gray-400 leading-relaxed">
            {language === "urdu"
              ? "ذکرِ الٰہی سے دلوں کو سکون ملتا ہے۔"
              : "Truly, in the remembrance of Allah do hearts find rest."}
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            {language === "urdu" ? "لنکس" : "Links"}
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
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
          <h3 className="text-lg font-semibold mb-3 text-white">
            {language === "urdu" ? "رابطہ" : "Contact"}
          </h3>
          <ul className="text-sm space-y-3 text-gray-400">
            <li className="flex items-start gap-2">
              <PhoneIcon className="h-5 w-5 text-gray-400" />
              <span className="text-white font-medium">+92 300 1234567</span>
            </li>
            <li className="flex items-start gap-2">
              <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-400" />
              <a
                href="https://wa.me/923001234567"
                className="hover:text-white font-medium"
                target="_blank" rel="noreferrer"
              >
                WhatsApp: +92 300 1234567
              </a>
            </li>
            <li className="flex items-start gap-2">
              <EnvelopeIcon className="h-5 w-5 text-gray-400" />
              <span>
                {language === "urdu" ? "پوسٹ کوڈ: 29110" : "Postal Code: 29110"}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <MapPinIcon className="h-7 w-7 text-gray-400 mt-[2px]" />
              <span className="leading-snug text-white">
                {language === "urdu"
                  ? "خانقاہ یٰسین زئی، پنیالہ، ڈیرہ اسماعیل خان، خیبر پختونخوا"
                  : "Khanqah Yaseen Zai, Panyala, D.I. Khan, KPK"}
              </span>
            </li>
          </ul>
        </div>

        {/* Donation Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            {language === "urdu" ? "عطیات" : "Donations"}
          </h3>
          <ul className={`text-sm space-y-2 text-gray-400 mb-4 ${language === "urdu" ? "text-right" : "text-left"}`}>

            <li className="flex items-start gap-2">
              <span>
                <strong className="text-white">
                  {language === "urdu" ? "اکاؤنٹ کا نام" : "Account Name"}:
                </strong>{" "}
                Khanqah Yaseen Zai Welfare Trust
              </span>
            </li>
            <li>
              <strong className="text-white">{language === "urdu" ? "بینک" : "Bank"}:</strong>{" "}
              Meezan Bank
            </li>
            <li>
              <strong className="text-white">{language === "urdu" ? "اکاؤنٹ نمبر" : "Account No"}:</strong>{" "}
              0123-4567890-1
            </li>
            <li>
              <strong className="text-white">IBAN:</strong> PK67MEZN00012345678901
            </li>
          </ul>
          <button
            onClick={toggleLanguage}
            className="mt-6 bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
          >
            {language === "urdu" ? "ENGLISH" : "اردو"}
          </button>
        </div>
      </div>

      {/* Random Quote */}
      <div className="mt-12 text-center text-sm italic text-gray-400 max-w-xl mx-auto">
        ❝ {language === "urdu" ? randomQuote.ur : randomQuote.en} ❞
      </div>

      {/* Footer Line */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Khanqah Yaseen Zai —{" "}
        {language === "urdu" ? "تمام حقوق محفوظ ہیں۔" : "All rights reserved."}
      </div>
    </footer>
    </div>
  );
};

export default Footer;
