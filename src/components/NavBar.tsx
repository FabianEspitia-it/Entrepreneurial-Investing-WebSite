"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";
import clsx from "clsx";

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

          {/* <Image
            src="/images/loguitio_verde.png"
            alt="logo"
            width={60}
            height={60}
          /> */}
        </a>
        <nav className="hidden lg:flex flex-1 justify-center px-8">
          <ul className="flex space-x-7 text-gray-800 font-bold">
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#">Home</a>
            </li>
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#team">Team</a>
            </li>
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#6weeks">6-Weeks</a>
            </li>
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#8weeks">8-Weeks</a>
            </li>
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#pitch">Pitch Practice</a>
            </li>
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#about">About Us</a>
            </li>
            <li className="border-b-2 border-transparent px-1 pt-1 hover:border-EI_new_green hover:text-gradient-2 duration-200">
              <a href="#questions">Q&A</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4 items-center px-6">
          <a
            className="border border-EI_new_green text-EI_new_green p-2 rounded-xl hover:bg-EI_new_green hover:text-white hover:border-EI_new_green duration-200"
            href="https://airtable.com/appjIbygnSo12r4dh/shrbE7RA2RjpsHJ34"
            target="_blank"
            rel="noreferrer"
          >
            Apply Now
          </a>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
