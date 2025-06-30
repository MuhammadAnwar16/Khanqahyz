import React from "react";
import { useLanguage } from "../context/LanguageContext";

const EventsSection = () => {
  const { language } = useLanguage();

  const events = [
    {
      id: 1,
      title: {
        urdu: "ماہانہ محفلِ ذکر",
        english: "Monthly Mehfil-e-Zikr",
      },
      date: {
        urdu: "ہر مہینے کی پہلی جمعرات",
        english: "First Thursday of every month",
      },
      description: {
        urdu: "ذکرِ الٰہی، درود و سلام، اور اجتماعی دعا کی محفل۔",
        english: "A gathering of remembrance, salawat, and collective prayer.",
      },
    },
    {
      id: 2,
      title: {
        urdu: "سالانہ عرس شریف",
        english: "Annual Urs Sharif",
      },
      date: {
        urdu: "14 ربیع الثانی",
        english: "14th Rabi-ul-Thani",
      },
      description: {
        urdu: "حضرت پیر صاحب کے وصال کی یاد میں سالانہ اجتماع۔",
        english: "Commemorating the spiritual legacy of Peer Sahib.",
      },
    },
    {
      id: 3,
      title: {
        urdu: "درس قرآن و حدیث",
        english: "Weekly Dars-e-Qur’an & Hadith",
      },
      date: {
        urdu: "ہر جمعہ بعد نمازِ عصر",
        english: "Every Friday after Asr prayer",
      },
      description: {
        urdu: "قرآن و سنت کی روشنی میں روحانی اصلاح۔",
        english: "Spiritual insights from the Qur’an and Sunnah.",
      },
    },
  ];

  return (
    <section
      id="events"
      className="bg-white text-black py-24 px-6 md:px-24 font-body border-t border-[#E0E0E0]"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-heading text-electric mb-12 border-b-2 border-electric inline-block pb-2">
          {language === "urdu" ? "روحانی تقریبات" : "Spiritual Events"}
        </h2>

        {/* Event Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-[#F5F5F5] text-black rounded-2xl p-6 shadow-md border border-[#E0E0E0] hover:shadow-lg hover:border-[#1A73E8] transition duration-300 text-left"
            >
              <h3 className="text-xl font-heading font-semibold text-electric mb-2">
                {language === "urdu" ? event.title.urdu : event.title.english}
              </h3>
              <p className="text-sm text-[#4A4A4A] mb-2 font-medium">
                {language === "urdu" ? event.date.urdu : event.date.english}
              </p>
              <p className="text-base text-[#2C2C2C] leading-relaxed">
                {language === "urdu"
                  ? event.description.urdu
                  : event.description.english}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
