import { FiX } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { FaArrowRight, FaArrowLeft, FaArrowDown } from "react-icons/fa";

const CurrentNasheenSection = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  // Tree Data
  const nasheenTree = [
    { name_en: "Syed Ahmad Gul (1)", name_ur: "(١) سید احمد گل" },
    { name_en: "Syed Abdul Haleem (2)", name_ur: "(۲) سید عبد الحلیم" },
    { name_en: "Syed Abdul Aziz (3)", name_ur: "(۳) سید عبد العزیز" },
    { name_en: "Sahibzada Syed Ahmad (4)", name_ur: "(۴) صاحبزادہ سید احمد" },
    {
      name_en: "Sahibzada Syed Muhammad (5)",
      name_ur: "(۵) صاحبزادہ سید محمد",
    },
    {
      name_en: "Sahibzada Syed Abdul Hameed (6)",
      name_ur: "(۶) صاحبزادہ سید عبد الحمید ",
    },
    {
      name_en: "Sahibzada Syed Mahmood (7)",
      name_ur: "(۷) صاحبزادہ سید محمود ",
    },

    {
      name_en: "Sahibzada Syed Rasheed Ahmad (Present)",
      name_ur: "صاحبزادہ سید رشید احمد (موجودہ)",
    },
  ];

  const SnakeModalTree = ({ data, isUrdu }) => {
    const [itemsPerRow, setItemsPerRow] = useState(4);

    useEffect(() => {
      const updateItemsPerRow = () => {
        if (window.innerWidth < 640) {
          setItemsPerRow(1);
        } else if (window.innerWidth < 1024) {
          setItemsPerRow(2);
        } else if (window.innerWidth < 1600) {
          setItemsPerRow(3);
        } else {
          setItemsPerRow(4);
        }
      };
      updateItemsPerRow();
      window.addEventListener("resize", updateItemsPerRow);
      return () => window.removeEventListener("resize", updateItemsPerRow);
    }, []);

    // Break into rows
    const rows = [];
    for (let i = 0; i < data.length; i += itemsPerRow) {
      rows.push(data.slice(i, i + itemsPerRow));
    }

    return (
      // Force layout direction to LTR so our flow logic is stable (text can still be RTL inside cards)
      <div className="flex flex-col items-center gap-12 w-full" dir="ltr">
        {rows.map((row, rowIndex) => {
          const isEvenRow = rowIndex % 2 === 0;

          // Snake rule:
          // English (LTR): even -> →, odd -> ←
          // Urdu   (RTL): even -> ←, odd -> →
          const isLTR = (!isUrdu && isEvenRow) || (isUrdu && !isEvenRow);

          // Only reverse the data when needed; keep flex direction constant
          const rowData = isLTR ? row : [...row].reverse();

          return (
            <div key={rowIndex} className="flex flex-col items-center w-full">
              {/* Row content centered with intrinsic width */}
              <div className="w-full text-center">
                <div className="inline-flex items-center gap-6">
                  {rowData.map((entry, idx) => (
                    <React.Fragment key={idx}>
                      <div
                        className="bg-[#F5F5F5] border border-border shadow-md 
                                 px-4 py-3 rounded-lg w-36 sm:w-40 md:w-48 
                                 text-center hover:scale-105 hover:shadow-lg 
                                 transition-all duration-300"
                      >
                        <p
                          // Text direction can be RTL for Urdu, but layout remains LTR
                          dir={isUrdu ? "rtl" : "ltr"}
                          className={`${
                            isUrdu ? "font-urdu" : "font-medium"
                          } text-sm sm:text-base leading-relaxed`}
                        >
                          {isUrdu ? entry.name_ur : entry.name_en}
                        </p>
                      </div>

                      {/* Horizontal arrow between nodes */}
                      {idx < rowData.length - 1 &&
                        (isLTR ? (
                          <FaArrowRight className="text-[#6B6B6B] text-lg sm:text-xl" />
                        ) : (
                          <FaArrowLeft className="text-[#6B6B6B] text-lg sm:text-xl" />
                        ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Down arrow aligned under the END of the row's flow using an inline grid
                whose width matches the row's intrinsic width */}
              {rowIndex < rows.length - 1 && (
                <div className="flex w-full mt-2 px-2">
                  {itemsPerRow === 1 ? (
                    <div className="flex justify-center w-full">
                      <FaArrowDown className="text-[#6B6B6B] text-2xl" />
                    </div>
                  ) : isLTR ? (
                    <div className="flex justify-end w-full pr-4">
                      <FaArrowDown className="text-[#6B6B6B] text-2xl" />
                    </div>
                  ) : (
                    <div className="flex justify-start w-full pl-4">
                      <FaArrowDown className="text-[#6B6B6B] text-2xl" />
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div dir={language === "urdu" ? "rtl" : "ltr"}>
      <section
        id="sajjada-nasheen"
        className="bg-white text-black py-24 px-6 md:px-24 font-body"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group max-w-xl mx-auto overflow-hidden rounded-2xl shadow-lg border border-border">
            <img
              src="/images/masnad-nasheen.jpg"
              alt="Current Sajjada Nasheen"
              className="w-[24rem] h-[24rem] object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-center">
              <p
                className={`text-lg md:text-xl text-white font-serif tracking-wide ${
                  language === "urdu"
                    ? "font-urdu text-right leading-relaxed"
                    : "font-body text-center"
                }`}
              >
                {language === "urdu"
                  ? "حضرت مولانا ڈاکٹر صاحبزادہ رشید احمد صاحب"
                  : "Hazrat Maulana Dr. Sahibzada Rasheed Ahmed Sahib"}
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-black border-b-2 border-border inline-block pb-2">
              {language === "urdu"
                ? "موجودہ مسند نشین"
                : "Current Masnad-e-Nasheen"}
            </h2>
            <p
              className={`text-lg text-black/70 leading-loose mb-4 ${
                language === "urdu" ? "font-urdu text-right" : "font-body"
              }`}
            >
              {language === "urdu"
                ? "حضرت مولانا ڈاکٹر صاحبزادہ رشید احمد صاحب دامت برکاتھم خانقاہ کے موجودہ مسند نشین ہیں۔ آپ شریعت، طریقت اور سیاست کے جامع ہیں اور اسلاف کے طریقے پر دین اسلام کے ان تینوں شعبوں میں لوگوں کی تربیت فرما رہے ہیں۔"
                : "Hazrat Maulana Dr. Sahibzada Rasheed Ahmed Sahib Damat Barakatuhum is the current Masnad-e-Nasheen of the Khanqah. He is a comprehensive scholar in Shariah, Tariqat, and politics, training people in all three fields according to the ways of our predecessors."}
            </p>
            <p className="text-sm italic text-subtext mb-6">
              {language === "urdu"
                ? "اللہ تعالیٰ آپ کے فیض کو عام فرمائے۔"
                : "May Allah spread his blessings far and wide."}
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-3 bg-black text-white border border-transparent rounded-xl shadow 
             hover:bg-white hover:text-black hover:border-black 
             hover:scale-105 hover:shadow-lg 
             transition-all duration-300 ease-out text-sm font-medium tracking-wide"
            >
              {language === "urdu"
                ? "سابقہ مسند نشین دیکھیں"
                : "View Previous Masnad-e-Nasheen"}
            </button>
          </div>
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl w-[95%] md:w-[70%] max-h-[80%] relative flex flex-col">
              {/* Close button (fixed at top, outside scroll) */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black z-10"
              >
                <FiX size={24} />
              </button>

              {/* Scrollable content */}
              <div className="overflow-y-auto p-10">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-12 text-center">
                  {language === "urdu"
                    ? "سابقہ مسند نشین"
                    : "Previous Masnad-e-Nasheen"}
                </h3>

                <div className="flex justify-center">
                  <SnakeModalTree
                    data={nasheenTree}
                    isUrdu={language === "urdu"}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quote */}
        <div
          className={`mt-16 text-center italic text-black/70 text-lg max-w-3xl mx-auto ${
            language === "urdu" ? "font-urdu " : ""
          }`}
        >
          ❝{" "}
          {language === "urdu"
            ? "روحانیت وہ چراغ ہے جو اندھیروں میں بھی روشنی دیتا ہے۔"
            : "Spirituality is a lamp that lights even in the darkest of nights."}
          ❞
        </div>
      </section>
    </div>
  );
};

export default CurrentNasheenSection;
