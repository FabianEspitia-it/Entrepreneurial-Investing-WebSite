import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { dir } from "i18next";
import { GoogleAnalytics } from "@next/third-parties/google";

const languages = ["en", "es"];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Entrepreneurial Investing",
  description: "Your guide to investing in startups",
};

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={poppins.className}>{children}</body>
      <GoogleAnalytics gaId="G-5SJHQLFVCR" />
    </html>
  );
}
