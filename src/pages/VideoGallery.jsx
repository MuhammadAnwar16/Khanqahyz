"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

const allVideos = [
  {
    id: 1,
    englishTitle: "Spiritual Gathering – July 2025",
    urduTitle: "روحانی اجتماع – جولائی 2025",
    youtubeUrl: "https://www.youtube-nocookie.com/embed/ZYaZ6Odbx_Y",
    category: "Event",
    date: "2025-07-15",
  },
  {
    id: 2,
    englishTitle: "Bayaan on Sufism",
    urduTitle: "تصوف پر بیان",
    youtubeUrl: "https://www.youtube-nocookie.com/embed/ZYaZ6Odbx_Y",
    category: "Bayaan",
    date: "2025-06-10",
  },
];

const allAudios = [
  {
    id: 1,
    englishTitle: "Dhikr Session – June 2025",
    urduTitle: "ذکر کی نشست – جون 2025",
    audioUrl: "/audios/dhikr-june.mp3",
    category: "Dhikr",
    date: "2025-06-20",
  },
  {
    id: 2,
    englishTitle: "Short Talk on Tasawwuf",
    urduTitle: "تصوف پر مختصر بیان",
    audioUrl: "/audios/tasawwuf-talk.mp3",
    category: "Bayaan",
    date: "2025-05-10",
  },
];

const categories = ["All", "Bayaan", "Dhikr", "Event"];

const MediaGallery = () => {
  const { language } = useLanguage();
  const isUrdu = language === "urdu";

  const [activeTab, setActiveTab] = useState("Videos");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalVideo, setModalVideo] = useState(null);
  const [modalAudio, setModalAudio] = useState(null);

  const itemsPerPage = 6;

  const mediaItems = activeTab === "Videos" ? allVideos : allAudios;

  const filteredItems = mediaItems.filter((item) => {
    const title = isUrdu ? item.urduTitle : item.englishTitle;
    return (
      title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeCategory === "All" || item.category === activeCategory)
    );
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div dir={isUrdu ? "rtl" : "ltr"}>
      <section className="bg-white text-black py-24 px-6 md:px-24 font-body border-t border-[#D1D1D1]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 border-b-4 inline-block border-[#D1D1D1] pb-2">
              {isUrdu ? "میڈیا گیلری" : "Media Gallery"}
            </h1>
            <p className="text-subtext font-urdu tracking-widest text-sm uppercase">
              {isUrdu
                ? "خانقاہ یاسین زئی کے بیانات، ذکر اور تقاریب کی ویڈیوز و آڈیوز"
                : "Videos and Audios from Khanqah Yaseen Zai’s sermons, dhikr, and gatherings."}
            </p>
          </div>

          {/* Tab Switch */}
          <div className="flex justify-center gap-6 mb-8">
            {["Videos", "Audios"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentPage(1);
                  setSearchTerm("");
                  setActiveCategory("All");
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                  activeTab === tab
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-[#D1D1D1] hover:bg-[#EDEDED]"
                }`}
              >
                {isUrdu ? (tab === "Videos" ? "ویڈیوز" : "آڈیوز") : tab}
              </button>
            ))}
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
            <input
              type="text"
              placeholder={isUrdu ? "تلاش کریں..." : "Search..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/3 px-5 py-2.5 border border-[#D1D1D1] rounded-full text-sm focus:outline-none bg-[#FAFAFA]"
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-[#D1D1D1] hover:bg-[#EDEDED]"
                  }`}
                >
                  {isUrdu
                    ? cat === "All"
                      ? "تمام"
                      : cat === "Bayaan"
                      ? "بیان"
                      : cat === "Dhikr"
                      ? "ذکر"
                      : "تقریب"
                    : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Media Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {paginatedItems.map((item) =>
              activeTab === "Videos" ? (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#F5F5F5] rounded-xl shadow-sm hover:shadow-md transition p-4 cursor-pointer group"
                  onClick={() => setModalVideo(item)}
                >
                  <div className="aspect-w-16 aspect-h-9 mb-3 overflow-hidden rounded-md">
                    <iframe
                      className="w-full h-full pointer-events-none"
                      src={item.youtubeUrl}
                      title={isUrdu ? item.urduTitle : item.englishTitle}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3 className="text-lg font-urdu font-semibold group-hover:underline">
                    {isUrdu ? item.urduTitle : item.englishTitle}
                  </h3>
                  <p className="text-sm font-urdu text-subtext mt-1">
                    {isUrdu
                      ? item.category === "Bayaan"
                        ? "بیان"
                        : item.category === "Dhikr"
                        ? "ذکر"
                        : "تقریب"
                      : item.category}
                  </p>
                  <p className="text-sm font-urdu text-muted">
                    {isUrdu
                      ? new Date(item.date).toLocaleDateString("ur-PK", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#F5F5F5] rounded-xl shadow-sm hover:shadow-md transition p-4 cursor-pointer group"
                  onClick={() => setModalAudio(item)}
                >
                  <div className="aspect-w-16 aspect-h-9 mb-3 flex items-center justify-center bg-[#EDEDED] rounded-md">
                    <span className="text-sm text-gray-600">
                      🎧 {isUrdu ? "آڈیو سنیں" : "Listen Audio"}
                    </span>
                  </div>
                  <h3 className="text-lg font-urdu font-semibold group-hover:underline">
                    {isUrdu ? item.urduTitle : item.englishTitle}
                  </h3>
                  <p className="text-sm text-subtext mt-1">
                    {isUrdu
                      ? item.category === "Bayaan"
                        ? "بیان"
                        : "ذکر"
                      : item.category}
                  </p>
                  <p className="text-sm text-muted">
                    {isUrdu
                      ? new Date(item.date).toLocaleDateString("ur-PK", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                  </p>
                </motion.div>
              )
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-4 py-2 rounded-md text-sm border font-medium ${
                    currentPage === i + 1
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-[#D1D1D1] hover:bg-[#EDEDED]"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {modalVideo && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
              >
                <div className="aspect-video w-full h-full">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src={modalVideo.youtubeUrl}
                    title={isUrdu ? modalVideo.urduTitle : modalVideo.englishTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <button
                  onClick={() => setModalVideo(null)}
                  className="absolute top-4 right-4 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-100"
                >
                  <FiX className="text-xl text-black" />
                </button>
                <div className="p-5 text-center">
                  <h3 className="text-xl font-urdu font-semibold">
                    {isUrdu ? modalVideo.urduTitle : modalVideo.englishTitle}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Audio Modal */}
        <AnimatePresence>
          {modalAudio && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl p-6"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
              >
                <button
                  onClick={() => setModalAudio(null)}
                  className="absolute top-4 right-4 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-100"
                >
                  <FiX className="text-xl text-black" />
                </button>
                <h3 className="text-xl font-urdu font-semibold mb-4 text-center">
                  {isUrdu ? modalAudio.urduTitle : modalAudio.englishTitle}
                </h3>
                <audio controls className="w-full rounded-md">
                  <source src={modalAudio.audioUrl} type="audio/mpeg" />
                  {isUrdu ? "آپ کا براؤزر آڈیو کو سپورٹ نہیں کرتا" : "Your browser does not support the audio element."}
                </audio>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default MediaGallery;
