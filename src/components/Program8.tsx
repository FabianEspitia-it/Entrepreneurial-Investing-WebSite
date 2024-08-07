import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { Fade, Bounce, Zoom } from "react-awesome-reveal";
import {
  FaCheckCircle,
  FaSearch,
  FaClipboardCheck,
  FaHandsHelping,
  FaFileContract,
  FaStar,
} from "react-icons/fa";

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

function ModuleItem({
  title,
  subtopics,
  icon: Icon,
}: {
  title: string;
  subtopics: string[];
  icon: React.ComponentType;
}) {
  return (
    <Disclosure>
      {({ open }: { open: boolean }) => (
        <>
          <Disclosure.Button className="text-lg flex justify-between items-center w-full py-3 px-4 text-left font-bold">
            <div className="flex items-center gap-2">
              <div className="text-EI_new_green">
                <Icon />
              </div>
              <p className="block pl-1">{title}</p>
            </div>
            <ChevronDownIcon
              className={clsx(
                "w-6 h-6 transition-transform",
                open ? "rotate-180" : "rotate-0"
              )}
            />
          </Disclosure.Button>

          <Animation>
            <Disclosure.Panel className="text-gray-800 my-4 px-4">
              <ul className="list-disc pl-5">
                {subtopics.map((subtopic, index) => (
                  <li key={index}>{subtopic}</li>
                ))}
              </ul>
            </Disclosure.Panel>
          </Animation>
        </>
      )}
    </Disclosure>
  );
}

export default function ModulesEight() {
  const t = useTranslations("Program");
  const locale = useLocale();

  const modules = [
    {
      title: t("module1"),
      subtopics: [t("first_topic")],
      icon: FaCheckCircle,
    },
    {
      title: t("module2"),
      subtopics: [t("second_topic"), t("third_topic")],
      icon: FaSearch,
    },
    {
      title: t("module3"),
      subtopics: [t("fourth_topic"), t("fifth_topic"), t("sixth_topic")],
      icon: FaClipboardCheck,
    },
    {
      title: t("module4"),
      subtopics: [t("seventh_topic")],
      icon: FaHandsHelping,
    },

    {
      title: t("module5"),
      subtopics: [t("eighth_topic")],
      icon: FaFileContract,
    },

    {
      title: t("module6"),
      subtopics: [t("ninth_topic"), t("tenth_topic")],
      icon: FaStar,
    },
  ];
  return (
    <section id="8weeks" className="relative px-4 md:pt-28 py-20">
      <Fade triggerOnce>
        <h2 className="md:text-4xl text-3xl font-semibold text-center text-gray-900 pb-10 md:pb-5">
          {t("8weeks")}{" "}
          <span className="text-gradient-2">
            {" "}
            {locale === "es" ? t("program_2") : t("program")}{" "}
          </span>{" "}
          {t("for_entrepreneurial")}{" "}
          <span className="text-gradient-2">{t("investors")}</span>
        </h2>
        <div className="md:max-w-4xl mx-auto pt-4">
          {modules.map((module, index) => (
            <div key={index}>
              <ModuleItem
                title={module.title}
                subtopics={module.subtopics}
                icon={module.icon}
              />
              {index < modules.length && (
                <hr className="my-4 w-full border-EI_new_green" />
              )}
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
}
