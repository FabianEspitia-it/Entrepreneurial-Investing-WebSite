import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { Fade, Bounce, Zoom } from "react-awesome-reveal";
import {
  FaCheckCircle,
  FaSearch,
  FaClipboardCheck,
  FaHandsHelping,
  FaStar,
} from "react-icons/fa";

const modules = [
  {
    title: "Module 1: Intro to VC",
    subtopics: ["Understanding venture capital and angel investing strategies"],
    icon: FaCheckCircle,
  },
  {
    title: "Module 2: Sourcing",
    subtopics: [
      "Build an angel investor brand",
      "Learn how to gather top-quality dealflow by developing an angel brand",
    ],
    icon: FaSearch,
  },
  {
    title: "Module 3: Assesing and portafolio construction",
    subtopics: [
      "Learn how evaluate decks and deals",
      "Master the art of pattern recognition to select the best founders & deals",
      "Framework to decide portfolio construction",
    ],
    icon: FaClipboardCheck,
  },
  {
    title: "Module 4: lessons learned in angel investing",
    subtopics: [
      "Roundatable with multiple VC investors to reflect about lessons learned during Agel Investing",
    ],
    icon: FaHandsHelping,
  },
  {
    title: "Module 5: Premium Module",
    subtopics: [
      "Live Pitch with top founders, and the beast early-stage dealflow of LATAM",
      "Live networking dinners",
    ],
    icon: FaStar,
  },
];

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

export default function Modules() {
  return (
    <section id="program" className="relative px-4 md:pt-28 py-20">
      <Fade triggerOnce>
        <h2 className="md:text-4xl text-3xl font-semibold text-center text-gray-900 pb-10 md:pb-5">
          6-Weeks <span className="text-gradient-2">Program</span> for
          Entreprenurial <span className="text-gradient-2">Investors</span>
        </h2>
        <div className="md:max-w-4xl mx-auto py-4">
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
