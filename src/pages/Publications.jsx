"use client";
import { FiX } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import { HiEye, HiDownload } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";
import { FiBookOpen } from "react-icons/fi";

const Publications = () => {
  const { language } = useLanguage();
  const [previewFile, setPreviewFile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (previewFile) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [previewFile]);

  const publications = [
    {
      title:
        language === "urdu"
          ? "شجرہ نسب ساداتِ یٰسین زئی"
          : "Lineage of Sadaat e Yaseen Zai",
      file: "/publications/Shajarah e nasab.pdf",
      cover: "/publications/shajrah-cover.png",
      description:
        language === "urdu"
          ? "ساداتِ یٰسین زئی کا مختصر روحانی و نسلی سلسلہ۔"
          : "A brief spiritual and ancestral lineage of the Sadaat of Yaseen Zai.",
      category: "book",
    },
    {
      title:
        language === "urdu"
          ? "خانقاہ یٰسین زئی اور ساداتِ یٰسین زئی"
          : "Khanqah Yaseen Zai and Sadaat e Yaseen Zai",
      file: "/publications/khanqahbook.pdf",
      cover: "/publications/khanqah-cover.png",
      description:
        language === "urdu"
          ? "سادات یاسین زئی کے نسب، تاریخ اور روحانی وراثت پر مبنی کتاب"
          : "A detailed book on the lineage and spiritual heritage of Yaseen Zai Syeds",
      category: "book",
    },
  ];

  const categories = [
    { key: "all", ur: "تمام", en: "All" },
    { key: "book", ur: "کتب", en: "Books" },
    { key: "risala", ur: "رسالے", en: "Risalay" },
    { key: "other", ur: "دیگر", en: "Others" },
  ];

  const filteredPublications = publications.filter((pub) => {
    const matchesCategory =
      selectedCategory === "all" || pub.category === selectedCategory;
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div dir={language === "urdu" ? "rtl" : "ltr"}>
      <section
        id="publications"
        className="bg-white text-black py-24 px-6 md:px-24 font-body border-t border-[#D1D1D1]"
      >
        {/* Watermark Background Logo */}
        <div className="fixed top-1/2 left-1/2 z-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="/images/khanqah logo.png"
            alt="Watermark Logo"
            className="w-full max-w-5xl opacity-10 grayscale filter transform-gpu will-change-transform translate-y-12"
          />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 border-b-2 border-[#D1D1D1] inline-block pb-3">
            {language === "urdu" ? "طباعت شدہ کتب و رسائل" : "Publications"}
          </h1>
          <p className="text-sm font-urdu text-subtext mb-10">
            {language === "urdu"
              ? "خانقاہ کی روحانی تعلیمات پر مبنی طباعت شدہ کتب و رسائل کا مطالعہ کریں۔"
              : "Explore the timeless printed works reflecting the spiritual teachings of the Khanqah."}
          </p>

          {/* Search + Category Filter */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-14">
            {/* Search */}
            <input
              type="text"
              placeholder={
                language === "urdu" ? "تلاش کریں..." : "Search publications..."
              }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/3 px-4 py-2 border border-[#D1D1D1] rounded-full focus:outline-none focus:ring-2 focus:ring-[#E0E0E0]"
            />

            {/* Category Buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border border-[#D1D1D1] transition ${
                    selectedCategory === cat.key
                      ? "bg-black text-white"
                      : "bg-white hover:bg-[#E0E0E0]"
                  }`}
                >
                  {language === "urdu" ? cat.ur : cat.en}
                </button>
              ))}
            </div>
          </div>

          {/* Publications List */}
          <div className="grid md:grid-cols-2 gap-12 mt-10">
            {filteredPublications.length > 0 ? (
              filteredPublications.map((pub, index) => (
                <div
                  key={index}
                  className="relative group bg-[#F5F5F5] rounded-3xl border border-[#D1D1D1] p-6 shadow-[0_6px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden"
                >
                  <div className="flex items-center gap-6">
                    <img
                      src={pub.cover}
                      alt={pub.title}
                      className="w-28 h-40 object-cover rounded-xl border border-[#D1D1D1] shadow-md transition-transform duration-300 group-hover:scale-[1.03]"
                    />

                    <div className="flex-1">
                      <h2 className="text-xl font-heading font-semibold mb-2 leading-snug">
                        {pub.title}
                      </h2>
                      <p className="text-sm text-[#6B6B6B] leading-relaxed">
                        {pub.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-3">
                        <button
                          onClick={() => {
                            const isMobile = window.innerWidth < 768;
                            isMobile
                              ? window.open(pub.file, "_blank")
                              : setPreviewFile(pub.file);
                          }}
                          className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium border border-[#D1D1D1] rounded-full text-black hover:bg-[#E0E0E0] transition"
                        >
                          <HiEye className="text-lg" />
                          {language === "urdu" ? "پیش نظارہ" : "Preview"}
                        </button>

                        <a
                          href={pub.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium bg-black text-white rounded-full hover:bg-[#222] transition"
                        >
                          <HiDownload className="text-lg" />
                          {language === "urdu" ? "ڈاؤن لوڈ کریں" : "Download"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-16 px-6 bg-[#F5F5F5] rounded-2xl border border-[#D1D1D1] shadow-sm">
  <FiBookOpen className="w-12 h-12 text-[#6B6B6B] mb-4 opacity-70" />
  
  <p className="text-lg text-[#6B6B6B] font-medium text-center">
    {language === "urdu"
      ? "معذرت! کوئی اشاعت دستیاب نہیں۔"
      : "Sorry! No publications available."}
  </p>
  
  <p className="text-sm text-[#999] mt-2 text-center max-w-md">
    {language === "urdu"
      ? "براہ کرم دوبارہ کوشش کریں یا فلٹر اور تلاش کی ترتیبات تبدیل کریں۔"
      : "Please try again or adjust your filters and search settings."}
  </p>
</div>

            )}
          </div>
        </div>

        {/* PDF Modal */}
        {previewFile && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] overflow-hidden border border-[#D1D1D1]">
              <button
                onClick={() => setPreviewFile(null)}
                className="absolute top-4 right-4 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-100"
              >
                <FiX className="text-xl text-black" />
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
    </div>
  );
};

export default Publications;
