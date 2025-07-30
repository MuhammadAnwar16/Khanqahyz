"use client";
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { FaChevronDown } from "react-icons/fa";

const data = [
  {
    urdu: "حضرت مرزا مظہر جان جانانؒ",
    english: "Hazrat Mirza Mazhar Jan-e-Janan (RA)",
  },
  {
    urdu: "حضرت غلام علی صاحبؒ",
    english: "Hazrat Ghulam Ali (RA)",
  },
  {
    urdu: "حضرت ابو سعید صاحبؒ",
    english: "Hazrat Abu Saeed (RA)",
  },
  {
    urdu: "حضرت احمد سعید صاحبؒ",
    english: "Hazrat Ahmad Saeed (RA)",
  },
  {
    urdu: "حضرت دوست محمد قندھاری صاحبؒ",
    english: "Hazrat Dost Muhammad Qandhari (RA)",
  },
  {
    urdu: "حضرت محترم موسیٰ صاحبؒ",
    english: "Hazrat Muhtaram Musa (RA)",
  },
  {
    urdu: "حضرت احمد گل صاحبؒ",
    english: "Hazrat Ahmad Gul (RA)",
  },
  {
    urdu: "حضرت عبدالحلیم صاحبؒ",
    english: "Hazrat Abdul Haleem (RA)",
  },
  {
    urdu: "حضرت عبدالعزیز صاحبؒ",
    english: "Hazrat Abdul Aziz (RA)",
  },
  {
    urdu: "حضرت احمد صاحبؒ",
    english: "Hazrat Ahmad (RA)",
  },
  {
    urdu: "حضرت محمد صاحبؒ",
    english: "Hazrat Muhammad (RA)",
  },
  {
    urdu: "حضرت حمید صاحبؒ",
    english: "Hazrat Hameed (RA)",
  },
  {
    urdu: "حضرت محمود صاحبؒ",
    english: "Hazrat Mahmood (RA)",
  },
  {
    urdu: "حضرت رشید احمد صاحبؒ",
    english: "Hazrat Rasheed Ahmad (RA)",
  },
];

const ShajrahRoadmap = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-white py-24 px-4 md:px-24">
      <div className="flex justify-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-black border-b-2 border-border pb-2 text-center">
            {language === "urdu" ? "  شجرہ تصوف"
          : " Lineage of Tasawuf"}
          </h2>
        </div>
      {/* Divider */}
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-subtext mb-10 rounded-full opacity-30" />
        </div>

      <div className="relative max-w-2xl mx-auto border-l-4 border-[#6B6B6B] pl-6">
        {data.map((entry, index) => (
          <div key={index} className="relative mb-10 group">
            <div className="absolute -left-[18px] top-1 w-4 h-4 bg-[#6B6B6B] border-4 border-white rounded-full shadow-md"></div>

            <div
              className={`bg-[#F5F5F5] text-black rounded-lg shadow p-4 transition duration-300 ease-in-out`}
            >
              <p className="text-lg font-urdu leading-loose">
                {language === "urdu" ? entry.urdu : entry.english}
              </p>
            </div>

            {index < data.length - 1 && (
              <div className="absolute left-[-2px] top-full h-10 w-0.5 bg-[#6B6B6B] mx-auto"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShajrahRoadmap;
