import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  // Weights 500 and 600 are only applied to body-font (DM Sans) elements via
  // Tailwind's font-medium — never to Cormorant display text. Dropping them
  // removes 4 font-file requests (2 weights × normal + italic) on every cold load.
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Junoon Coaching",
    template: "%s | Junoon Coaching",
  },
  description:
    "Elite fitness coaching for the South Asian community. Build a strong, confident, healthy body without giving up the foods you love.",
  openGraph: {
    siteName: "Junoon Coaching",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable} h-full`}
    >
      <head>
        {/*
          Preconnect to Typeform so the DNS lookup + TCP + TLS handshake happen
          in the background. Every page has an "Apply for Coaching" CTA pointing
          here — without this hint the browser starts cold on click.
        */}
        <link rel="preconnect" href="https://form.typeform.com" />
        <link rel="dns-prefetch" href="https://form.typeform.com" />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-bark antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
