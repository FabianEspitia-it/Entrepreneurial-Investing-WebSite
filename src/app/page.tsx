"use client";
import { useState, useEffect } from "react";
import AboutUs from "@/components/AboutUs";
import Modules from "@/components/Program";
import Questions from "@/components/QA";
import Sponsors from "@/components/Sponsors";
import PitchPractice from "@/components/PitchPractice";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

export default function Home() {
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
    <div className="min-h-screen bg-white">
      <NavBar />

      <main className="flex flex-col justify-center flex-1 px-8 md:mt-48 md:gap-6 mt-40">
        <Hero />
        <AboutUs />
        <Modules />
        <PitchPractice />
        <Sponsors />
        <Questions />
      </main>

      <footer className="bg-white text-center p-4">
        <p className="text-gray-600">
          All rights reserved Entrepreneurial Investing | Designed and built
          with love - Copyright© 2024
        </p>
      </footer>
    </div>
  );
}
