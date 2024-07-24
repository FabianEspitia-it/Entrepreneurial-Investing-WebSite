"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Fade, Bounce, Zoom } from "react-awesome-reveal";

function Animation({ children }: { children: JSX.Element }) {
  return (
    <Transition
      enter="transition duration-200 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-150 ease-in"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      {children}
    </Transition>
  );
}

function QuestionItem({ title, answer }: { title: string; answer: string }) {
  return (
    <Disclosure>
      {({ open }: { open: boolean }) => (
        <>
          <Disclosure.Button className="font-semibold text-lg text-left flex gap-2 justify-between items-center w-full py-3 px-4 bg-white hover:bg-gray-100 transition-colors duration-300 rounded-lg shadow-md">
            <p className="block max-w-[90%]">{title}</p>
            <ChevronDownIcon
              className={clsx(
                "w-6 h-6 transition-transform",
                open ? "rotate-180" : "rotate-0"
              )}
            />
          </Disclosure.Button>

          <Animation>
            <Disclosure.Panel className="text-gray-800 my-4 px-4 max-w-3xl">
              {answer}
            </Disclosure.Panel>
          </Animation>
        </>
      )}
    </Disclosure>
  );
}

export default function Questions() {
  const t = useTranslations("Qa");
  return (
    <>
      <section id="questions" className="relative px-4 md:pt-28 pt-20">
        <Fade triggerOnce>
          <h2 className="md:text-4xl text-3xl font-semibold text-center text-gray-900 pb-10 md:pb-10">
            {t("frequently")} <br /> {t("you_have")}{" "}
            <span className="text-gradient-2">{t("questions")}</span>,{" "}
            {t("we_have")}{" "}
            <span className="text-gradient-2">{t("answers")}</span>
          </h2>
          <div className="max-w-4xl mx-auto border border-gray-200 rounded-xl p-6 bg-white shadow-lg">
            <QuestionItem title={t("question_1")} answer={t("answer_1")} />
            <hr className="my-4 w-full border-gray-300" />

            <QuestionItem title={t("question_2")} answer={t("answer_2")} />
            <hr className="my-4 w-full border-gray-300" />

            <QuestionItem title={t("question_3")} answer={t("answer_3")} />
            <hr className="my-4 w-full border-gray-300" />

            <QuestionItem title={t("question_4")} answer={t("answer_4")} />
            <hr className="my-4 w-full border-gray-300" />

            <QuestionItem title={t("question_5")} answer={t("answer_5")} />
          </div>
          <div className="relative px-4 my-14">
            <p className="text-xl text-black max-w-4xl mx-auto text-center">
              {t("still_questions")}{" "}
              <a
                href="mailto:sofia@entrepreneurial.vc"
                className="text-EI_new_green hover:text-EI_yellow transition-colors"
              >
                {t("email")}
              </a>{" "}
            </p>
          </div>
        </Fade>
      </section>
    </>
  );
}
