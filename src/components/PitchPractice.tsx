import Growth from "./icons/GrowthSVG";
import Dialog from "./icons/DialogSVG";
import React from "react";
import Hands from "./icons/HandsSVG";
import Org from "./icons/OrgSVG";
import { Fade } from "react-awesome-reveal";
import { useTranslations } from "next-intl";

export default function PitchPractice() {
  const t = useTranslations("Pitch");
  return (
    <section
      id="pitch"
      className="relative flex flex-col items-center md:px-44 md:pt-28 py-20"
    >
      <Fade triggerOnce>
        <h2 className="md:text-4xl text-3xl font-semibold mb-4 text-center">
          {t("our_pitch")}{" "}
          <span className="text-gradient-2">{t("ritual")}</span>
        </h2>
        <p className="text-center md:text-base text-sm text-gray-700">
          {t("description")}
          <br />
          {t("description_2")}
        </p>
        <div className="md:flex md:flex-row md:gap-7 gap-9 pt-8 grid grid-cols-2 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center rounded-full shadow-xl p-4 size-32 md:size-40 border-2">
            <Org />
            <p className="text-center md:text-base text-sm mt-4 text-gray-700">
              {t("first_ball")}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-full shadow-xl p-4 size-32 md:size-40 border-2">
            <Dialog />
            <p className="text-center md:text-base text-sm mt-4 text-gray-700">
              {t("second_ball")}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-full shadow-xl p-4 size-32 md:size-40 border-2">
            <Hands />
            <p className="text-center md:text-base text-sm mt-4 text-gray-700">
              {t("third_ball")}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-full shadow-xl p-4 size-32 md:size-40 border-2">
            <Growth />
            <p className="text-center md:text-base text-sm mt-4 text-gray-700">
              {t("fourth_ball")}
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
}
