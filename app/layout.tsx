import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Talent Mucho | Build Your Team. Anywhere.",
  description:
    "Talent Mucho is a boutique global talent studio helping companies build meaningful, distributed teams. Curated remote staffing, talent sourcing, and dedicated team members.",
  keywords: [
    "remote staffing",
    "global talent",
    "distributed teams",
    "talent sourcing",
    "remote hiring",
    "staffing agency",
  ],
  openGraph: {
    title: "Talent Mucho | Build Your Team. Anywhere.",
    description:
      "A boutique global talent studio helping companies build meaningful, distributed teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
