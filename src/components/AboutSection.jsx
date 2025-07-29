import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const AccordionItem = ({ title, urduTitle, children, language, defaultOpen = false }) => {
  const isUrdu = language === 'urdu';
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`mb-4 ${isUrdu ? 'text-right' : 'text-left'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full font-semibold text-xl md:text-2xl
          border border-border bg-black/5 hover:bg-hover/10
          px-6 py-4 rounded-md transition-all duration-300
          ${isUrdu ? 'text-right' : 'text-left'}
        `}
        dir={isUrdu ? 'rtl' : 'ltr'}
      >
        {isUrdu ? urduTitle : title}
      </button>

      {isOpen && (
        <div
          className={`
            mt-4 px-6 text-black/80 transition-all duration-300 leading-relaxed
            ${isUrdu ? 'text-right' : 'text-left'}
          `}
          dir={isUrdu ? 'rtl' : 'ltr'}
        >
          {children}
        </div>
      )}
    </div>
  );
};

const SubHeading = ({ title, urduTitle, language, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-left text-lg md:text-xl font-medium hover:font-bold transition duration-300"
      >
        {language === "urdu" ? urduTitle : title}
      </button>
      {isOpen && <div className="mt-2 ml-4 text-base text-black/70">{children}</div>}
    </div>
  );
};

const AboutSection = () => {
  const { language } = useLanguage();

  return (
    <section
      id="about"
      className="bg-white text-black py-24 px-6 md:px-24 font-body border-t border-border "
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-black border-b-2 border-border pb-2 text-center">
            {language === "urdu" ? "خانقاہ کا تعارف" : "About the Khanqah"}
          </h2>
        </div>

        {/* Divider */}
        <div className="flex justify-center">
          <div className="w-16 h-1 bg-subtext mb-10 rounded-full opacity-30" />
        </div>

        {/* Full Content Section */}
        <div
          className={`text-base sm:text-lg md:text-xl text-black/80 max-w-5xl mx-auto urdu-paragraph ${
            language === "urdu"
              ? "font-urdu text-right"
              : "font-body text-left leading-relaxed space-y-6"
          }`}
          dir={language === "urdu" ? "rtl" : "ltr"}
        >
          {/* Main Accordion - Original Description */}
          <AccordionItem
            title="Khanqah Introduction"
            urduTitle="خانقاہ کا مختصر تعارف"
            language={language}
            defaultOpen={true} 
          >
            {/* Original Provided Description */}
            {/* Don't remove or move this part – stays untouched */}
            <AboutDescription />
          </AccordionItem>

          {/* Training Affairs Section */}
          <AccordionItem
            title="Training Affairs"
            urduTitle="تربیتی امور"
            language={language}
          >
            <SubHeading
              title="Quran Memorization Class"
              urduTitle="حفظِ قرآن کلاس"
              language={language}
            >
              {language === "urdu"
                ? "یہ کلاس قرآن کریم کے حفظ کے لیے مختص ہے۔"
                : "This class is dedicated to the memorization of the Holy Quran."}
            </SubHeading>
            <SubHeading
              title="Monthly Zikr Gathering"
              urduTitle="ماہانہ اجتماعِ ذکر"
              language={language}
            >
              {language === "urdu"
                ? "ہر ماہ خانقاہ میں خصوصی ذکر کی محفل منعقد ہوتی ہے۔"
                : "A special monthly Zikr gathering is held at the Khanqah."}
            </SubHeading>
            <SubHeading
              title="Weekly Khatm-e-Khawajgan"
              urduTitle="ہفتہ وار ختمِ خواجگان"
              language={language}
            >
              {language === "urdu"
                ? "ہفتہ وار ختم خواجگان کی روحانی مجلس منعقد کی جاتی ہے۔"
                : "A spiritual Khatm-e-Khawajgan is held weekly."}
            </SubHeading>
            <SubHeading
              title="Daily Zikr Session"
              urduTitle="روزانہ مجلسِ ذکر"
              language={language}
            >
              {language === "urdu"
                ? "روزانہ ذکر کی مجالس منعقد کی جاتی ہیں۔"
                : "Daily zikr sessions are held regularly."}
            </SubHeading>
            <SubHeading
              title="Study of Sufism"
              urduTitle="مطالعۂ تصوف"
              language={language}
            >
              {language === "urdu"
                ? "تصوف کے موضوع پر مطالعہ و گفتگو کی جاتی ہے۔"
                : "Studies and discussions are held on the topic of Sufism."}
            </SubHeading>
            <SubHeading
              title="Spiritual Gatherings"
              urduTitle="اجتماعات"
              language={language}
            >
              {language === "urdu"
                ? "مختلف مواقع پر روحانی اجتماعات منعقد کیے جاتے ہیں۔"
                : "Spiritual gatherings are arranged on various occasions."}
            </SubHeading>
          </AccordionItem>

          {/* Sadat Foundation Section */}
          <AccordionItem
            title="Establishment of Sadat Foundation"
            urduTitle="سادات فاؤنڈیشن کا قیام"
            language={language}
          >
            {language === "urdu"
              ? "سادات فاؤنڈیشن کے قیام کا مقصد تعلیمی، فلاحی و دینی خدمات فراہم کرنا ہے۔"
              : "The foundation aims to provide educational, welfare, and religious services."}
          </AccordionItem>

          {/* Books & Publications */}
          <AccordionItem
            title="Books & Publications"
            urduTitle="کتب و رسائل"
            language={language}
          >
            <SubHeading
              title="Publication Series"
              urduTitle="اشاعتی سلسلہ"
              language={language}
            >
              {language === "urdu"
                ? "خانقاہ سے وابستہ کتب و رسائل کی اشاعت کا سلسلہ جاری ہے۔"
                : "A publication series of books and newsletters associated with the Khanqah is ongoing."}
            </SubHeading>
          </AccordionItem>
        </div>
      </div>
    </section>
  );
};

