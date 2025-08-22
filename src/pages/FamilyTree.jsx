"use client";
import { useLanguage } from "../context/LanguageContext";
import { FaArrowRight, FaArrowLeft, FaArrowDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; //eslint-disable-line no-unused-vars
import React, { useState, useRef, useEffect, useLayoutEffect } from "react"; //eslint-disable-line no-unused-vars

// ---- DATA ----
const data = [
  {
    english: "Hazrat Ali (R.A)  —  Hazrat Fatimah (R.A)",
    urdu: "حضرت علی رضی اللہ عنہ —  حضرت فاطمہ رضی اللہ عنہا",
  },
  { english: "Syed Imam Hussain (R.A)", urdu: "سید امام حسین رضی اللہ عنہ" },
  {
    english: "Syed Imam Ali Zain-ul-Abidin",
    urdu: "سید امام علی زین العابدین",
  },
  { english: "Syed Imam Baqir", urdu: "سید امام باقر" },
  { english: "Syed Imam Jafar Sadiq", urdu: "سید امام جعفر صادق" },
  { english: "Syed Imam Musa Kazim", urdu: "سید امام موسیٰ کاظم" },
  { english: "Syed Imam Ali Raza", urdu: "سید امام علی رضا" },
  { english: "Syed Imam Muhammad Taqi", urdu: "سید امام محمد تقی" },
  { english: "Syed Imam Ali Naqi", urdu: "سید امام علی نقی" },
  { english: "Syed Jafar Thani", urdu: "سید جعفر ثانی" },
  { english: "Ali Asghar Ashtar", urdu: "علی اصغر اشتر" },
  {
    english: "Syed Abu Ahmad Shahab-ud-Din Abdullah",
    urdu: "سید ابو احمد شہاب الدین عبداللہ",
  },
  { english: "Abu Yusuf Ahmad Keetal", urdu: "ابو یوسف احمد قتال" },
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
  {
    english: "Syed Mehtar Musa (Faqeer Aba)",
    urdu: "(سید مہتر مُوسٰی (فقیر ابا",
  },
  { english: "Syed Ahmad Gul", urdu: "سید احمد گل" },
  {
    english: "Syed Abdul Haleem",
    urdu: "سید عبد الحلیم",
    children: [
      {
        english: "Sahibzada Syed Ahmad",
        urdu: "صاحبزادہ سید احمد",
        children: [
          {
            english: "Syed Muhammad Mohsin Shah",
            urdu: "سید محمد محسن شاہ",
            children: [
              {
                english: "Syed Abdul Hayy",
                urdu: "سید عبد الحیٔ",
                children: [
                  { english: "Syed Zaid Ali", urdu: "سید زید علی" },
                  { english: "Syed Haris Ali", urdu: "سید حارث علی" },
                  { english: "Syed Yasir Ali", urdu: "سید یاسر علی" },
                ],
              },
              {
                english: "Syed Abdul Ghani",
                urdu: "سید عبد الغنی",
                children: [
                  { english: "Syed Mahmood-ul-Hasan", urdu: "سید محمود الحسن" },
                  { english: "Syed Hameed-ul-Hasan", urdu: "سید حمید الحسن" },
                  {
                    english: "Syed Muhammad Ibrahim",
                    urdu: "سید محمد ابراہیم",
                  },
                ],
              },
              {
                english: "Syed Muhammad Ishaq",
                urdu: "سید محمد اسحاق",
                children: [
                  { english: "Syed Muhammad Mohsin", urdu: "  سید محمد محسن " },
                ],
              },
              {
                english: "Syed Muhammad Ismail",
                urdu: "سید محمد اسماعیل",
                children: [
                  { english: "Syed Muhammad Khalid", urdu: "سید محمد خالد" },
                ],
              },
            ],
          },
        ],
      },
      {
        english: "Sahibzada Syed Muhammad ",
        urdu: "صاحبزادہ سید محمد",
        children: [
          {
            english: "Syed Abdul Shakoor",
            urdu: "سید عبد الشکور",
            children: [
              { english: "Syed Muhammad Ahmad", urdu: "سید محمد احمد" },
            ],
          },
          {
            english: "Syed Abdul Wahab",
            urdu: "سید عبد الوہاب",
            children: [
              {
                english: "Syed Muhammad Ammar",
                urdu: "سید محمد عمار",
                children: [
                  {
                    english: "Syed Muhammad Amir Awab",
                    urdu: "سید محمد عامر اواب",
                  },
                  {
                    english: "Syed Muhammad Umair Haddab",
                    urdu: "سید محمد عمیر حدّاب",
                  },
                  { english: "Syed Muhammad Hunaid", urdu: "سید محمد حناد" },
                ],
              },
            ],
          },
          {
            english: "Syed Abdul Quddus",
            urdu: "سید عبد القدوس",
            children: [
              {
                english: "Syed Muhammad Yahya",
                urdu: "سید محمد یحییٰ",
                children: [{ english: "Syed Muhammad", urdu: "سید محمد" }],
              },
              { english: "Syed Muhammad Yousuf", urdu: "سید محمد یوسف" },
              { english: "Syed Abdul Haleem", urdu: "سید عبد الحلیم" },
            ],
          },
          {
            english: "Syed Abdul Raoof",
            urdu: "سید عبد الرؤف",
            children: [
              {
                english: "Syed Abdul Wadood",
                urdu: "سید عبد الودود",
                children: [{ english: "Syed Abdullah", urdu: "سید عبداللہ" }],
              },
              { english: "Syed Fakhr-ud-Din", urdu: "سید فخر الدین" },
              { english: "Syed Muin-ud-Din", urdu: "سید معیّن الدین" },
              { english: "Syed Jalal-ud-Din", urdu: "سید جلال الدین" },
            ],
          },
          {
            english: "Syed Abdullah",
            urdu: "سید عبداللہ",
            children: [
              {
                english: "Syed Fazl-ur-Rehman",
                urdu: "سید فضل الرحمٰن",
                children: [
                  { english: "Syed Muhammad Uzair", urdu: "سید محمد عُزیر" },
                  { english: "Syed Muhammad Zubair", urdu: "سید محمد زبیر" },
                  { english: "Syed Muhammad Umair", urdu: "سید محمد عمیر" },
                ],
              },
              {
                english: "Syed Fazl-ur-Raheem",
                urdu: "سید فضل الرحیم",
                children: [
                  { english: "Syed Muhammad Owais", urdu: "سید محمد اویس" },
                  { english: "Syed Muhammad Waleed", urdu: "سید محمد ولید" },
                ],
              },
              {
                english: "Syed Fazl Kareem",
                urdu: "سید فضل کریم",
                children: [
                  { english: "Syed Muhammad Maaz", urdu: "سید محمد معاذ" },
                  { english: "Syed Muhammad Jawad", urdu: "سید محمد جواد" },
                  { english: "Syed Muhammad Junaid", urdu: "سید محمد جنید" },
                ],
              },
              { english: "Syed Fazlullah", urdu: "سید فضل اللہ" },
            ],
          },
        ],
      },
      {
        english: "Sahibzada Syed Abdul Hameed",
        urdu: "صاحبزادہ سید عبد الحمید ",
        children: [
          {
            english: "Syed Attaullah Shah",
            urdu: "سید عطا اللہ شاہ",
            children: [
              {
                english: "Syed Muhammad Anwar Shah",
                urdu: "سید محمد انور شاہ",
                children: [
                  { english: "Syed Ali", urdu: "سید علی" },
                  { english: "Syed Hamid", urdu: "سید حامد" },
                ],
              },
              {
                english: "Syed Muhammad Usman Shah",
                urdu: "سید محمد عثمان شاہ",
                children: [
                  { english: "Syed Mahmood Shah", urdu: "سید محمود شاہ" },
                ],
              },
              {
                english: "Syed Muhammad Anzar Shah",
                urdu: "سید محمد انزر شاہ",
              },
              {
                english: "Syed Muhammad Salman Shah",
                urdu: "سید محمد سلمان شاہ",
              },
              {
                english: "Syed Muhammad Suleman Shah",
                urdu: "سید محمد سلیمان شاہ",
              },
              { english: "Syed Muhammad Shah", urdu: "سید محمد شاہ" },
            ],
          },
          {
            english: "Syed Atta-ur-Rehman Shah",
            urdu: "سید عطاء الرحمٰن شاہ",
            children: [
              {
                english: "Syed Ubaid-ur-Rahman Shah",
                urdu: "سید عبید الرحمٰن شاہ",
                children: [
                  { english: "Syed Muhammad ", urdu: "سید محمد  " },
                  { english: "Syed Ahmad", urdu: "سید احمد" },
                ],
              },
              {
                english: "Syed Saeed-ur-Rahman Shah",
                urdu: "سید سعيد الرحمٰن شاہ",
              },
              {
                english: "Syed Hameed-ur-Rahman Shah",
                urdu: "سید حمید الرحمٰن شاہ",
              },
            ],
          },
          {
            english: "Syed Habibur Rehman Shah",
            urdu: "سید حبیب الرحمٰن شاہ",
            children: [
              { english: "Syed Muhammad Ayub Shah", urdu: "سید محمد ایوب شاہ" },
              { english: "Syed Muhammad Isa Shah", urdu: "سید محمد عیسیٰ شاہ" },
              {
                english: "Syed Muhammad Dawood Shah",
                urdu: "سید محمد داؤد شاہ",
              },
            ],
          },
        ],
      },
      {
        english: "Sahibzada Syed Mahmood Shah",
        urdu: "صاحبزادہ سید محمود شاہ",
        children: [
          {
            english: "Syed Rasheed Ahmad",
            urdu: "سید رشید احمد",
            children: [
              { english: "Syed Muhammad Ibrahim", urdu: "سید محمد ابراہیم" },
              { english: "Syed Muhammad Ismail", urdu: "سید محمد اسماعیل" },
              { english: "Syed Muhammad Ishaq", urdu: "سید محمد اسحاق" },
              { english: "Syed Muhammad Yousuf", urdu: "سید محمد یوسف" },
              { english: "Syed Muhammad Hammad", urdu: "سید محمد حماد" },
              { english: "Syed Shams-ul-Arifeen", urdu: "سید شمس العارفین" },
            ],
          },
          {
            english: "Syed Khaleel Ahmad",
            urdu: "سید خلیل احمد",
            children: [
              { english: "Syed Hifz-ur-Rahman", urdu: "سید حفظ الرحمن" },
              { english: "Syed Muhammad Luqman", urdu: "سید محمد لقمان" },
            ],
          },
          {
            english: "Syed Hussain Ahmad",
            urdu: "سید حسین احمد",
            children: [
              { english: "Syed Waliullah", urdu: "سید ولی اللہ" },
              { english: "Syed Abdul Aziz", urdu: "سید عبد العزیز" },
              { english: "Syed Mehtar Musa", urdu: "سید مہتر موسیٰ" },
            ],
          },
          {
            english: "Syed Muhammad Qasim",
            urdu: "سید محمد قاسم",
            children: [
              { english: "Syed Muhammad Sohaib", urdu: "سید محمد صہیب" },
              { english: "Syed Muhammad Huzaifa", urdu: "سید محمد حذیفہ" },
              { english: "Syed Muhammad Rawaha", urdu: "سید محمد رواحہ" },
            ],
          },
          {
            english: "Syed Muhammad Yaqoob",
            urdu: "سید محمد یعقوب",
            children: [
              { english: "Syed Muhammad Tayyab", urdu: "سید محمد طیب" },
              { english: "Syed Ahmad Gul", urdu: "سید احمد گل" },
              { english: "Syed Noor-ul-Islam", urdu: "سید نور الاسلام" },
            ],
          },
          {
            english: "Syed Imdadullah",
            urdu: "سید امداد اللہ",
            children: [
              { english: "Syed Muhammad Anwar", urdu: "سید محمد انور" },
              { english: "Syed Muhammad Shees", urdu: "سید محمد شیث" },
            ],
          },
          {
            english: "Syed Ashraf Ali",
            urdu: "سید اشرف علی",
            children: [{ english: "Syed Badr-ud-Din", urdu: "سید بدر الدین" }],
          },
          {
            english: "Syed Ahmad Ali",
            urdu: "سید احمد علی",
            children: [
              { english: "Syed Masood Ahmad", urdu: "سید مسعود احمد" },
              { english: "Syed Arshad Mahmood", urdu: "سید ارشد محمود" },
            ],
          },
          {
            english: "Syed Kifayatullah",
            urdu: "سید کفایت اللہ",
            children: [
              { english: "Syed Hassan Mahmood", urdu: "سید حسان محمود" },
              { english: "Syed Hisham", urdu: "سید ہشام" },
            ],
          },
          {
            english: "Syed Ubaidullah",
            urdu: "سید عبید اللہ",
            children: [
              { english: "Syed Abdul Rahim", urdu: "سید عبدالرحیم" },
              { english: "Syed Abdul Qadir", urdu: "سید عبدالقادر" },
              { english: "Syed Saeed Ahmad", urdu: "سید سعید احمد" },
            ],
          },
          {
            english: "Syed Muhammad Ilyas",
            urdu: "سید محمد الیاس",
            children: [
              { english: "Syed Safwan", urdu: "سید صفوان" },
              { english: "Syed Sufyan", urdu: "سید سفیان" },
            ],
          },
          {
            english: "Syed Muhammad Zakariya",
            urdu: "سید محمد زکریا",
            children: [
              { english: "Syed Zahid Mahmood", urdu: "سید زاہد محمود" },
            ],
          },
          {
            english: "Syed Abdul Rahman",
            urdu: "سید عبد الرحمن",
            children: [
              { english: "Syed Hayan Mahmood", urdu: "سید حیان محمود" },
            ],
          },
          {
            english: "Syed Shabbir Ahmad",
            urdu: "سید شبیر احمد",
            children: [
              { english: "Syed Muhammad Sumamah", urdu: "سید محمد ثمامہ" },
              { english: "Syed Muhammad Zaid", urdu: "سید محمد زید" },
            ],
          },
        ],
      },
    ],
  },
];

/* -------------------------
   Mobile warning modal
   ------------------------- */
function MobileWarningModal({ onClose, persistKey = "hideMobileTreeWarning" }) {
  const { language } = useLanguage();
  const isUrdu = language === "urdu";

  const [dontShowAgain, setDontShowAgain] = React.useState(false);

  const handleClose = (keepHidden = false) => {
    if (keepHidden) {
      localStorage.setItem(persistKey, "1");
    }
    onClose && onClose();
  };

  // 🚫 Disable body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 
                   bg-black/30 backdrop-blur-sm" // 🌟 Blur background
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-lg rounded-2xl bg-white shadow-xl border border-border p-6 md:p-8"
        >
          {/* Close button */}
          <button
            type="button"
            aria-label="Close"
            onClick={() => handleClose(dontShowAgain)}
            className="absolute top-3 right-3 rounded-full p-2 hover:bg-hover transition"
          >
            ✕
          </button>

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-center text-black">
            {isUrdu ? "📱 موبائل انتباہ" : "📱 Mobile Warning"}
          </h2>

          {/* Message */}
          <p className="text-sm md:text-base text-subtext text-center leading-relaxed mb-6">
            {isUrdu
              ? "یہ صفحہ ڈیسک ٹاپ کے لیے بہتر ڈیزائن کیا گیا ہے۔ موبائل پر جاری رکھ سکتے ہیں، مگر ڈیسک ٹاپ پر زیادہ بہتر نظر آئے گا۔"
              : "This page is optimized for desktop and looks best on a larger screen. You can continue on mobile, but desktop will provide the best experience."}
          </p>

          {/* Highlighted Note */}
          <div
            className={`rounded-xl p-4 border border-dashed border-border bg-mist shadow-inner mb-6 ${
              isUrdu ? "text-right" : "text-left"
            }`}
          >
            <p className="text-sm text-subtext leading-relaxed">
              {isUrdu
                ? "نوٹ: انٹرایکٹیو شجرہ نسب کے لیے ڈیسک ٹاپ بہترین ہے۔ موبائل پر کچھ فیچرز محدود ہو سکتے ہیں۔"
                : "Note: For interactive Lineage of Nasab , desktop is recommended. Mobile works but some features may be limited."}
            </p>
          </div>

          {/* Footer actions */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <label className="inline-flex items-center gap-2 cursor-pointer select-none text-sm text-subtext">
              <input
                type="checkbox"
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
                className="accent-black"
              />
              {isUrdu ? "پھر یہ پیغام نہ دکھائیں" : "Don't show again"}
            </label>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleClose(false)}
                className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-black hover:bg-hover transition shadow-sm"
              >
                {isUrdu ? "📱 موبائل پر جاری رکھیں" : "📱 Continue on mobile"}
              </button>

              <button
                onClick={() => handleClose(dontShowAgain)}
                className="px-5 py-2 rounded-lg text-sm font-semibold bg-black text-white shadow-md hover:shadow-lg transition"
              >
                {isUrdu
                  ? "💻 ڈیسک ٹاپ استعمال کریں"
                  : "💻 Use Desktop (recommended)"}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ---------------------------------------------------------------
// Expandable Node (edge-aware child anchoring under parent)
// - Leftmost parent => leftmost child centered under parent; others to RIGHT
// - Rightmost parent => rightmost child centered under parent; others to LEFT
// - Applies only when children.length > 3 (as per your note)
// - Does NOT push parent's siblings; only reorders/aligns THIS parent's children
// ---------------------------------------------------------------
function ExpandableNode({
  node,
  isUrdu,
  controlledOpen,
  onToggle,
  selfIndex = null, // <-- NEW: my index among my parent’s children
  selfCount = null, // <-- NEW: total siblings at my level
  path = "root",
  lastActivePath,
  setLastActivePath,
  parentActive = false, // <-- NEW: whether my parent was active (used to inherit glow)
}) {
  const hasChildren = Array.isArray(node.children) && node.children.length > 0;

  // controlled vs internal state
  const isControlled = typeof controlledOpen === "boolean";
  const [internalOpen, setInternalOpen] = React.useState(false);
  const open = isControlled ? controlledOpen : internalOpen;

  // accordion: only one open child per parent
  const [openChildIndex, setOpenChildIndex] = React.useState(null);

  // width lock + line bounds (same as before)
  const containerRef = React.useRef(null);
  const [lockedWidth, setLockedWidth] = React.useState(null);
  const [lineBounds, setLineBounds] = React.useState({ left: 0, right: 0 });

  // NEW: measure blocks to center the anchored child exactly
  const leftBlockRef = React.useRef(null);
  const rightBlockRef = React.useRef(null);
  const [leftSpacerW, setLeftSpacerW] = React.useState(0);
  const [rightSpacerW, setRightSpacerW] = React.useState(0);

  // Toggle
  const handleToggle = () => {
    if (!hasChildren) return;
    // mark this node as the last active on any toggle/click
    setLastActivePath && setLastActivePath(path);
    if (isControlled) onToggle && onToggle(!open);
    else setInternalOpen((v) => !v);
  };

  // close children when closing self
  React.useEffect(() => {
    if (!open) setOpenChildIndex(null);
  }, [open]);

  // lock width while open to avoid jitter
  React.useLayoutEffect(() => {
    if (open && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setLockedWidth(rect.width);
    } else if (!open) {
      setLockedWidth(null);
    }
  }, [open]);

  // Am I edge (leftmost/rightmost) among my siblings?
  const isEdgeLeft = selfCount != null && selfIndex === 0;
  const isEdgeRight = selfCount != null && selfIndex === selfCount - 1;
  const manyChildren = hasChildren && node.children.length > 1;

  // If edge + many children => pick anchor child index (original logic)
  const anchorIndex =
    open && manyChildren
      ? isEdgeLeft
        ? 0
        : isEdgeRight
        ? node.children.length - 1
        : null
      : null;

  // Partition children according to the anchor rule
  const children = node.children || [];
  const lastIdx = Math.max(0, children.length - 1);

  let anchored = null;
  let leftBlock = [];
  let rightBlock = [];

  // ------------------ NEW: chunking logic (4-per-row) ------------------
  const CHUNK_SIZE = 5;
  const useMultiRow = children.length > CHUNK_SIZE;
  // helper: children with original idx
  const childrenWithIdx = children.map((c, i) => ({ child: c, idx: i }));
  const chunk = (arr, size) => {
    const out = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  };
  const rows = useMultiRow ? chunk(childrenWithIdx, CHUNK_SIZE) : null;

  // when using multi-row we disable anchored single-row behavior
  const effectiveAnchorIndex = useMultiRow ? null : anchorIndex;
  // ----------------------------------------------------------------------

  if (effectiveAnchorIndex != null) {
    anchored = {
      child: children[effectiveAnchorIndex],
      idx: effectiveAnchorIndex,
    };
    leftBlock = children.slice(0, effectiveAnchorIndex).map((c, i) => ({
      child: c,
      idx: i, // original index
    }));
    rightBlock = children.slice(effectiveAnchorIndex + 1).map((c, i) => ({
      child: c,
      idx: effectiveAnchorIndex + 1 + i, // original index
    }));
  }

  // Measure block widths (include padding that represents the gap next to anchor)
  React.useLayoutEffect(() => {
    if (!open) return;

    const measure = () => {
      const lb = leftBlockRef.current?.getBoundingClientRect?.().width ?? 0;
      const rb = rightBlockRef.current?.getBoundingClientRect?.().width ?? 0;

      // Balance spacers so anchored child’s CENTER aligns with parent center:
      // leftSpacer = rightBlockWidth, rightSpacer = leftBlockWidth
      if (effectiveAnchorIndex != null) {
        if (isEdgeLeft) {
          setLeftSpacerW(rb); // others are on the RIGHT
          setRightSpacerW(0);
        } else if (isEdgeRight) {
          setLeftSpacerW(0);
          setRightSpacerW(lb); // others are on the LEFT
        }
      } else {
        setLeftSpacerW(0);
        setRightSpacerW(0);
      }
    };

    measure();
    // also on resize
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    open,
    effectiveAnchorIndex,
    isEdgeLeft,
    isEdgeRight,
    node.children?.length,
  ]);

  // Compute connector line bounds (only first row if multi-row)
  React.useLayoutEffect(() => {
    if (!open || !containerRef.current) return;

    let nodes;
    if (useMultiRow) {
      // صرف پہلی row پکڑو
      nodes = containerRef.current.querySelectorAll(".multi-row-0 .child-node");
    } else {
      nodes = containerRef.current.querySelectorAll(".child-node");
    }

    if (nodes && nodes.length > 1) {
      const first = nodes[0].getBoundingClientRect();
      const last = nodes[nodes.length - 1].getBoundingClientRect();
      const parentBox = containerRef.current.getBoundingClientRect();
      setLineBounds({
        left: first.left - parentBox.left + first.width / 2,
        right: last.left - parentBox.left + last.width / 2,
      });
    } else {
      setLineBounds({ left: 0, right: 0 });
    }
  }, [
    open,
    lockedWidth,
    node.children?.length,
    leftSpacerW,
    rightSpacerW,
    useMultiRow,
  ]);

  // Also recompute width/line on resize while open
  React.useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setLockedWidth(rect.width);

      const nodes = containerRef.current.querySelectorAll(".child-node");
      if (nodes.length > 1) {
        const first = nodes[0].getBoundingClientRect();
        const last = nodes[nodes.length - 1].getBoundingClientRect();
        const parentBox = containerRef.current.getBoundingClientRect();
        setLineBounds({
          left: first.left - parentBox.left + first.width / 2,
          right: last.left - parentBox.left + last.width / 2,
        });
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  // Active state for this node (last-clicked) and the blink rule
  const selfActive = lastActivePath === path; // exact node match
  const shouldBlink = selfActive || parentActive; // blink this node and its immediate children

  return (
    <div className="flex flex-col items-center relative">
      {/* Parent Node */}
      <div
        onClick={
          hasChildren
            ? handleToggle
            : () => setLastActivePath && setLastActivePath(path)
        }
        className={`bg-[#F5F5F5] border shadow-md px-3 py-2 rounded-lg w-40 text-center transition relative z-10 ${
          hasChildren
            ? "cursor-pointer hover:scale-105 hover:border-black hover:shadow-lg"
            : "cursor-default"
        } ${
          selfActive
            ? "p-0.5 rounded-md border-2 border-blue-500 animate-pulse"
            : ""
        }`}
      >
        <p className={`${isUrdu ? "font-urdu" : "font-medium"} text-sm`}>
          {isUrdu ? node.urdu : node.english}
        </p>
        {/* show overlay when this node is last-clicked OR when its parent is last-clicked (so immediate children also blink) */}
        {shouldBlink && (
          <span
            className="absolute -inset-1 rounded-md border-2 border-blue-400 opacity-90 animate-pulse pointer-events-none"
            aria-hidden
          />
        )}
        {hasChildren && (
          <span className="absolute top-1 right-1 text-xs text-gray-600">
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
            transition={{ duration: 0.3 }}
            className="mt-2 relative flex flex-col items-center"
          >
            {/* vertical line from parent */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 24 }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="w-0.5 bg-gray-500"
            />

            {/* Children container */}
            <div
              ref={containerRef}
              className="relative flex items-start justify-center"
              style={{ width: lockedWidth ?? "auto" }}
            >
              {/* horizontal line only if 2+ children */}
              {node.children.length > 1 &&
                lineBounds.right > lineBounds.left && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: lineBounds.right - lineBounds.left }}
                    exit={{ width: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-0 h-0.5 bg-gray-500"
                    style={{ left: lineBounds.left }}
                  />
                )}

              {/* ---- ANCHORED LAYOUT (edge parents with many children) ---- */}
              {effectiveAnchorIndex != null ? (
                <>
                  {/* Balance spacers so anchor is exactly centered */}
                  <div
                    className="flex-none"
                    style={{ width: leftSpacerW }}
                    aria-hidden
                  />

                  {/* LEFT block (siblings on the left of anchored when parent is rightmost) */}
                  <div
                    ref={leftBlockRef}
                    className={`flex items-start gap-1 ${
                      leftBlock.length ? "pr-1" : ""
                    }`}
                  >
                    {leftBlock.map(({ child, idx }) => {
                      const childPath = `${path}-${idx}`;
                      return (
                        <div
                          key={idx}
                          className={`child-node flex-none w-56 flex flex-col items-center relative `}
                        >
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 24 }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="w-0.5 bg-gray-500"
                          />
                          <div className="mt-6">
                            <ExpandableNode
                              node={child}
                              isUrdu={isUrdu}
                              controlledOpen={openChildIndex === idx}
                              onToggle={() =>
                                setOpenChildIndex((prev) =>
                                  prev === idx ? null : idx
                                )
                              }
                              selfIndex={idx}
                              selfCount={node.children.length}
                              path={childPath}
                              lastActivePath={lastActivePath}
                              setLastActivePath={setLastActivePath}
                              parentActive={selfActive} // <-- pass parent active state so child can inherit glow
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* ANCHORED child exactly under parent */}
                  <div
                    className={`child-node flex-none w-56 flex flex-col items-center relative `}
                  >
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 24 }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="w-0.5 bg-gray-500"
                    />
                    <div className="mt-6">
                      <ExpandableNode
                        node={anchored.child}
                        isUrdu={isUrdu}
                        controlledOpen={openChildIndex === anchored.idx}
                        onToggle={() =>
                          setOpenChildIndex((prev) =>
                            prev === anchored.idx ? null : anchored.idx
                          )
                        }
                        selfIndex={anchored.idx}
                        selfCount={node.children.length}
                        path={`${path}-${anchored.idx}`}
                        lastActivePath={lastActivePath}
                        setLastActivePath={setLastActivePath}
                        parentActive={selfActive}
                      />
                    </div>
                  </div>

                  {/* RIGHT block (siblings on the right of anchored when parent is leftmost) */}
                  <div
                    ref={rightBlockRef}
                    className={`flex items-start gap-1 ${
                      rightBlock.length ? "pl-1" : ""
                    }`}
                  >
                    {rightBlock.map(({ child, idx }) => {
                      const childPath = `${path}-${idx}`;
                      return (
                        <div
                          key={idx}
                          className={`child-node flex-none w-56 flex flex-col items-center relative `}
                        >
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 24 }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="w-0.5 bg-gray-500"
                          />
                          <div className="mt-6">
                            <ExpandableNode
                              node={child}
                              isUrdu={isUrdu}
                              controlledOpen={openChildIndex === idx}
                              onToggle={() =>
                                setOpenChildIndex((prev) =>
                                  prev === idx ? null : idx
                                )
                              }
                              selfIndex={idx}
                              selfCount={node.children.length}
                              path={childPath}
                              lastActivePath={lastActivePath}
                              setLastActivePath={setLastActivePath}
                              parentActive={selfActive}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div
                    className="flex-none"
                    style={{ width: rightSpacerW }}
                    aria-hidden
                  />
                </>
              ) : (
                /* ---- DEFAULT LAYOUT (non-edge parents OR multi-row when >5) ---- */
                <>
                  {useMultiRow ? (
                    /* render rows of up to CHUNK_SIZE (5) children each */
                    <div className="flex flex-col items-center gap-8">
                      {rows.map((row, ridx) => (
                        <div
                          key={ridx}
                          className={`multi-row-${ridx} relative flex items-start gap-1 justify-center`}
                        >
                          {row.map(({ child, idx }) => {
                            const childPath = `${path}-${idx}`;
                            return (
                              <div
                                key={idx}
                                className={`child-node flex-none w-56 flex flex-col items-center relative `}
                              >
                                {/* ✅ vertical line صرف پہلی row میں */}
                                {(!useMultiRow || ridx === 0) && (
                                  <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: 24 }}
                                    exit={{ height: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    className="w-0.5 bg-gray-500"
                                  />
                                )}

                                <div className="mt-2">
                                  <ExpandableNode
                                    node={child}
                                    isUrdu={isUrdu}
                                    controlledOpen={openChildIndex === idx}
                                    onToggle={() =>
                                      setOpenChildIndex((prev) =>
                                        prev === idx ? null : idx
                                      )
                                    }
                                    selfIndex={idx}
                                    selfCount={node.children.length}
                                    path={childPath}
                                    lastActivePath={lastActivePath}
                                    setLastActivePath={setLastActivePath}
                                    parentActive={selfActive}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="relative flex items-start gap-2 justify-center">
                      {node.children.map((child, idx) => {
                        const childPath = `${path}-${idx}`;
                        return (
                          <div
                            key={idx}
                            className={`child-node flex-none w-56 flex flex-col items-center relative `}
                          >
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 8 }}
                              exit={{ height: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                              className="w-0.5 bg-gray-500"
                            />
                            <div className="mt-2">
                              <ExpandableNode
                                node={child}
                                isUrdu={isUrdu}
                                controlledOpen={openChildIndex === idx}
                                onToggle={() =>
                                  setOpenChildIndex((prev) =>
                                    prev === idx ? null : idx
                                  )
                                }
                                selfIndex={idx}
                                selfCount={node.children.length}
                                path={childPath}
                                lastActivePath={lastActivePath}
                                setLastActivePath={setLastActivePath}
                                parentActive={selfActive}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* -------------------------
   FAMILY TREE ROOT (updated)
   ------------------------- */
const FamilyTree = () => {
  const { language } = useLanguage();
  const isUrdu = language === "urdu";

  const [itemsPerRow, setItemsPerRow] = useState(4);
  const [lastActivePath, setLastActivePath] = useState(null);

  // mobile modal visibility
  const [showMobileModal, setShowMobileModal] = useState(false);

  useEffect(() => {
    const updateItemsPerRow = () => {
      if (window.innerWidth < 640) {
        setItemsPerRow(2);
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

  // show modal on small screens unless user opted out
  useEffect(() => {
    const hideKey = localStorage.getItem("hideMobileTreeWarning");
    if (window.innerWidth < 640 && !hideKey) {
      setShowMobileModal(true);
    }
  }, []);

  // ⚡️All data except last one stays in snake layout
  const lastNode = data[data.length - 1];
  const snakeData = data.slice(0, -1);

  // Break into rows (same as your logic)
  const rows = [];
  for (let i = 0; i < snakeData.length; i += itemsPerRow) {
    rows.push(snakeData.slice(i, i + itemsPerRow));
  }

  return (
    <section className="bg-white text-black py-24 px-6 md:px-24 font-body border-t border-[#D1D1D1]">
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 border-b-2 border-[#D1D1D1] inline-block </div>pb-3">
          {isUrdu ? "شجرہ نسب" : "Lineage of Nasab"}
        </h2>
        <p
          className={`mt-3 text-sm font-urdu  tracking-wider text-subtext mb-14 ${
            isUrdu ? "font-urdu leading-loose" : ""
          }`}
        >
          {isUrdu
            ? "یہ مقدس سلسلہ نسب ہمارے خاندان کی نسبت اور خانقاہی وراثت کو ظاہر کرتا ہے۔"
            : "This sacred lineage reflects our family’s ancestry and the spiritual heritage of the Khanqah."}
        </p>
      </div>
      {/* Watermark */}
      <div className="fixed top-1/2 left-1/2 z-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2">
        <img
          src="/images/khanqah logo.png"
          alt="Watermark Logo"
          className="w-full max-w-5xl opacity-10 grayscale filter transform-gpu will-change-transform translate-y-12"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12">
        {/* Snake rows */}
        {rows.map((row, rowIndex) => {
          const isEvenRow = rowIndex % 2 === 0;
          const isLTR = (!isUrdu && isEvenRow) || (isUrdu && !isEvenRow);
          const rowData = isLTR ? row : [...row].reverse();

          return (
            <div key={rowIndex} className="flex flex-col items-center w-full">
              <div className="flex items-center gap-4 w-full justify-center overflow-visible md:overflow-visible px-2">
                {rowData.map((entry, idx) => (
                  <React.Fragment key={idx}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-[#F5F5F5] border border-border shadow-md 
             px-4 py-3 rounded-lg 
             w-36 sm:w-32 md:w-40 lg:w-48 
             text-center hover:scale-105 transition duration-300 
             flex-shrink-0"
                    >
                      <p
                        className={`${
                          isUrdu ? "font-urdu" : "font-medium"
                        } text-xs sm:text-sm`}
                      >
                        {isUrdu ? entry.urdu : entry.english}
                      </p>
                    </motion.div>

                    {idx < rowData.length - 1 &&
                      (isLTR ? (
                        <FaArrowRight className="text-[#6B6B6B] flex-shrink-0" />
                      ) : (
                        <FaArrowLeft className="text-[#6B6B6B] flex-shrink-0" />
                      ))}
                  </React.Fragment>
                ))}
              </div>

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

        {/* Expandable part from last node */}
        {/* ensure the child nodes inside ExpandableNode use `w-40 md:w-56` to keep mobile sizes smaller */}
        <ExpandableNode
          node={lastNode}
          isUrdu={isUrdu}
          path={`last`}
          lastActivePath={lastActivePath}
          setLastActivePath={setLastActivePath}
        />
      </div>

      {/* Mobile-only modal */}
      {showMobileModal && (
        <MobileWarningModal
          defaultIsUrdu={isUrdu}
          onClose={() => setShowMobileModal(false)}
          persistKey="hideMobileTreeWarning"
        />
      )}
    </section>
  );
};

export default FamilyTree;
