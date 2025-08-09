"use client";
import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

const data = [
  {
    urdu: "حضرت مرزا مظہر جان جانانؒ",
    english: "Hazrat Mirza Mazhar Jan-e-Janan (RA)",
  },
  { urdu: "حضرت غلام علی صاحبؒ", english: "Hazrat Ghulam Ali (RA)" },
  { urdu: "حضرت ابو سعید صاحبؒ", english: "Hazrat Abu Saeed (RA)" },
  { urdu: "حضرت احمد سعید صاحبؒ", english: "Hazrat Ahmad Saeed (RA)" },
  {
    urdu: "حضرت دوست محمد قندھاری صاحبؒ",
    english: "Hazrat Dost Muhammad Qandhari (RA)",
  },
  { urdu: "حضرت محترم موسیٰ صاحبؒ", english: "Hazrat Muhtaram Musa (RA)" },
  { urdu: "حضرت احمد گل صاحبؒ", english: "Hazrat Ahmad Gul (RA)" },
  { urdu: "حضرت عبدالحلیم صاحبؒ", english: "Hazrat Abdul Haleem (RA)" },
  { urdu: "حضرت عبدالعزیز صاحبؒ", english: "Hazrat Abdul Aziz (RA)" },
  { urdu: "حضرت احمد صاحبؒ", english: "Hazrat Ahmad (RA)" },
  { urdu: "حضرت محمد صاحبؒ", english: "Hazrat Muhammad (RA)" },
  { urdu: "حضرت حمید صاحبؒ", english: "Hazrat Hameed (RA)" },
  { urdu: "حضرت محمود صاحبؒ", english: "Hazrat Mahmood (RA)" },
  { urdu: "حضرت رشید احمد صاحبؒ", english: "Hazrat Rasheed Ahmad (RA)" },
];

const ShajrahRoadmap = () => {
  const { language } = useLanguage();
  const isUrdu = language === "urdu";

  return (
    <section className="bg-white text-black py-24 px-6 md:px-24 font-body border-t border-[#D1D1D1]">
      {/* Watermark Background Logo */}
      <div className="fixed top-1/2 left-1/2 z-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2">
        <img
          src="/images/khanqah logo.png"
          alt="Watermark Logo"
          className="w-full max-w-5xl opacity-10 grayscale filter transform-gpu will-change-transform translate-y-12"
        />
      </div>

      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-black border-b-2 border-border pb-3 inline-block">
          {isUrdu ? "شجرہ تصوف" : "Lineage of Tasawuf"}
        </h2>
        <p
          className={`mt-3 text-sm font-urdu  tracking-wider text-subtext mb-14 ${
            isUrdu ? "font-urdu leading-loose" : ""
          }`}
        >
          {isUrdu
            ? "یہ مقدس سلسلہ تصوف کے روحانی سلسلہ تربیت کو ظاہر کرتا ہے۔"
            : "This sacred lineage reflects the golden chain of spiritual mentorship in the path of Tasawuf."}
        </p>
      </div>

      {/* Roadmap Flow */}
      <div
        dir={isUrdu ? "rtl" : "ltr"}
        className="relative z-10 flex flex-col items-center gap-6"
      >
        {data.map((entry, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#F5F5F5] border border-border shadow-md px-6 py-4 rounded-lg w-full max-w-xs text-center hover:scale-105 transition duration-300"
            >
              <p
                className={`text-base md:text-lg text-black ${
                  isUrdu ? "font-urdu" : "font-medium"
                }`}
              >
                {isUrdu ? entry.urdu : entry.english}
              </p>
            </motion.div>

            {/* Arrow */}
            {index < data.length - 1 && (
              <FaArrowDown className="text-black text-lg mt-2 animate-bounce-pulse" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ShajrahRoadmap;
