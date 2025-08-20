"use client";
import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";// eslint-disable-line no-unused-vars
import { FaArrowRight, FaArrowLeft, FaArrowDown } from "react-icons/fa";

// ---- DATA ----
const data = [
  { english: "Syed Imam Hussain (R.A)", urdu: "سید امام حسین رضی اللہ عنہ" },
  { english: "Syed Imam Ali Zain-ul-Abidin", urdu: "سید امام علی زین العابدین" },
  { english: "Syed Imam Baqir", urdu: "سید امام باقر" },
  { english: "Syed Imam Jafar Sadiq", urdu: "سید امام جعفر صادق" },
  { english: "Syed Imam Musa Kazim", urdu: "سید امام موسیٰ کاظم" },
  { english: "Syed Imam Ali Raza", urdu: "سید امام علی رضا" },
  { english: "Syed Imam Muhammad Taqi", urdu: "سید امام محمد تقی" },
  { english: "Syed Imam Ali Naqi", urdu: "سید امام علی نقی" },
  { english: "Syed Jafar Thani", urdu: "سید جعفر ثانی" },
  { english: "Ali Asghar Ashtar", urdu: "علی اصغر اشتر" },
  { english: "Syed Abu Ahmad Shahab-ud-Din Abdullah", urdu: "سید ابو احمد شہاب الدین عبداللہ" },
  { english: "Abu Yusuf Ahmad Keetal", urdu: "ابو یوسف احمد کیتال" },
  { english: "Syed Abu Bakr", urdu: "سید ابو بکر" },
  { english: "Syed Muhammad", urdu: "سید محمد" },
  { english: "Syed Jafar", urdu: "سید جعفر" },
  { english: "Syed Ali al-Muayyad", urdu: "سید علی المؤیّد" },
  { english: "Syed Darjamal", urdu: "سید درجمال" },
  { english: "Syed Shadi", urdu: "سید شادی" },
  { english: "Syed Yasin", urdu: "سید یاسین" },
  { english: "Syed Musa", urdu: "سید موسیٰ" },
  { english: "Syed Manzar", urdu: "سید منظر" },
  { english: "Syed Lalai", urdu: "سید لالئ" },
  { english: "Syed Rustam", urdu: "سید رستم" },
  { english: "Syed Shams-ud-Din", urdu: "سید شمس الدین" },
  { english: "Syed Abu Bakr", urdu: "سید ابو بکر" },
  { english: "Syed Malik Shah", urdu: "سید ملک شاہ" },
  { english: "Syed Khwaja Din", urdu: "سید خواجہ دین" },
  { english: "Syed Nabi", urdu: "سید نبی" },
  { english: "Syed Zafar", urdu: "سید زَفَر" },
  { english: "Syed Ghulam Muhammad", urdu: "سید غلام محمد" },
  { english: "Syed Lal Muhammad", urdu: "سید لال محمد" },
  { english: "Syed Mehtar Musa Faqeer Aba", urdu: "سید مہتر مُوسٰی فقیر ابا" },
  { english: "Syed Ahmad Gul", urdu: "سید احمد گل" },
  {
    english: "Syed Abdul Haleem",
    urdu: "سید عبد الحلیم",
    children: [
      { english: "Sahibzada Syed Ahmad", urdu: "صاحبزادہ سید احمد" },
      {
        english: "Sahibzada Syed Muhammad ",
        urdu: "صاحبزادہ سید محمد",
        children: [
          { english: "Grandchild 1", urdu: "پوتا 1" },
          { english: "Grandchild 2", urdu: "پوتا 2" },
        ],
      },
      { english: "Sahibzada Syed Abdul Hameed", urdu: "صاحبزادہ سید عبد الحمید " },
      { english: "Sahibzada Syed Mahmood Shah", urdu: "صاحبزادہ سید محمود شاہ" },

    ],
  },
];

