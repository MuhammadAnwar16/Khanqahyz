import React from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const ContactSection = () => {
  const { language } = useLanguage();
  const isUrdu = language === "urdu";

  return (
    <section
      id="contact"
      dir={isUrdu ? "rtl" : "ltr"}
      className={`py-24 px-6 md:px-24 border-t border-border bg-white text-black font-body ${
        isUrdu ? "font-urdu" : ""
      }`}
    >
      {/* Watermark Background Logo */}
      <div className="fixed top-1/2 left-1/2 z-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2">
        <img
          src="/images/khanqah logo.png"
          alt="Watermark Logo"
          className="w-full max-w-5xl opacity-10 grayscale filter transform-gpu will-change-transform translate-y-12"
        />
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 border-b-2 border-border inline-block pb-2">
          {isUrdu ? "رابطہ کریں" : "Contact Us"}
        </h2>

        {/* Subheading */}
        <p className="text-sm font-urdu text-subtext mb-12">
          {isUrdu
            ? "زیارت یا روحانی رہنمائی کے لیے رابطہ کریں۔"
            : "Reach out for ziyarat or spiritual guidance."}
        </p>

        {/* Grid: Info + Map + Form */}
        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div className="w-full max-w-4xl mx-auto mt-12 space-y-10 px-4">
            <div className="w-full relative group bg-white border border-border rounded-xl p-6 shadow-md">
              <div
                className={`space-y-4 text-lg leading-relaxed ${
                  isUrdu ? "text-right font-urdu" : "text-left font-body"
                } text-subtext`}
              >
                <p className="flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5 text-black" />
                  <strong>{isUrdu ? "فون:" : "Phone:"}</strong>
                  <span dir="ltr">+92 3001234567</span>
                </p>

                <p className="flex items-center gap-2">
                  <ChatBubbleLeftRightIcon className="w-5 h-5 text-black" />
                  <strong>{isUrdu ? "واٹس ایپ:" : "WhatsApp:"}</strong>{" "}
                  <a
                    dir="ltr"
                    href="https://wa.me/923001234567"
                    target="_blank"
                    rel="noreferrer"
                    className="text-black hover:text-subtext underline transition"
                  >
                    +92 300 1234567
                  </a>
                </p>

                <p className="flex items-center gap-2">
                  <MapPinIcon className="w-5 h-5 text-black" />
                  <strong>{isUrdu ? "پتہ:" : "Address:"}</strong>{" "}
                  {isUrdu
                    ? "خانقاہ یٰسین زئی، پنیالہ، ڈیرہ اسماعیل خان"
                    : "Khanqah Yaseen Zai, Panyala, D.I. Khan"}
                </p>

                <p className="flex items-center gap-2">
                  <EnvelopeIcon className="w-5 h-5 text-black" />
                  <strong>{isUrdu ? "پوسٹ کوڈ:" : "Postal Code:"}</strong> 29110
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full relative group bg-white border border-border rounded-xl shadow-md overflow-hidden">
              <iframe
                title="Khanqah Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.0539300182913!2d70.88149371075285!3d32.25663117377645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39264b34e519578f%3A0xe839d1ce64b684b9!2sKhanqah%20Yaseen%20Zai%20(Topi%20Sahiban)!5e0!3m2!1sen!2s!4v1750505265181!5m2!1sen!2s"
                width="100%"
                height="260"
                allowFullScreen
                loading="lazy"
                className="w-full h-[260px] border-none"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`relative group ${
              language === "urdu"
                ? "rtl font-urdu text-right"
                : "font-body text-left"
            }`}
            dir={language === "urdu" ? "rtl" : "ltr"}
          >
            <form method="POST" noValidate className="space-y-5">
              <p
                className={`text-xl md:text-2xl font-semibold text-subtext mb-4 ${
                  language === "urdu" ? "text-right" : "text-left"
                }`}
              >
                {language === "urdu" ? "فوری سوال" : "Quick Inquiry"}
              </p>

              {[
                {
                  id: "name",
                  label: isUrdu ? "نام:" : "Name:",
                  type: "text",
                  placeholder: isUrdu
                    ? "مثال: محمد انور"
                    : "e.g. Muhammad Anwar",
                },
                {
                  id: "email",
                  label: isUrdu ? "ای میل:" : "Email:",
                  type: "email",
                  placeholder: isUrdu
                    ? "مثال: name@example.com"
                    : "e.g. name@example.com",
                },
                {
                  id: "phone_number",
                  label: isUrdu ? "فون نمبر:" : "Phone Number:",
                  type: "text",
                  placeholder: isUrdu
                    ? "مثال: +92 300 1234567"
                    : "e.g. +92 300 1234567",
                  extraClass: isUrdu ? "text-right" : "text-left", // label alignment changes
                  inputProps: {
                    dir: "ltr", // keep number entry left-to-right
                  },
                },

                {
                  id: "subject",
                  label: isUrdu ? "موضوع:" : "Subject:",
                  type: "text",
                  placeholder: isUrdu
                    ? "مثال: قرآن کلاس کے بارے میں"
                    : "e.g. About Quran Class",
                },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label
                    htmlFor={`id_${id}`}
                    className="block mb-1 font-semibold"
                  >
                    {label}
                  </label>
                  <input
                    id={`id_${id}`}
                    name={id}
                    required
                    type={type}
                    placeholder={placeholder}
                    className="w-full border border-border rounded px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="id_message"
                  className="block mb-1 font-semibold"
                >
                  {isUrdu ? "پیغام:" : "Message:"}
                </label>
                <textarea
                  id="id_message"
                  name="message"
                  rows="5"
                  required
                  placeholder={
                    isUrdu
                      ? "مثال: میں ماہانہ ذکر کی محفل میں شامل ہونا چاہتا ہوں۔"
                      : "e.g. I would like to join the monthly Dhikr gathering."
                  }
                  className="w-full border border-border rounded px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded hover:bg-opacity-90 transition duration-200 font-semibold"
              >
                {isUrdu ? "ارسال کریں" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
