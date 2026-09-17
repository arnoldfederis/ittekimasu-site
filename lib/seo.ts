import type { Metadata } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ittekimasu.app";

export const SITE_NAME = "Ittekimasu";
export const APP_NAME = "Ittekimasu: Move to Japan";
export const TAGLINE = "Your move to Japan, one step and one word at a time.";
export const EMOTIONAL_HOOK = "行ってきます — I'm off, and I'll be back.";
export const SITE_DESCRIPTION =
  "Ittekimasu turns a move to Japan into a dated checklist for your visa route and teaches the Japanese you will actually use, with spaced repetition that decides what to show you each day.";

/** The paid tier's name in copy. The RevenueCat entitlement id is `ittekimasu_pro`. */
export const PRO_NAME = "Ittekimasu Pro";

export const SUPPORT_EMAIL = "support@ittekimasu.app";

export const APP_STORE_URL = "https://apps.apple.com/app/id6803396159";

/**
 * Where the checklist sends people for anything that is actually immigration guidance. The
 * app is not that, and every page that describes the checklist has to say so.
 */
export const IMMIGRATION_AGENCY_URL = "https://www.isa.go.jp/en/index.html";

/**
 * Neutral filenames on purpose — the artwork behind them is swapped without touching code.
 */
export const APP_ICON_PATH = "/icon.png";
export const OG_ICON_PATH = "/site-image-512x512.png";

export const KEYWORDS = [
  "moving to Japan app",
  "Japan relocation checklist",
  "Japan visa checklist",
  "engineer specialist visa checklist",
  "Japanese flashcards app",
  "JLPT N5 flashcards",
  "JLPT N4 flashcards",
  "JLPT N3 flashcards",
  "hiragana flashcards",
  "katakana flashcards",
  "learn hiragana and katakana",
  "kana stroke order",
  "kanji stroke order app",
  "how to write hiragana",
  "hiragana practice quiz",
  "learn Japanese with romaji",
  "Japanese flashcards romaji",
  "spaced repetition Japanese",
  "SRS Japanese app",
  "ward office Japanese vocabulary",
  "city hall Japanese phrases",
  "residence card Japan",
  "moving to Japan for work",
  "relocate to Japan iPhone app",
  "Japan expat checklist",
  "Japanese vocabulary daily review",
  "learn Japanese before moving",
  "Japan move planner",
  "Japanese study streak app",
];

export const SITE_PATHS = [
  "/",
  "/privacy",
  "/terms",
  "/contact",
  "/support",
] as const;

