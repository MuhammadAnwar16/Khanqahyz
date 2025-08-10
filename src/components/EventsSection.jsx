import React from "react";
import { useLanguage } from "../context/LanguageContext";

const EventsSection = () => {
  const { language } = useLanguage();

  const isUrdu = language === "urdu";

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
        urdu: "ذکرِ الٰہی، بیان تصوف، اور اجتماعی دعا کی محفل۔",
        english: "Gathering for remembrance of Allah, Sufi discourse, and collective prayer.",
      },
    },
    {
      id: 2,
      title: {
        urdu: "ہفتہ وار ختم خواجگان",
        english: "Weekly Khatm-e-Khwajgan",
      },
      date: {
        urdu: "ہر جمعرات کے بعد نماز عصر  ",
        english: "Every Thursday after Asr prayer",
      },
      description: {
        urdu: "",
        english: "",
      },
    },
    {
      id: 3,
      title: {
        urdu: "  اجتماعی مطالع تصوف ",
        english: "Collective Study of Sufism",
      },
      date: {
        urdu: " روزانہ بعد نمازِ عشاہ ",
        english: "Daily after Isha prayer",
      },
      description: {
        urdu: "قرآن و سنت کی روشنی میں شعوری تربیت۔",
        english: "Conscious training in the light of Quran and Sunnah.",
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
          {isUrdu ? "روحانی تقریبات" : "Spiritual Events"}
        </h2>

        <p className="text-sm font-urdu  tracking-wider text-subtext mb-14">
          {isUrdu
            ? "ذکر، صحبت، اور شعوری یکجہتی"
            : "Remembrance, Company, and Conscious Unity"}
        </p>

        {/* Cards */}
          <div
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-10 ${
              isUrdu ? "text-right" : "text-left"
            }`}
          >
            {events.map((event) => (
              <div
                key={event.id}
                className={`bg-mist rounded-2xl p-6 shadow-lg border border-border transition-all duration-300  hover:shadow-xl hover:bg-hover/20 relative ${
                  isUrdu ? "pr-5 pl-3 border-r-[6px]" : "pl-5 pr-3 border-l-[6px]"
                } border-accent1`}
              >
                <h3 className="text-xl md:text-2xl font-heading text-black font-bold mb-3 leading-snug hover:underline">
                  {isUrdu ? event.title.urdu : event.title.english}
                </h3>
                <p className="text-sm font-urdu text-subtext font-medium mb-2">
                  {isUrdu ? event.date.urdu : event.date.english}
                </p>
                <p className="text-base font-urdu text-black leading-relaxed">
                  {isUrdu ? event.description.urdu : event.description.english}
                </p>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default EventsSection;
