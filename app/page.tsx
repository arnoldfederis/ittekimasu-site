import type { Metadata } from "next";
import { AppleStyleFeatureCarousel } from "@/components/landing/apple-style-feature-carousel";
import { FAQ } from "@/components/landing/faq";
import { FeatureShowcase } from "@/components/landing/feature-showcase";
import { FinalCTA } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pro } from "@/components/landing/pro";
import { UseCases } from "@/components/landing/use-cases";
import {
  APP_NAME,
  absoluteUrl,
  buildMetadata,
  HOME_FAQ_ITEMS,
  OG_ICON_PATH,
  SITE_DESCRIPTION,
  SITE_NAME,
  siteUrl,
  TAGLINE,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: APP_NAME,
  description: SITE_DESCRIPTION,
  canonical: "/",
  openGraphTitle:
    "Ittekimasu: Japan Relocation Checklist & Japanese Flashcards",
  openGraphDescription:
    "Plan your move to Japan with a checklist dated to your visa route, and learn kana, JLPT vocabulary and ward-office Japanese with spaced repetition.",
  twitterDescription: TAGLINE,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: APP_NAME,
      alternateName: SITE_NAME,
      applicationCategory: "EducationalApplication",
      operatingSystem: "iOS",
      description: TAGLINE,
      url: siteUrl,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description:
          "Free plan with the full checklist, both kana charts, JLPT N5 and 20 reviews a day. Ittekimasu Pro is $4.99 a month or $29.99 a year.",
      },
      featureList: [
        "Relocation checklist dated to your visa route and move date",
        "Hiragana and katakana charts with audio, 104 characters each",
        "JLPT N5, N4 and N3 vocabulary decks",
        "Ward Office Japanese vocabulary deck",
        "SM-2 spaced repetition with due-first sessions",
        "Japanese text-to-speech on every card",
        "Study streak and 20-week study grid",
        "Daily reminder in your own timezone",
        "Offline reviewing with queued answers",
      ],
    },
    {
      "@type": "Organization",
      name: SITE_NAME,
      url: siteUrl,
      logo: absoluteUrl(OG_ICON_PATH),
    },
    {
      "@type": "WebSite",
      name: SITE_NAME,
      url: siteUrl,
      description: TAGLINE,
    },
    {
      "@type": "FAQPage",
      mainEntity: HOME_FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: trusted static JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <Header />
      <main>
        <Hero />
        <FeatureShowcase />
        <UseCases />
        <AppleStyleFeatureCarousel />
        <HowItWorks />
        <Pro />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
