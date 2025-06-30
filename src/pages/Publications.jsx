import React, { useState } from "react";
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
];

const Publications = () => {
  const { language } = useLanguage();
  const [previewFile, setPreviewFile] = useState(null);

  return (
    <section
      id="publications"
      className="bg-[#FFFFFF] text-[#000000] py-24 px-6 md:px-24 font-body border-t border-[#D1D1D1]"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#000000] mb-12 border-b-[3px] border-[#D1D1D1] inline-block pb-2">
          {language === "urdu" ? "طباعت شدہ کتب و رسائل" : "Publications"}
        </h1>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] text-[#000000] rounded-2xl p-6 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-[#D1D1D1] hover:bg-[#EDEDED] transition-all duration-300"
            >
              <h2 className="text-2xl font-heading mb-2">{pub.title}</h2>
              <p className="text-sm text-[#6B6B6B] mb-5 leading-relaxed">
                {pub.description}
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <button
                  onClick={() => setPreviewFile(pub.file)}
                  className="px-5 py-2 text-sm font-semibold border border-[#D1D1D1] text-[#000000] rounded-full hover:bg-[#EDEDED] transition"
                >
                  {language === "urdu" ? "پیش نظارہ" : "Preview"}
                </button>

                <a
                  href={pub.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 text-sm font-semibold text-white bg-[#000000] rounded-full hover:bg-[#222222] transition"
                >
                  {language === "urdu" ? "ڈاؤن لوڈ کریں" : "Download"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Preview */}
      {previewFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="relative bg-white rounded-xl shadow-xl w-full max-w-4xl h-[80vh] overflow-hidden">
            <button
              onClick={() => setPreviewFile(null)}
              className="absolute top-4 right-4 text-sm font-semibold px-4 py-1 bg-[#000000] text-white rounded-full hover:bg-[#222222]"
            >
              ✕ {language === "urdu" ? "بند کریں" : "Close"}
            </button>
            <iframe
              src={previewFile}
              title="PDF Preview"
              className="w-full h-full border-none"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Publications;
