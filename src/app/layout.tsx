import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { appWithTranslation } from "next-i18next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Entrepreneurial Investing",
  description: "Investing in the future of technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
