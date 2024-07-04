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
        "fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white z-50 lg:px-11 ",
        !top && "backdrop-blur-lg shadow-lg duration-200 bg-white/90"
      )}
    >
      <a className="top-0" href="/">
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
      {/* 
    <Image className='pl-6' src="/images/logo verde-03.png" alt="EI" width={170} height={190} />
    <h1 className="lg:text-2xl lg:pl-12 font-bold pl-4 text-md ">ENTREPRENEURIAL</h1>
    */}
      <nav className="pl-8">
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
    </header>
  );
}
