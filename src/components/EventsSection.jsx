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
      className="bg-white text-black py-24 px-6 md:px-24 font-body relative overflow-hidden"
    >
    

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-black mb-6 border-b-2 border-border inline-block pb-2">
          {language === "urdu" ? "روحانی تقریبات" : "Spiritual Events"}
        </h2>

        <p className="text-sm font-urdu uppercase tracking-wider text-subtext mb-14">
          {language === "urdu"
            ? "ذکر، محبت، اور روحانی یکجہتی"
            : "Zikr, Love, and Spiritual Unity"}
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-mist rounded-2xl p-6 shadow-soft border border-border hover:shadow-lg hover:bg-hover transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-heading text-black mb-2">
                {language === "urdu" ? event.title.urdu : event.title.english}
              </h3>
              <p className="text-sm text-subtext font-medium mb-2">
                {language === "urdu" ? event.date.urdu : event.date.english}
              </p>
              <p className="text-base text-black leading-relaxed">
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
