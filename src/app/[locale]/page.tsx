"use client";
import { useState, useEffect } from "react";
import AboutUs from "@/components/AboutUs";
import Modules from "@/components/Program";
import Questions from "@/components/QA";
import Sponsors from "@/components/Sponsors";
import PitchPractice from "@/components/PitchPractice";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { Fade } from "react-awesome-reveal";
import Team from "@/components/Team";
import ModulesEight from "@/components/Program8";
import pick from "lodash/pick";

import {
  useTranslations,
  NextIntlClientProvider,
  useMessages,
} from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("Footer");
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <main className="flex flex-col justify-center items-center flex-1 px-8 max-w-screen-xl mx-auto">
        <Hero />
        <Team />
        <Modules />
        <ModulesEight />
        <PitchPractice />
        <AboutUs />
        <Sponsors />
        <Questions />
      </main>

      <footer className="bg-gray-50 text-center p-4 mt-20">
        <p className="text-gray-600">{t("text")}</p>
      </footer>
    </div>
  );
}
