import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { FiX, FiChevronLeft, FiChevronRight, FiCamera } from "react-icons/fi";

const GallerySection = () => {
  const { language } = useLanguage();

  const collections = [
    {
      id: 1,
      name: language === "urdu" ? "مسجد" : "Mosque",
      images: ["/images/main.jpg", "/images/mosque.jpg", "/images/hero.jpg"],
    },
    {
      id: 2,
      name: language === "urdu" ? "مسجد" : " Mosque",
      images: ["/images/gallery2.jpg"],
    },
    {
      id: 3,
      name: language === "urdu" ? "ذکر" : "Zikr Circle",
      images: ["/images/gallery3.jpg"],
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

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
    if (!selectedCollection) return;
    setCurrentIndex((prev) =>
      prev === selectedCollection.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedCollection) return;
    setCurrentIndex((prev) =>
      prev === 0 ? selectedCollection.images.length - 1 : prev - 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const swipeDistance = touchStartX - touchEndX;

    if (swipeDistance > 50) {
      nextImage();
    } else if (swipeDistance < -50) {
      prevImage();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };
  // Auto image changer when modal is open
  useEffect(() => {
    if (modalOpen && selectedCollection?.images?.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === selectedCollection.images.length - 1 ? 0 : prev + 1
        );
      }, 4000); // change every 4 seconds (you can adjust)

      return () => clearInterval(interval); // cleanup on close/unmount
    }
  }, [modalOpen, selectedCollection]);

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [modalOpen]);

  return (
    <>
      {/* Wrap your whole page content that should be blurred & disabled when modal open */}
      <div
        id="page-content"
        className={`${
          modalOpen ? "blur-sm pointer-events-none select-none" : ""
        }`}
      >
        <section
          id="gallery"
          className="bg-white text-black py-24 px-6 md:px-24 font-body relative"
        >
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-black mb-6 border-b-2 border-border inline-block pb-2">
              {language === "urdu" ? "تصویری جھلکیاں" : "Gallery"}
            </h2>

            <p className="text-sm font-urdu tracking-widest text-subtext mb-12">
              {language === "urdu"
                ? "مقدس لمحات کی بصری جھلکیاں"
                : "Visual Reflections of Sacred Moments"}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {collections.map((collection) => (
                <div
                  key={collection.id}
                  onClick={() => openModal(collection)}
                  className="relative cursor-pointer rounded-2xl overflow-hidden group shadow-md hover:shadow-xl border border-border bg-white transition-all"
                >
                  <img
                    src={collection.images[0]}
                    alt={collection.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-70 transition duration-500" />

                  <div className="absolute bottom-4 left-4 text-white text-sm flex items-center gap-2">
                    <span className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium shadow-lg flex items-center gap-1">
                      <FiCamera className="text-white" />
                      <span>{collection.images.length}</span>
                    </span>
                    <span className="bg-white/90 text-black px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      {collection.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Preview"
        className="fixed inset-0 flex items-center justify-center z-60 outline-none"
        overlayClassName="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
      >
        {selectedCollection && (
          <div
            className="relative max-w-5xl w-full mx-auto bg-white rounded-xl p-4 shadow-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white border border-gray-300 rounded-full p-2 shadow-md hover:bg-gray-100"
            >
              <FiX className="text-xl text-black" />
            </button>

            <img
              src={selectedCollection.images[currentIndex]}
              alt={`${selectedCollection.name} - ${currentIndex + 1}`}
              className="rounded-md w-full max-h-[80vh] object-contain"
            />
            {/* Pagination Dots */}
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

            {selectedCollection.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
                >
                  <FiChevronLeft className="text-2xl text-black" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
                >
                  <FiChevronRight className="text-2xl text-black" />
                </button>
              </>
            )}
          </div>
        )}
      </Modal>
    </>
  );
};

export default GallerySection;
