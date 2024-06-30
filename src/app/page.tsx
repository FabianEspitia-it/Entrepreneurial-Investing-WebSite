"use client";

import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Modules from "@/components/Program";
import Questions from "@/components/QA";
import Sponsors from "@/components/Sponsors";
import PitchPractice from "@/components/PitchPractice";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />

      <main className="flex flex-col gap-48 justify-center items-center mx-8 lg:mx-24 mt-44">
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
