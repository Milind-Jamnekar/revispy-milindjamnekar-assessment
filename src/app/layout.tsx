import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Revispy",
  description:
    "At Revispy, we bridge the gap between businesses and their customers by offering reviews & feedbacks that drive growth and trust. In a world where consumer trust is paramount, we help businesses by delivering reviews on product services. Our platform enables businesses to collect, manage, and leverage detailed customer insights to improve their products and services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.className} antialiased`}>{children}</body>
    </html>
  );
}
