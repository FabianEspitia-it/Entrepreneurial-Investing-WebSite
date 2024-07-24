import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { dir } from "i18next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Entrepreneurial Investing",
  description: "Your guide to investing in startups",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-5SJHQLFVCR" />
    </html>
  );
}
