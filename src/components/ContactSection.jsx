import React from "react";
import { useLanguage } from "../context/LanguageContext";
import whatsappIcon from "../assets/whatsapp-icon.png";

const ContactSection = () => {
  const { language } = useLanguage();

  return (
    <section
      id="contact"
      className="bg-white text-black py-24 px-6 md:px-24 font-body border-t border-border relative"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl  md:text-5xl font-heading font-bold mb-6 border-b-2 border-border inline-block pb-2">
          {language === "urdu" ? "رابطہ کریں" : "Contact Us"}
        </h2>

        {/* Intro Text */}
        <p className="text-lg font-urdu text-subtext mb-12">
          {language === "urdu"
            ? "زیارت یا روحانی رہنمائی کے لیے رابطہ کریں۔"
            : "Reach out for ziyarat or spiritual guidance."}
        </p>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Details */}
          <div className="space-y-5 font-urdu text-left text-lg text-subtext leading-relaxed">
            <p>
              📞 <strong>{language === "urdu" ? "فون:" : "Phone:"}</strong>{" "}
              +92 300 1234567
            </p>
            <p>
              📱 <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noreferrer"
                className="text-black hover:underline hover:text-subtext transition"
              >
                +92 300 1234567
              </a>
            </p>
            <p>
              📍{" "}
              <strong>
                {language === "urdu" ? "پتہ:" : "Address:"}
              </strong>{" "}
              {language === "urdu"
                ? "خانقاہ یاسین زئی، پنیالہ، ڈیرہ اسماعیل خان"
                : "Khanqah Yaseen Zai, Panyala, D.I. Khan"}
            </p>
            <p>
              📬{" "}
              <strong>
                {language === "urdu" ? "پوسٹ کوڈ:" : "Postal Code:"}
              </strong>{" "}
              29110
            </p>
          </div>

          {/* Map Embed */}
          <div className="rounded-xl shadow-soft border border-border overflow-hidden bg-mist">
            <iframe
              title="Khanqah Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.0539300182913!2d70.88149371075285!3d32.25663117377645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39264b34e519578f%3A0xe839d1ce64b684b9!2sKhanqah%20Yaseen%20Zai%20(Topi%20Sahiban)!5e0!3m2!1sen!2s!4v1750505265181!5m2!1sen!2s"
              width="100%"
              height="260"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-none"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Chat Button */}
      <a
        href="https://wa.me/923001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-28 right-6 md:bottom-24 md:right-8 z-50"
      >
        <img
          src={whatsappIcon}
          alt="Chat on WhatsApp"
          className="w-14 h-14 rounded-full shadow-soft hover:scale-110 transition-transform duration-300 border-2 border-white"
        />
      </a>
    </section>
  );
};

export default ContactSection;
