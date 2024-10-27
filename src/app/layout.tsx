import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

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
      <body
        className={`${interSans.className} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="container flex-1">{children}</main>
      </body>
    </html>
  );
}
