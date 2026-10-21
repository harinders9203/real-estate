import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import Newsletter from "@/components/Newsletter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nestora — Design-led Real Estate",
    template: "%s — Nestora",
  },
  description:
    "Nestora helps buyers, sellers and landlords across the Bay Area find, value and sell the right home.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#121212",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=switzer@300,400,500,600,700&display=swap"
        />
      </head>
      <body id="top">
        <Header />
        <main>{children}</main>
        <CtaBand />
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
