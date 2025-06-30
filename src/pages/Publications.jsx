import React from "react";
import { useLanguage } from "../context/LanguageContext";

const publications = [
  {
    title: "رسالہ تصوف",
    file: "/publications/risala-tasawwuf.pdf",
    description: "تصوف پر ایک علمی و روحانی رسالہ",
  },
  {
    title: "Lecture on Sufism",
    file: "/publications/sufism-lecture.pdf",
    description: "An English discourse on Sufi teachings",
  },
  // More publications can be added here
];

const Publications = () => {
  const { language } = useLanguage();

  return (
    <section
      id="publications"
      className="bg-[#FFFFFF] text-[#000000] py-24 px-6 md:px-24 font-body border-t border-[#E0E0E0]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-heading text-[#1A73E8] mb-12 border-b-4 border-[#1A73E8] inline-block pb-2">
          {language === "urdu" ? "طباعت شدہ کتب و رسائل" : "Publications"}
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] text-[#2C2C2C] rounded-2xl p-6 shadow-md border border-[#E0E0E0] hover:shadow-xl hover:border-[#1A73E8] transition duration-300"
            >
              <h2 className="text-xl md:text-2xl font-heading text-[#1A73E8] mb-2">
                {pub.title}
              </h2>
              <p className="text-sm text-[#4A4A4A] mb-4 leading-relaxed">
                {pub.description}
              </p>
              <a
                href={pub.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1A73E8] text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-[#155cc0] transition"
              >
                {language === "urdu" ? "ڈاؤن لوڈ کریں" : "Download"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
