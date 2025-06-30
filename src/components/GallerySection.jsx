import React, { useState } from "react";
import Modal from "react-modal";
import { useLanguage } from "../context/LanguageContext";

const GallerySection = () => {
  const { language } = useLanguage();

  const images = [
    { id: 1, src: "/images/gallery1.jpg", alt: "Khanqah Courtyard" },
    { id: 2, src: "/images/gallery2.jpg", alt: "Urs Gathering" },
    { id: 3, src: "/images/gallery3.jpg", alt: "Zikr Circle" },
    { id: 4, src: "/images/gallery4.jpg", alt: "Quran Session" },
    { id: 5, src: "/images/gallery5.jpg", alt: "Spiritual Leader" },
    { id: 6, src: "/images/gallery6.jpg", alt: "Evening Ziyarat" },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (img) => {
    setSelectedImg(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImg(null);
  };

  return (
    <section
      id="gallery"
      className="bg-white text-black py-24 px-6 md:px-24 font-body relative"
    >
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading text-black mb-6 border-b-4 border-border inline-block pb-2">
          {language === "urdu" ? "تصویری جھلکیاں" : "Gallery"}
        </h2>

        <p className="text-sm uppercase tracking-widest text-subtext mb-12">
          {language === "urdu"
            ? "مقدس لمحات کی بصری جھلکیاں"
            : "Visual Reflections of Sacred Moments"}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img) => (
            <div
              key={img.id}
              onClick={() => openModal(img)}
              className="cursor-pointer rounded-2xl overflow-hidden group relative shadow-md hover:shadow-lg transition-all border border-border bg-white"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Preview"
        className="fixed inset-0 flex items-center justify-center z-50 outline-none"
        overlayClassName="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
      >
        {selectedImg && (
          <div className="relative max-w-3xl w-full mx-auto bg-white rounded-xl p-4 shadow-2xl">
            <img
              src={selectedImg.src}
              alt={selectedImg.alt}
              className="rounded-md w-full max-h-[80vh] object-contain"
            />
            <p className="text-subtext text-sm text-center mt-4 italic">
              {selectedImg.alt}
            </p>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-xs hover:bg-hover transition"
            >
              {language === "urdu" ? "بند کریں" : "Close"}
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default GallerySection;