// Separated for readability
const AboutDescription = () => {
  const { language } = useLanguage();
  // Paste your ENTIRE original <div> content here that renders the full about description
  return (
    <>
          {language === "urdu" ? (
            <>
              <>
                <p>
                  یاسین زئی سادات کا مشہور قبیلہ ہے جس کا بنیادی تعلق ضلع{" "}
                  <strong>پشین</strong> صوبہ <strong>بلوچستان</strong> سے ہے۔{" "}
                  <strong>سید محمد یاسین</strong> ولد{" "}
                  <strong>سید محمد شادی</strong> کے والد{" "}
                  <strong>سید درجمال</strong> تھے، جو بخارہ سے اپنے دوسرے
                  بھائیوں <strong>سید درجلال</strong>،{" "}
                  <strong>سید دربلال</strong> وغیرہ سمیت ہجرت کر کے موجودہ
                  پاکستان منتقل ہو گئے۔ ان کے بھائیوں میں{" "}
                  <strong>درجلال بخاری</strong>، جو کہ{" "}
                  <strong>جلال الدین سرخ پوش</strong> سے مشہور ہوئے، آج{" "}
                  <strong>خریف ضلع بہاولپور</strong> منتقل ہو گئے، جہاں سے یہ
                  خاندان سارے پاکستان میں پھیل گیا۔{" "}
                  <strong>سید محمد درجمال</strong> کی اولاد{" "}
                  <strong>شادی زئی</strong>، <strong>یاسین زئی</strong>،{" "}
                  <strong>حیدر زئی</strong>، <strong>ابراہیم زئی</strong> اور ان
                  کی زیلی شاخوں پر مشتمل ہے جو کہ صوبہ بلوچستان کے طول و عرض میں
                  آباد ہے۔ <strong>سید محمد یاسین</strong> کی قبر اپنے والد کی
                  قبر کے ساتھ <strong>زیارت</strong> نامی گاؤں میں ہے جو کہ{" "}
                  <strong>زرند</strong> نامی گاؤں کے قریب واقع ہے۔
                </p>

                <p>
                  <strong>سید محمد یاسین</strong> کی اولاد میں ایک صاحب، جن کا
                  نام <strong>سید شمس الدین</strong> تھا، اپنے گاؤں سے نکل مکانی
                  کر کے خانہ بدوشی کی زندگی گزارنے لگے۔ چلتے چلتے وہ{" "}
                  <strong>افغانستان</strong> منتقل ہو گئے، جہاں سے ان کا خاندان
                  سارے افغانستان میں پھیل گیا۔ ماضی بعید سے یہ لوگ سردیوں کے
                  موسم میں افغانستان سے نکل کر، پرانے زمانے کے دستور کے مطابق،{" "}
                  <strong>رهلة الشتاء والصيف</strong> اختیار کرتے ہوئے{" "}
                  <strong>گپی</strong> کے اور <strong>پنجاب</strong> کے گرم
                  علاقوں کی طرف کوچ کرتے۔ اسی وجہ سے ان کی قبریں{" "}
                  <strong>صوبہ قدمی</strong>، <strong>کلات</strong>،{" "}
                  <strong>کندہار</strong>، <strong>پشین</strong>،{" "}
                  <strong>لورالائی</strong>، <strong>ایجوب</strong>،{" "}
                  <strong>جنوبی وزیرستان</strong>، <strong>درہ گومل</strong>،{" "}
                  <strong>ضلع میانوالی</strong>، <strong>پنیالہ</strong>،{" "}
                  <strong>ضلع ڈیرہ اسماعیل خان</strong> کے قبرستانوں میں پھیلی
                  ہوئی ہیں۔
                </p>

                <p>
                  <strong>سید محمد علیم</strong> دہلی تشریف لے گئے اور{" "}
                  <strong>شاہ عبد الرحیم دہلوی</strong> سے علوم و معرفت حاصل کی۔
                  ان کے صاحبزادے <strong>سید خواجہ محمد</strong> نے یہ علوم{" "}
                  <strong> سید مہتر موسیٰ</strong> منتقل کیے جہاں وہ اپنے قبیلے
                  کے ماوا بنے۔ <strong>سید مہتر موسیٰ</strong> پہلے{" "}
                  <strong>خواجہ احمد سعید دہلوی</strong> کے مرید ہوئے، پھر ان کے
                  بعد <strong>خواجہ دوست محمد</strong> کے حلقہ ارادت میں شامل ہو
                  گئے۔
                </p>

                <p>
                  <strong>سید مہتر موسیٰ</strong> (المعروف{" "}
                  <strong>فقیر ابا</strong>) کا وصال سن 1871ء میں{" "}
                  <strong>غزنی</strong> میں ہوا۔ ان کا مزار وہیں ہے۔ ان کے تین
                  فرزندوں میں <strong>سید احمد گل</strong> نے ان کی گدی سنبھالی،{" "}
                  <strong>سید عبد الکریم</strong> قوم کے سردار بنے اور{" "}
                  <strong>والی افغانستان</strong> سے{" "}
                  <strong>تحصیل باباونی</strong> میں زمین حاصل کی۔{" "}
                  <strong>سید محمد حسن</strong> ان کے بیٹے تھے جو جوانی میں فوت
                  ہوئے، اور ان کے بیٹے <strong>سید محمد</strong> کی نسل اب
                  پاکستان و بیرون ملک خدمت دین کر رہی ہے۔
                </p>

                <p>
                  تیسرے فرزند <strong>سید فیض اللہ</strong> اپنے بھائی{" "}
                  <strong>سید احمد گل</strong> کے مجاز تھے۔ ان کے صاحبزادے{" "}
                  <strong>سید میر حیدر شاہ</strong> پشتو کے ممتاز شاعر و مورخ
                  تھے۔ ان کی نسل آج بھی پاکستان اور افغانستان میں پھیلی ہوئی ہے۔
                </p>

                <p>
                  <strong>سید احمد گل</strong> سردیوں میں{" "}
                  <strong>خانقاہ یاسین زئی</strong> آتے تھے، اور 1898ء کے بعد
                  مستقل طور پر وہاں قیام پذیر ہو گئے۔ وہ <strong>تجوید</strong>{" "}
                  اور <strong>علومِ دینیہ</strong> کے ماہر تھے۔ ان کے نو فرزند
                  تھے، جن میں سے چار <strong>لاہور</strong> چلے گئے اور پانچ
                  یہیں مقیم ہو گئے۔
                </p>

                <p>
                  بعد ازاں، ان کے بڑے بیٹے <strong>صاحبزادہ عبد الحلیم</strong>{" "}
                  سجادہ نشین بنے۔ ان کے چار بیٹے تھے:{" "}
                  <strong>سید احمد شاہ</strong> (جو بعد میں سجادہ نشین بنے)،{" "}
                  <strong>صاحبزادہ محمود شاہ</strong> (فارغ التحصیل رامپور انڈیا
                  و دیوبند، خوش فکر فارسی شاعر)، <strong>سید محمد شاہ</strong>،
                  اور <strong>سید عبد الحمید شاہ</strong>۔
                </p>

                <p>
                  آج ان کے فرزند <strong>ڈاکٹر رشید احمد</strong>، جو{" "}
                  <strong>دارالعلوم حقانیہ</strong> سے فارغ التحصیل ہیں،{" "}
                  <strong>خانقاہ</strong> کی خدمت سر انجام دے رہے ہیں۔{" "}
                  <strong>یاسین زئی سادات</strong> کی مکمل تفصیل{" "}
                  <strong>کتاب "شجرہ سادات یاسین زئی"</strong> میں محفوظ ہے۔
                </p>
              </>
            </>
          ) : (
            <>
              <p>
                <strong>Yaseen Zai Sadaat</strong> is a prominent tribe
                originally from the district of <strong>Pishin</strong> in the
                province of <strong>Balochistan</strong>.{" "}
                <strong>Syed Muhammad Yaseen</strong>, son of{" "}
                <strong>Syed Muhammad Shadi</strong>, was the grandson of{" "}
                <strong>Syed Darjamal</strong>, who migrated from Bukhara along
                with his brothers <strong>Syed Darjalal</strong>,{" "}
                <strong>Syed Darbalal</strong>, and others to what is now
                Pakistan. Among his brothers, <strong>Darjalal Bukhari</strong>,
                also known as <strong>Jalaluddin Surkh Posh</strong>, migrated
                to <strong>Khareef in Bahawalpur</strong>, from where the family
                spread across Pakistan. <strong>Syed Darjamal’s</strong>{" "}
                descendants include <strong>Shadi Zai</strong>,{" "}
                <strong>Yaseen Zai</strong>, <strong>Haider Zai</strong>,{" "}
                <strong>Ibrahim Zai</strong>, and other sub-branches now settled
                across Balochistan. <strong>Syed Muhammad Yaseen</strong> is
                buried beside his father in the village of{" "}
                <strong>Ziarat</strong>, near <strong>Zarand</strong>.
              </p>

              <p>
                Among <strong>Syed Muhammad Yaseen’s</strong> descendants was a
                figure named <strong>Syed Shamsuddin</strong>, who migrated from
                his village and adopted a nomadic lifestyle. He eventually
                settled in <strong>Afghanistan</strong>, from where his family
                spread throughout the region. Historically, the family followed
                the ancient tradition of{" "}
                <strong>“Rihlat al-Shita’ wa al-Saif”</strong> — migrating
                seasonally during winter from Afghanistan to warmer regions like{" "}
                <strong>Guppi</strong> and <strong>Punjab</strong>. As a result,
                their graves are found in various graveyards across{" "}
                <strong>Qadmi Province</strong>, <strong>Kalat</strong>,{" "}
                <strong>Kandahar</strong>, <strong>Pishin</strong>,{" "}
                <strong>Loralai</strong>, <strong>Ejub</strong>,{" "}
                <strong>South Waziristan</strong>, <strong>Darra Gomel</strong>,{" "}
                <strong>Mianwali</strong>, <strong>Pinyala</strong>, and{" "}
                <strong>Dera Ismail Khan</strong>.
              </p>

              <p>
                Among his descendants was the noble{" "}
                <strong>Syed Muhammad Aleem</strong>, who traveled to Delhi and
                studied spiritual knowledge under{" "}
                <strong>Shah Abdul Rahim Dehlvi</strong>. His son,{" "}
                <strong>Syed Khwaja Muhammad</strong>, transferred this
                knowledge to the settlement of <strong>Syed Mehtar Musa</strong>
                , who became a central spiritual figure of the tribe.{" "}
                <strong>Mehtar Musa</strong> first became a disciple of{" "}
                <strong>Khawaja Ahmad Saeed Dehlvi</strong>, and later joined
                the spiritual lineage of <strong>Khawaja Dost Muhammad</strong>.
              </p>

              <p>
                <strong>Syed Mehtar Musa</strong>, also known as{" "}
                <strong>Faqir Aba</strong>, passed away in the year 1871 in{" "}
                <strong>Ghazni</strong>, where his shrine still stands. Of his
                three sons, <strong>Syed Ahmad Gul</strong> inherited his
                spiritual seat, while <strong>Syed Abdul Kareem</strong> became
                the chief of the tribe. He secured a tract of land in{" "}
                <strong>Tehsil Babaoni</strong> near <strong>Kandahar</strong>{" "}
                from the ruler of Afghanistan,{" "}
                <strong>Amir Habibullah Khan</strong>. His son{" "}
                <strong>Syed Muhammad Hasan</strong> died young, leaving behind
                a son, <strong>Syed Muhammad</strong>, whose descendants
                continue to serve Islam both in Pakistan and abroad.
              </p>

              <p>
                The third son, <strong>Syed Faizullah</strong>, was spiritually
                authorized by his brother <strong>Syed Ahmad Gul</strong>. His
                son, <strong>Syed Mir Haider Shah</strong>, was a prominent
                Pashto poet and historian. His descendants are also spread
                across Afghanistan and Pakistan.
              </p>

              <p>
                <strong>Syed Ahmad Gul</strong> would travel during winters to
                reside at the current location of{" "}
                <strong>Khanqah Yaseen Zai</strong>. After the year 1898, he
                permanently settled there with the hospitality of the Marwat
                tribe. He was an expert in{" "}
                <strong>Qur’anic recitation (Tajweed)</strong> and{" "}
                <strong>Islamic sciences</strong>. He had nine sons — four of
                whom moved to <strong>Lahore</strong>, while the remaining five
                stayed and served at the Khanqah.
              </p>

              <p>
                After him, his eldest son{" "}
                <strong>Sahibzada Abdul Haleem</strong> became the Sajjada
                Nasheen (spiritual successor). He had four sons:{" "}
                <strong>Syed Ahmad Shah</strong> (who later became the Sajjada
                Nasheen), <strong>Sahibzada Mahmood Shah</strong> (a graduate of
                Rampur, India and Deoband, and a thoughtful Persian poet),{" "}
                <strong>Syed Muhammad Shah</strong>, and{" "}
                <strong>Syed Abdul Hameed Shah</strong>.
              </p>

              <p>
                Today, his son <strong>Dr. Rasheed Ahmad</strong>, a graduate of{" "}
                <strong>Darul Uloom Haqqania</strong>, continues to serve the{" "}
                <strong>Khanqah</strong>. The detailed history of the{" "}
                <strong>Yaseen Zai Sadaat</strong> is preserved in the book
                titled <strong>“Shajra-e-Sadaat Yaseen Zai”</strong>.
              </p>
            </>
          )}
    </>
  );
};

export default AboutSection;
