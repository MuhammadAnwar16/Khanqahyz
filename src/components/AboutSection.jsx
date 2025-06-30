import React from "react";
import { useLanguage } from "../context/LanguageContext";

const AboutSection = () => {
  const { language } = useLanguage();

  return (
    <section
      id="about"
      className="bg-white text-black py-24 px-6 md:px-24 font-body border-t border-silver"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-heading text-electric mb-8 border-b-2 border-electric inline-block pb-2">
          {language === "urdu" ? "خانقاہ کا تعارف" : "About the Khanqah"}
        </h2>

        {/* Divider line */}
        <div className="w-16 h-1 bg-electric mx-auto mb-10 rounded-full"></div>

        {/* Paragraphs */}
        <div className="mt-4 text-lg md:text-xl leading-relaxed space-y-6 text-justify max-w-4xl mx-auto text-charcoal">
          {language === "urdu" ? (
            <>
              <p>
                خانقاہ یاسین زئی ایک روحانی مرکز ہے جو صدیوں پرانی صوفی روایت کے مطابق لوگوں کی تربیت، اصلاح اور ذکر و فکر کا مرکز ہے۔
              </p>
              <p>
                اس خانقاہ کی بنیاد حضرت پیر صاحب یاسین زئی نے رکھی، جنہوں نے اپنی زندگی دین اسلام کی خدمت، روحانی تربیت، اور محبت کے پیغام کو عام کرنے میں وقف کی۔
              </p>
              <p>
                آج بھی یہ خانقاہ ذکر و اذکار، دینی تعلیمات، اور محافلِ روحانیت کا گہوارہ بنی ہوئی ہے۔
              </p>
            </>
          ) : (
            <>
              <p>
                Khanqah Yaseen Zai is a spiritual sanctuary rooted in the centuries-old Sufi tradition — a place of reflection, reform, and remembrance.
              </p>
              <p>
                Founded by Hazrat Peer Sahib Yaseen Zai, the Khanqah is dedicated to the service of Islam, spiritual training, and spreading the message of divine love.
              </p>
              <p>
                Even today, it remains a sacred space for zikr, Islamic teachings, and spiritual gatherings that heal and illuminate hearts.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
