import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Node = ({ name }) => (
  <div className="bg-white text-green-900 border border-green-300 rounded-xl px-3 py-2 shadow text-sm text-center min-w-[200px] whitespace-nowrap">
    {name}
  </div>
);

const Connector = () => (
  <div className="h-4 border-l-2 border-green-400 mx-auto"></div>
);

const Branch = ({ children }) => (
  <div className="flex flex-wrap justify-center items-start space-x-4">{children}</div>
);

const FamilyTree = () => {
  useLanguage();

  return (
    <section className="bg-emerald-50 min-h-screen py-12 px-4 md:px-16 text-center text-green-900">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 border-b-4 border-yellow-400 inline-block pb-2">
        سلسلہ النسب (خانقاہ یاسین زئی)
      </h1>

      <div className="flex flex-col items-center space-y-6">

        <Node name="حضرت محمد ﷺ" />
        <Connector />
        <Node name="حضرت علی کرم اللہ وجہہ" />
        <Connector />
        <Node name="حضرت امام حسین" />
        <Connector />
        <Node name="حضرت امام زین العابدین" />
        <Connector />
        <Node name="حضرت امام محمد باقر" />
        <Connector />
        <Node name="حضرت امام جعفر صادق" />
        <Connector />
        <Node name="سید موسی کاظم" />
        <Connector />
        <Node name="سید علی رضا" />
        <Connector />
        <Node name="سید محمد تقی" />
        <Connector />
        <Node name="سید نقی" />
        <Connector />
        <Node name="سید حسن عسکری" />
        <Connector />
        <Node name="سید علی ہادی" />
        <Connector />
        <Node name="سید محمد مہدی" />
        <Connector />
        <Node name="سید عبد اللہ" />
        <Connector />
        <Node name="سید یحییٰ" />
        <Connector />
        <Node name="سید قاسم" />
        <Connector />
        <Node name="سید جعفر زکی" />
        <Connector />

        <Branch>
          <Node name="سید عبد الرحمان" />
          <Node name="سید عبد العزیز" />
          <Node name="سید علی حسین" />
        </Branch>

        <Connector />
        <Node name="سید علی زین العابدین" />
        <Connector />
        <Node name="سید سلیمان" />
        <Connector />
        <Node name="سید حسن محمد" />
        <Connector />
        <Node name="سید احمد محمد" />
        <Connector />
        <Node name="سید محمد الیاس" />
        <Connector />
        <Node name="سید ابو الفتح" />
        <Connector />
        <Node name="سید احمد نور فقیرؒ" />

        {/* Next part continues below... */}
      </div>
    </section>
  );
};

export default FamilyTree;