const ExpandableNode = ({ node, isUrdu }) => {
  const [open, setOpen] = useState(false);
  const [lineBounds, setLineBounds] = useState({ left: 0, right: 0 });
  const containerRef = useRef(null);

  // Dynamically recalc line bounds using ResizeObserver
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(() => {
      const children = containerRef.current.querySelectorAll(".child-node");
      if (children.length > 1) {
        const first = children[0].getBoundingClientRect();
        const last = children[children.length - 1].getBoundingClientRect();
        const parentBox = containerRef.current.getBoundingClientRect();

        setLineBounds({
          left: first.left - parentBox.left + first.width / 2,
          right: last.left - parentBox.left + last.width / 2,
        });
      } else {
        setLineBounds({ left: 0, right: 0 });
      }
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [open]);

  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col items-center relative">
      {/* Parent Node */}
      <div
        onClick={() => hasChildren && setOpen(!open)}
        className={`
          bg-[#F5F5F5] border shadow-md px-6 py-4 rounded-lg w-48 text-center 
          transition relative z-10 
          ${hasChildren ? "cursor-pointer hover:scale-105 hover:border-black hover:shadow-lg" : "cursor-default"}
        `}
      >
        <p className={`${isUrdu ? "font-urdu" : "font-medium"} text-sm`}>
          {isUrdu ? node.urdu : node.english}
        </p>

        {/* Expand indicator */}
        {hasChildren && (
          <span className="absolute top-2 right-2 text-xs text-gray-600">
            {open ? "➖" : "➕"}
          </span>
        )}
      </div>

      {/* Children + connectors */}
      <AnimatePresence>
        {open && hasChildren && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8 relative flex flex-col items-center"
          >
            {/* vertical line from parent */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 24 }}
              exit={{ height: 0 }}
              transition={{ duration: 0.4 }}
              className="w-0.5 bg-gray-500"
            ></motion.div>

            {/* Children container */}
            <div
              ref={containerRef}
              className="relative flex items-start justify-center gap-12"
            >
              {/* horizontal line only if 2+ children */}
              {node.children.length > 1 && lineBounds.right > lineBounds.left && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: lineBounds.right - lineBounds.left }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 h-0.5 bg-gray-500"
                  style={{ left: lineBounds.left }}
                ></motion.div>
              )}

              {node.children.map((child, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center relative child-node"
                >
                  {/* vertical line to child */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 24 }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="w-0.5 bg-gray-500"
                  ></motion.div>

                  {/* Child node */}
                  <ExpandableNode node={child} isUrdu={isUrdu} />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};



// ---- FAMILY TREE ----
const FamilyTree = () => {
  const { language } = useLanguage();
  const isUrdu = language === "urdu";

  const [itemsPerRow, setItemsPerRow] = useState(4);

  useEffect(() => {
    const updateItemsPerRow = () => {
      if (window.innerWidth < 640) {
        setItemsPerRow(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerRow(3);
      } else {
        setItemsPerRow(5);
      }
    };
    updateItemsPerRow();
    window.addEventListener("resize", updateItemsPerRow);
    return () => window.removeEventListener("resize", updateItemsPerRow);
  }, []);

  // ⚡️All data except last one stays in snake layout
  const lastNode = data[data.length - 1];
  const snakeData = data.slice(0, -1);

  // Break into rows
  const rows = [];
  for (let i = 0; i < snakeData.length; i += itemsPerRow) {
    rows.push(snakeData.slice(i, i + itemsPerRow));
  }

  return (
    <section className="bg-white text-black py-24 px-6 md:px-24 font-body border-t border-[#D1D1D1]">
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 border-b-2 border-[#D1D1D1] inline-block pb-3">
          {isUrdu ? "شجرہ نسب" : "Lineage of Nasab"}
        </h2>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12">
        {/* Snake rows */}
        {rows.map((row, rowIndex) => {
          const isEvenRow = rowIndex % 2 === 0;
          const isLTR = (!isUrdu && isEvenRow) || (isUrdu && !isEvenRow);
          const rowData = isLTR ? row : [...row].reverse();

          return (
            <div key={rowIndex} className="flex flex-col items-center">
              <div className="flex items-center gap-4">
                {rowData.map((entry, idx) => (
                  <React.Fragment key={idx}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-[#F5F5F5] border border-border shadow-md px-6 py-4 rounded-lg w-48 text-center hover:scale-105 transition duration-300"
                    >
                      <p className={`${isUrdu ? "font-urdu" : "font-medium"} text-sm`}>
                        {isUrdu ? entry.urdu : entry.english}
                      </p>
                    </motion.div>

                    {idx < rowData.length - 1 &&
                      (isLTR ? (
                        <FaArrowRight className="text-[#6B6B6B]" />
                      ) : (
                        <FaArrowLeft className="text-[#6B6B6B]" />
                      ))}
                  </React.Fragment>
                ))}
              </div>

              {rowIndex < rows.length - 1 && (
                <div className="flex w-full mt-2">
                  {itemsPerRow === 1 ? (
                    <div className="flex justify-center w-full">
                      <FaArrowDown className="text-[#6B6B6B] text-2xl" />
                    </div>
                  ) : isLTR ? (
                    <div className="flex justify-end w-full">
                      <FaArrowDown className="text-[#6B6B6B] text-2xl" />
                    </div>
                  ) : (
                    <div className="flex justify-start w-full">
                      <FaArrowDown className="text-[#6B6B6B] text-2xl" />
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* Expandable part from last node */}
        <ExpandableNode node={lastNode} isUrdu={isUrdu} />
      </div>
    </section>
  );
};

export default FamilyTree;
