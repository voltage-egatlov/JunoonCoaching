import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
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

const BASE_URL = "https://junooncoaching.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Junoon Coaching — Elite Fitness Coaching for South Asians",
    template: "%s | Junoon Coaching",
  },
  description:
    "Elite online fitness coaching for Indians and South Asians. Lose weight, build muscle, and get healthy without giving up your culture or the foods you love. NASM-certified coaches who understand your world.",
  keywords: [
    "Indian fitness coach",
    "South Asian personal trainer",
    "online fitness coaching",
    "Indian diet weight loss",
    "South Asian nutrition",
    "NASM certified coach",
    "Junoon Coaching",
    "Coached By Arjav",
    "Indian weight loss",
    "desi fitness coach",
  ],
  authors: [{ name: "Arjav Chhabra", url: BASE_URL }],
  creator: "Arjav Chhabra",
  publisher: "Coached By Arjav LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Junoon Coaching",
    title: "Junoon Coaching — Elite Fitness Coaching for South Asians",
    description:
      "Elite online fitness coaching for Indians and South Asians. Lose weight, build muscle, and get healthy without giving up your culture or the foods you love.",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Junoon Coaching — Elite Fitness Coaching for South Asians",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junoon Coaching — Elite Fitness Coaching for South Asians",
    description:
      "Elite online fitness coaching for Indians and South Asians. Lose weight, build muscle, and get healthy without giving up your culture or the foods you love.",
    images: ["/images/og-image.webp"],
    creator: "@arjavchhabra",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

/* JSON-LD structured data — LocalBusiness + Organization */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Junoon Coaching",
      legalName: "Coached By Arjav LLC",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logos/logo-ivory.png`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "Arjavfitness@gmail.com",
        contactType: "customer service",
      },
      sameAs: ["https://instagram.com/arjavchhabra"],
      founder: {
        "@type": "Person",
        name: "Arjav Chhabra",
        jobTitle: "Founder & Head Coach",
        description:
          "NASM-certified personal trainer specialising in fitness coaching for South Asians.",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      name: "Junoon Coaching",
      url: BASE_URL,
      description:
        "Online fitness coaching for Indians and South Asians worldwide. Personalised training and nutrition plans built around your culture, diet, and lifestyle.",
      serviceType: "Personal Training & Nutrition Coaching",
      areaServed: "Worldwide",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceType: "Online",
      },
      provider: { "@id": `${BASE_URL}/#organization` },
    },
  ],
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
        <link rel="preconnect" href="https://form.typeform.com" />
        <link rel="dns-prefetch" href="https://form.typeform.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-bark antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
