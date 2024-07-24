import { useTranslations } from "next-intl";
import React from "react";
import { Fade } from "react-awesome-reveal";

export default function AboutUs() {
  const t = useTranslations("About");
  const cardData = [
    {
      title: t("title_1"),
      text: t("text_1"),
    },
    {
      title: t("title_2"),
      text: t("text_2"),
    },
  ];

  return (
    <section id="about" className="md:pt-28 py-20">
      <Fade triggerOnce>
        <h2 className="md:text-4xl text-3xl font-semibold text-center">
          {t("about")}{" "}
          <span className="text-gradient-2">
            {t("entrepreneurial_investing")}
          </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-14 pt-10">
          {cardData.map((card, index) => (
            <div key={index} className="max-w-sm w-full lg:w-1/3 flex-grow">
              <div className="border-1 border-EI_new_green bg-white rounded-3xl p-4 flex flex-col justify-between leading-normal shadow-md shadow-EI_new_green">
                <div className="mb-8">
                  <h2 className="text-gray-900 font-bold md:text-xl text-lg mb-2">
                    {card.title}
                  </h2>
                  <p className="text-gray-700 md:text-base text-sm">
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
}
