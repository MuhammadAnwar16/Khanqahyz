"use client";
import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { HiEye, HiDownload, HiX } from "react-icons/hi";

const Publications = () => {
  const { language } = useLanguage();
  const [previewFile, setPreviewFile] = useState(null);

  const publications = [
    {
      title: language === "urdu" ? "رسالہ تصوف" : "Risala-e-Tasawwuf",
      file: "/publications/risala-tasawwuf.pdf",
      description:
        language === "urdu"
          ? "تصوف پر ایک علمی و روحانی رسالہ"
          : "A scholarly and spiritual treatise on Sufism",
    },
    {
      title:
        language === "urdu"
          ? "شجرہ سادات یاسین زئی"
          : "Shajra-e-Sadaat Yaseen Zai",
      file: "/publications/khanqahbook.pdf",
      description:
        language === "urdu"
          ? "سادات یاسین زئی کے نسب، تاریخ اور روحانی وراثت پر مبنی کتاب"
          : "A detailed book on the lineage and spiritual heritage of Yaseen Zai Syeds",
    },
  ];

  return (
    <section
      id="publications"
      className="bg-white text-black py-24 px-6 md:px-24 font-body border-t border-[#D1D1D1]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-black inline-block border-b-[3px] border-[#D1D1D1] pb-2">
          {language === "urdu" ? "طباعت شدہ کتب و رسائل" : "Publications"}
        </h1>

        <div className="grid md:grid-cols-2 gap-10 mt-14">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="group bg-[#F5F5F5] rounded-2xl border border-[#D1D1D1] shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-8 transition hover:bg-[#EDEDED]"
            >
              <h2 className="text-2xl font-heading font-semibold mb-2 group-hover:text-black">
                {pub.title}
              </h2>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
                {pub.description}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => {
                    const isMobile = window.innerWidth < 768;
                    isMobile
                      ? window.open(pub.file, "_blank")
                      : setPreviewFile(pub.file);
                  }}
                  className="flex items-center gap-2 px-5 py-2 text-sm font-medium border border-[#D1D1D1] rounded-full text-black hover:bg-[#E0E0E0] transition"
                >
                  <HiEye className="text-lg" />
                  {language === "urdu" ? "پیش نظارہ" : "Preview"}
                </button>

                <a
                  href={pub.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 text-sm font-medium bg-black text-white rounded-full hover:bg-[#222] transition"
                >
                  <HiDownload className="text-lg" />
                  {language === "urdu" ? "ڈاؤن لوڈ کریں" : "Download"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {previewFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] overflow-hidden border border-[#D1D1D1]">
            <button
              onClick={() => setPreviewFile(null)}
              className="absolute top-4 right-4 text-sm font-semibold flex items-center gap-2 px-4 py-1 bg-black text-white rounded-full hover:bg-[#222] transition"
            >
              <HiX className="text-lg" />
              {language === "urdu" ? "بند کریں" : "Close"}
            </button>
            <iframe
              src={previewFile}
              title="PDF Preview"
              className="w-full h-full border-none rounded-b-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Publications;