export const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What is Ittekimasu?",
    answer:
      "Ittekimasu is an iPhone app for people moving to Japan. It builds a dated checklist from your visa route and target move date, gives you a kana chart to read off, and teaches JLPT vocabulary and the words you need at a ward office with spaced repetition.",
  },
  {
    question: "Is Ittekimasu free?",
    answer:
      "Yes. The free plan includes the complete checklist for your visa route, the full kana chart, the JLPT N5 deck, 20 reviews a day, streaks, and the daily reminder. The kana chart is unmetered — it is a reference, not a deck, so reading it costs none of your daily reviews.",
  },
  {
    question: "What does Ittekimasu Pro add?",
    answer:
      "Ittekimasu Pro unlocks the JLPT N4, JLPT N3 and Ward Office decks and removes the 20-reviews-a-day limit. New cards are still introduced at a steady pace on Pro — 10 per deck a day, 30 across all of them — because that is what spaced repetition is; the limit Pro removes is on reviewing cards you have already met. It is $4.99 a month or $29.99 a year in the US — the App Store shows your own local price, tax included where that applies. Both start with a 7-day free trial, which becomes a paid subscription unless you cancel before it ends.",
  },
  {
    question: "Is the checklist official immigration advice?",
    answer:
      "No. The checklist is a planning tool written from common experience, not immigration guidance. Always confirm requirements with the Immigration Services Agency of Japan and with your employer's HR before you act on anything in the app.",
  },
  {
    question: "Which visa routes are covered?",
    answer:
      "The checklist ships for the Engineer / Specialist in Humanities / International Services route (技術・人文知識・国際業務), which is the usual one for a software engineer hired by a Japanese company. Six more are listed in the app and marked coming soon: Working Holiday, Instructor, Student, Spouse or Child of a Japanese National, Dependent, and Digital Nomad. Everything else — the kana chart, the decks, streaks and reminders — works whatever route you are on.",
  },
  {
    question: "Do I have to be moving to Japan to use it?",
    answer:
      "No. Onboarding offers a language-only path, which skips the checklist entirely and takes you straight to the decks.",
  },
  {
    question: "Which Japanese does it teach?",
    answer:
      "Both kana syllabaries as a chart you tap through and hear — 104 characters each, free and unmetered, with stroke order on any character and a practice mode you build by picking off the chart — plus JLPT N5, N4 and N3 vocabulary decks and a Ward Office deck of the words that come up when you register your address, enrol in health insurance, or open a bank account. Vocabulary cards show kanji stroke order too.",
  },
  {
    question: "I can't read kana yet. Can I still use it?",
    answer:
      "Yes — that is the case it is built for. Vocabulary cards show their readings in romaji by default, so a card reads otoko · man rather than おとこ · man, and the kana chart is labelled throughout. The cog in a review session turns romaji off when you no longer need it, and sizes the type up if the characters are hard to make out — both sit on the card they change rather than in a settings screen. On the kana chart, browsing always shows the reading and practice always hides it until you tap, so that side needs no switch at all. Audio plays the Japanese whichever way it is set.",
  },
  {
    question: "How does the daily review work?",
    answer:
      "Each card is scheduled by the SM-2 spaced repetition algorithm: the better you know a card, the further out it goes. Cards that are due come back first, and each deck introduces at most 10 brand-new cards a day — 30 across all your decks, on the free plan and on Pro alike — so a 100-card deck is not exhausted in one sitting. Reviews of cards you have already met are what the free plan caps at 20 a day and Pro does not cap at all.",
  },
  {
    question: "Does a day with nothing due break my streak?",
    answer:
      "No. Clearing a deck buys you days of quiet by design, and losing a streak for that would punish you for doing the work. The streak only moves on days you actually had something to review.",
  },
  {
    question: "Does it work offline?",
    answer:
      "Yes for reviewing. Your decks are cached on the device, and answers given offline are queued and sent when you are back online — they survive the app being closed. Screens that exist only to save something, like changing your move date, wait until you have a connection.",
  },
  {
    question: "Can I fix an answer I tapped by mistake?",
    answer:
      "Yes. Every review has one step of undo, and the card browser lets you change the difficulty you gave a card without spending a review or moving your streak.",
  },
  {
    question: "How do I sign in?",
    answer:
      "With Apple or Google. There is deliberately no email-and-password option: both providers return an already-verified address, so there is no password for anyone to lose or for us to store.",
  },
  {
    question: "Can I delete my account?",
    answer:
      "Yes, from Settings inside the app, and it takes effect immediately. It removes your checklist, card progress, streak, study history and reminder settings from our database, your sign-in record with Firebase, and your notification record with OneSignal — so signing in again creates a genuinely new account. The record of your subscription held by Apple and RevenueCat is kept, because Apple requires purchases to stay restorable and a subscription keeps billing until you cancel it through Apple.",
  },
  {
    question: "How do I cancel Ittekimasu Pro?",
    answer:
      "Subscriptions are billed by Apple. Open iPhone Settings, tap your Apple Account, then Subscriptions, then Ittekimasu, then cancel.",
  },
  {
    question: "Does Ittekimasu sell my data?",
    answer: "No. Ittekimasu does not sell personal data.",
  },
  {
    question: "How do I contact support?",
    answer: `Email ${SUPPORT_EMAIL} and we will do our best to help.`,
  },
] as const;

export const HOME_FAQ_ITEMS = FAQ_ITEMS.slice(0, 6);

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function buildMetadata({
  title,
  description,
  canonical,
  openGraphTitle,
  openGraphDescription,
  twitterDescription,
}: {
  title: string;
  description: string;
  canonical: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  twitterDescription?: string;
}): Metadata {
  return {
    title,
    description,
    keywords: KEYWORDS,
    alternates: {
      canonical,
    },
    openGraph: {
      title: openGraphTitle ?? title,
      description: openGraphDescription ?? description,
      url: canonical,
      type: "website",
      siteName: SITE_NAME,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: APP_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle ?? title,
      description: twitterDescription ?? openGraphDescription ?? description,
      images: ["/twitter-image"],
    },
  };
}

export function createFaqPageJsonLd(
  items: ReadonlyArray<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}
