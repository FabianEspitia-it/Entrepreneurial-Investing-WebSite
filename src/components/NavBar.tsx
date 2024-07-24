"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function NavBar() {
  const [top, setTop] = useState<boolean>(true);
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const flagSrc =
    locale === "en" ? "/images/españa.png" : "/images/estados_unidos.png";
  const targetLocale = locale === "en" ? "es" : "en";

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 bg-white",
        !top && "backdrop-blur-lg shadow-md duration-200 bg-white/90"
      )}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4 lg:px-10">
        <a href="/">
          <Image
            src="/images/EI_final_logo.png"
            alt="logo"
            width={170}
            height={60}
          />
        </a>
        <nav className="hidden lg:flex flex-1 justify-center px-8">
          <ul className="flex space-x-7 text-gray-800 font-bold">
            <li className="border-b-2 border-transparent pt-2 px-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#">{t("home")}</a>
            </li>

            <li className="border-b-2 border-transparent pt-2 px-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#team">{t("team")}</a>
            </li>
            {/* 
            
            <li className="border-b-2 border-transparent pt-2 px-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#about">{t("about")}</a>
            </li>
            
            
            
            */}

            <li className="border-b-2 border-transparent pt-2 px-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#6weeks">{t("7weeks")}</a>
            </li>
            <li className="border-b-2 border-transparent pt-2 px-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#8weeks">{t("8weeks")}</a>
            </li>
            <li className="border-b-2 border-transparent pt-2 px-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#pitch">{t("pitch")}</a>
            </li>

            <li className="border-b-2 border-transparent pt-2 px-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#questions">{t("qa")}</a>
            </li>
          </ul>
        </nav>

        <div className="hidden lg:flex mr-5">
          <Link href={targetLocale} locale={locale === "en" ? "es" : "en"}>
            <Image
              src={flagSrc}
              alt={locale === "en" ? "Español" : "English"}
              width={23}
              height={16}
              className="rounded-full"
            />
          </Link>
        </div>

        <div className="flex gap-4 items-center px-6">
          <a
            className="border text-center border-EI_new_green text-EI_new_green p-2 rounded-xl hover:bg-EI_new_green hover:text-white hover:border-EI_new_green duration-200"
            href="https://airtable.com/appjIbygnSo12r4dh/shrbE7RA2RjpsHJ34"
            target="_blank"
            rel="noreferrer"
          >
            {t("apply")}
          </a>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
