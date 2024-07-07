"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import clsx from "clsx";
import Link from "next/link";

export default function NavBar() {
  const [top, setTop] = useState<boolean>(true);

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
        !top && "backdrop-blur-lg shadow-lg duration-200 bg-white/90"
      )}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4 pb-2 lg:px-11">
        <a href="/">
          <Image
            src="/images/loguitio verde.png"
            alt="Logo of Entrepreneurial Investing"
            width={50}
            height={80}
            priority
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </a>
        <nav className="px-8">
          <ul className="lg:flex space-x-10 text-gray-800 font-bold hidden">
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#">Home</a>
            </li>
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#about">About Us</a>
            </li>
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#program">Program</a>
            </li>
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#pitch">Pitch Practice</a>
            </li>
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#">Team</a>
            </li>
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#questions">Q&A</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4 items-center w-fit">
          <button className="border border-EI_new_green text-EI_new_green p-2 rounded-xl hover:bg-EI_new_green hover:text-white hover:border-EI_new_green duration-200">
            Let&apos;s do it
          </button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
