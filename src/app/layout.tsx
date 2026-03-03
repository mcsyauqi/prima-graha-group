import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prima Graha Group | Building Indonesia's Future",
  description:
    "Prima Graha Group is Indonesia's leading property developer with 35+ years of experience, delivering world-class residential, commercial, and mixed-use developments across major Indonesian cities.",
  keywords: [
    "property developer",
    "Indonesia",
    "real estate",
    "Prima Graha Group",
    "residential",
    "commercial",
    "construction",
  ],
  openGraph: {
    title: "Prima Graha Group | Building Indonesia's Future",
    description:
      "Indonesia's leading property developer with 35+ years of experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSerif.variable} ${dmSans.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
