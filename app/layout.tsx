import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono, Noto_Sans } from "next/font/google";
import { GoogleAnalytics } from "@/components/google-analytics";
import { registeredOfficeAddress } from "@/lib/contact";
import { siteUrl, siteDescription } from "@/lib/site";

const ENTITY_SENTENCE = siteDescription;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DevSolve — Institute for Leadership, Governance & Development",
    template: "%s | DevSolve",
  },
  description: ENTITY_SENTENCE,
  keywords: [
    "DevSolve",
    "leadership institute",
    "local governance",
    "decentralisation",
    "sustainable development goals",
    "AI-driven local leadership",
    "capacity building",
    "development research India",
    "international development leadership",
    "disaster management leadership",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "DevSolve — Institute for Leadership, Governance & Development",
    description: ENTITY_SENTENCE,
    url: siteUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevSolve — Institute for Leadership, Governance & Development",
    description: ENTITY_SENTENCE,
  },
};

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "DevSolve",
  url: siteUrl,
  description: ENTITY_SENTENCE,
  address: {
    "@type": "PostalAddress",
    streetAddress: registeredOfficeAddress,
    addressLocality: "Thiruvananthapuram",
    addressRegion: "Kerala",
    postalCode: "695001",
    addressCountry: "IN",
  },
};

const notoSans = Noto_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${notoSans.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen text-ink antialiased">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />

        <GoogleAnalytics />
      </body>
    </html>
  );
}
