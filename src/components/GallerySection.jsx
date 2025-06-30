import React from "react";
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

  return (
    <section
      id="gallery"
      className="bg-white text-black py-24 px-6 md:px-24 font-body"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-heading font-semibold text-[#1A73E8] mb-10 border-b-2 border-[#E0E0E0] inline-block pb-3">
          {language === "urdu" ? "تصویری جھلکیاں" : "Gallery"}
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {images.map((img) => (
            <div
              key={img.id}
              className="rounded-xl overflow-hidden border border-[#E0E0E0] bg-[#F5F5F5] shadow-sm hover:shadow-lg transition duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
