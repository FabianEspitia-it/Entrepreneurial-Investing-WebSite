"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const t = useTranslations("Navbar");
  const locale = useLocale();

  const flagSrc =
    locale === "en" ? "/images/españa.png" : "/images/estados_unidos.png";
  const targetLocale = locale === "en" ? "es" : "en";

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex lg:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-900"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            <li>
              <a
                href="#"
                onClick={() => setMobileNavOpen(false)}
                className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
                {t("home")}
              </a>
            </li>

            <li>
              <a
                href="#team"
                onClick={() => setMobileNavOpen(false)}
                className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
                {t("team")}
              </a>
            </li>
            <li>
              <a
                href="#6weeks"
                onClick={() => setMobileNavOpen(false)}
                className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
                {t("7weeks")}
              </a>
            </li>
            <li>
              <a
                href="#8weeks"
                onClick={() => setMobileNavOpen(false)}
                className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
                {t("8weeks")}
              </a>
            </li>
            <li>
              <a
                href="#pitch"
                onClick={() => setMobileNavOpen(false)}
                className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
                {t("pitch")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setMobileNavOpen(false)}
                className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
                {t("about")}
              </a>
            </li>
            <li>
              <a
                href="#questions"
                onClick={() => setMobileNavOpen(false)}
                className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
                {t("qa")}
              </a>
            </li>
            <li className="pl-5 pt-2">
              <Link href={targetLocale} locale={locale === "en" ? "es" : "en"}>
                <Image
                  src={flagSrc}
                  alt={locale === "en" ? "Español" : "English"}
                  width={23}
                  height={16}
                  className="rounded-full"
                />
              </Link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  );
}
