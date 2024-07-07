"use client";
import { useState, useEffect } from "react";
import AboutUs from "@/components/AboutUs";
import Modules from "@/components/Program";
import Questions from "@/components/QA";
import Sponsors from "@/components/Sponsors";
import PitchPractice from "@/components/PitchPractice";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { useTranslation } from "../i18n/index";
import { Fade } from "react-awesome-reveal";

export default function Home({
  params: { lng },
}: Readonly<{ params: { lng: string } }>) {
  const [top, setTop] = useState<boolean>(true);
  const { t } = useTranslation(lng);

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
    <div className="min-h-screen bg-white">
      <NavBar />

      <main className="flex flex-col justify-center items-center flex-1 px-8 md:mt-44 md:gap-6 mt-40 max-w-screen-xl mx-auto">
        <Hero />
        <AboutUs />
        <Modules />
        <PitchPractice />
        <Sponsors />
        <Questions />
      </main>

      <footer className="bg-gray-50 text-center p-4">
        <p className="text-gray-600">
          All rights reserved Entrepreneurial Investing | Designed and built
          with love - Copyright© 2024
        </p>
      </footer>
    </div>
  );
}
