import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useLanguage } from "../context/LanguageContext";
import { FiX, FiChevronLeft, FiChevronRight, FiCamera } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line no-unused-vars

const SacredMoments = () => {
  const { language } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [collections, setCollections] = useState([]);

  // 🔹 Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/photos/collections/") //Django API
      .then((res) => res.json())
      .then((data) => setCollections(data))
      .catch((err) => console.error("Error fetching collections:", err));
  }, []);

  // 🔹 Sort by latest → oldest
  const sortedCollections = [...collections].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  const totalPages = Math.ceil(sortedCollections.length / itemsPerPage);
  const paginatedCollections = sortedCollections.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openModal = (collection) => {
    setSelectedCollection(collection);
    setCurrentIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCollection(null);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === selectedCollection.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? selectedCollection.images.length - 1 : prev - 1
    );
  };
  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [modalOpen]);

  // ⌨️ Keyboard navigation
  useEffect(() => {
    if (!modalOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  return (
    <div dir={language === "urdu" ? "rtl" : "ltr"}>
      <section
        id="sacred-moments"
        className="bg-white text-black py-24 px-6 md:px-24 font-body relative"
      >
        {/* Watermark Background Logo */}
        <div className="fixed top-1/2 left-1/2 z-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="/images/khanqah logo.png"
            alt="Watermark Logo"
            className="w-full max-w-5xl opacity-10 grayscale filter transform-gpu will-change-transform translate-y-12"
          />
        </div>
        {/* 🔹 Section Heading */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-black mb-6 border-b-2 border-border inline-block pb-2">
            {language === "urdu" ? "لمحات" : "Sacred Moments"}
          </h2>
          <p className="text-sm font-urdu tracking-widest text-subtext max-w-2xl mx-auto">
            {language === "urdu"
              ? "بیانات، تقریبات اور محافل کی جھلکیاں"
              : "Highlights from bayaans, takreeb & gatherings"}
          </p>
        </div>

        {/* 🖼 Collections Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {paginatedCollections.map((collection, index) => (
              <motion.div
                key={collection.id}
                onClick={() => openModal(collection)}
                className="cursor-pointer rounded-2xl border border-border bg-[#F5F5F5] 
             shadow-[0_6px_20px_rgba(0,0,0,0.06)] 
             transition-all duration-500 
             hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] 
             hover:-translate-y-2 hover:border-gray-300 relative
             group" // ✅ group applied ONLY to this card
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Image wrapper */}
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={collection.images[0]?.image} // ✅ use .image
                    alt={collection.name_en}
                    className="w-full h-64 object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>

                {/* Text */}
                <div className="p-5">
                  <h3 className="text-lg font-urdu font-semibold mb-3 group-hover:underline">
                    {language === "urdu"
                      ? collection.name_ur
                      : collection.name_en}
                  </h3>
                  <div className="flex justify-between text-sm  text-gray-600 font-medium">
                    <span className="flex items-center gap-1">
                      <FiCamera className="text-gray-500" />{" "}
                      {collection.images.length}
                    </span>
                    <span className="font-urdu text-muted">
                      {new Date(collection.created_at).toLocaleDateString(
                        language === "urdu" ? "ur-PK" : "en-US",
                        { day: "numeric", month: "short", year: "numeric" }
                      )}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 🔹 Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 space-x-2">
              {/* Previous Button */}
              <button
                onClick={() =>
                  currentPage > 1 && handlePageChange(currentPage - 1)
                }
                disabled={currentPage === 1}
                className={`px-4 py-2 relative group rounded-md text-sm font-medium border transition ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white text-black border-[#D1D1D1] hover:bg-[#EDEDED]"
                }`}
              >
                {language === "urdu" ? "▶" : "◀"}{" "}
                {language === "urdu" ? "پچھلا" : "Previous"}
              </button>

              {/* Page Numbers */}
              {(() => {
                const pages = [];
                const visibleRange = 2;
                pages.push(1);
                if (currentPage - visibleRange > 2) pages.push("left-ellipsis");
                for (
                  let i = Math.max(2, currentPage - visibleRange);
                  i <= Math.min(totalPages - 1, currentPage + visibleRange);
                  i++
                ) {
                  pages.push(i);
                }
                if (currentPage + visibleRange < totalPages - 1)
                  pages.push("right-ellipsis");
                if (totalPages > 1) pages.push(totalPages);

                return pages.map((p, idx) =>
                  p === "left-ellipsis" || p === "right-ellipsis" ? (
                    <span
                      key={p + idx}
                      className="px-3 py-2 text-gray-500 select-none"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={p}
                      onClick={() => handlePageChange(p)}
                      className={`px-4 py-2 relative group rounded-md text-sm font-medium border transition ${
                        currentPage === p
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-[#D1D1D1] hover:bg-[#EDEDED]"
                      }`}
                    >
                      {p}
                    </button>
                  )
                );
              })()}

              {/* Next Button */}
              <button
                onClick={() =>
                  currentPage < totalPages && handlePageChange(currentPage + 1)
                }
                disabled={currentPage === totalPages}
                className={`px-4 py-2 relative group rounded-md text-sm font-medium border transition ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white text-black border-[#D1D1D1] hover:bg-[#EDEDED]"
                }`}
              >
                {language === "urdu" ? "اگلا" : "Next"}{" "}
                {language === "urdu" ? "◀" : "▶"}
              </button>
            </div>
          )}
        </div>

        {/* Modal with slider */}
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          className="fixed inset-0 flex items-center justify-center z-60 outline-none"
          overlayClassName="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
        >
          {selectedCollection && (
            <motion.div
              className="relative max-w-5xl w-full mx-auto bg-white rounded-xl p-6 shadow-2xl flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-100"
              >
                <FiX className="text-xl text-black" />
              </button>

              <h2 className="text-xl font-bold font-urdu mb-4 text-center text-black">
                {language === "urdu"
                  ? selectedCollection.name_ur
                  : selectedCollection.name_en}
              </h2>

              <div className="relative w-full max-w-4xl flex items-center justify-center">
                <button
                  onClick={prevImage}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-md"
                >
                  <FiChevronLeft className="text-2xl" />
                </button>

                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={selectedCollection.images[currentIndex]?.image} // ✅ use .image
                    alt={`${selectedCollection.name_en} ${currentIndex + 1}`}
                    className="rounded-lg shadow-md max-h-[70vh] object-contain"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                <button
                  onClick={nextImage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 shadow-md"
                >
                  <FiChevronRight className="text-2xl" />
                </button>
              </div>

              <div className="flex justify-center mt-4 gap-2">
                {selectedCollection.images.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === index
                        ? "w-6 bg-black" // Active line
                        : "w-3 bg-gray-400" // Inactive line
                    }`}
                    onClick={() => setCurrentIndex(index)} // Allow click navigation
                  />
                ))}
              </div>
            </motion.div>
          )}
        </Modal>
      </section>
    </div>
  );
};

export default SacredMoments;
