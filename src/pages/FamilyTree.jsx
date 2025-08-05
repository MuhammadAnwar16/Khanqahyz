import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Node = ({ name }) => (
  <div className="bg-white text-green-900 border border-green-300 rounded-xl px-4 py-2 shadow text-sm text-center min-w-[160px] mx-auto">
    {name}
  </div>
);

const Level = ({ children }) => (
  <div className="flex justify-center items-start gap-6 py-4 relative">{children}</div>
);

const ConnectorLine = ({ height = "h-6" }) => (
  <div className={`w-px bg-green-400 ${height} mx-auto`}></div>
);

const FamilyTree = () => {
  useLanguage();

  return (
    <section className="bg-emerald-50 min-h-screen py-12 px-4 md:px-12 text-center text-green-900 overflow-x-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 border-b-4 border-yellow-400 inline-block pb-2">
        سلسلہ النسب (خانقاہ یاسین زئی)
      </h1>

      <div className="flex flex-col items-center space-y-2">

        {/* Generation 1 */}
        <Level>
          <Node name="حضرت محمد ﷺ" />
        </Level>

        <ConnectorLine />

        {/* Generation 2 */}
        <Level>
          <Node name="حضرت علی کرم اللہ وجہہ" />
        </Level>

        <ConnectorLine />

        {/* Generation 3 - 10 (Inline horizontally) */}
        <Level>
          <Node name="حضرت امام حسین" />
          <Node name="حضرت امام زین العابدین" />
          <Node name="حضرت امام محمد باقر" />
          <Node name="حضرت امام جعفر صادق" />
          <Node name="سید موسی کاظم" />
          <Node name="سید علی رضا" />
        </Level>

        <ConnectorLine />

        <Level>
          <Node name="سید محمد تقی" />
          <Node name="سید نقی" />
          <Node name="سید حسن عسکری" />
          <Node name="سید علی ہادی" />
          <Node name="سید محمد مہدی" />
        </Level>

        <ConnectorLine />

        <Level>
          <Node name="سید عبد اللہ" />
          <Node name="سید یحییٰ" />
          <Node name="سید قاسم" />
        </Level>

        <ConnectorLine />

        <Level>
          <Node name="سید جعفر زکی" />
        </Level>

        <ConnectorLine />

        {/* Siblings */}
        <Level>
          <Node name="سید عبد الرحمان" />
          <Node name="سید عبد العزیز" />
          <Node name="سید علی حسین" />
        </Level>

        <ConnectorLine />

        {/* Downward Lineage */}
        <Level>
          <Node name="سید علی زین العابدین" />
        </Level>

        <ConnectorLine />
        <Level>
          <Node name="سید سلیمان" />
        </Level>

        <ConnectorLine />
        <Level>
          <Node name="سید حسن محمد" />
        </Level>

        <ConnectorLine />
        <Level>
          <Node name="سید احمد محمد" />
        </Level>

        <ConnectorLine />
        <Level>
          <Node name="سید محمد الیاس" />
        </Level>

        <ConnectorLine />
        <Level>
          <Node name="سید ابو الفتح" />
        </Level>

        <ConnectorLine />
        <Level>
          <Node name="سید احمد نور فقیرؒ" />
        </Level>

      </div>
    </section>
  );
};

export default FamilyTree;
