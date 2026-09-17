import fs from "node:fs";
import path from "node:path";
import { FadeIn } from "@/components/common/motion";
import { AppleStyleFeatureCarouselClient } from "@/components/landing/apple-style-feature-carousel-client";

type CarouselFeatureItem = {
  altName: string;
  eyebrow: string;
  heading: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
};

const carouselItems: CarouselFeatureItem[] = [
  {
    altName: "Study grid",
    eyebrow: "Twenty weeks",
    heading: "See the days you showed up.",
    body: "A contribution grid of every day you studied, with the streak underneath it. A day with nothing due never breaks the streak — clearing a deck is supposed to buy you quiet, not cost you progress.",
    imageSrc: "/assets/device-6.png",
    imageAlt:
      "Ittekimasu profile screen showing a twenty-week study grid and the current streak",
  },
  {
    altName: "Intervals",
    eyebrow: "No guessing",
    heading: "Every answer shows its own date.",
    body: "Again, Hard, Good, Easy — each button carries the interval it would schedule, so twenty-two days is a choice rather than a surprise. There is no hover state on a phone, and seeing all four is what makes rating yourself honestly feel safe.",
    imageSrc: "/assets/device-7.png",
    imageAlt:
      "Ittekimasu review screen with four rating buttons, each labelled with the interval it schedules",
  },
  {
    altName: "Undo",
    eyebrow: "One step back",
    heading: "A mis-tap is not a setback.",
    body: "Four buttons under one thumb and no confirmation dialog — so every review can be taken back once. Undo does not touch your streak or your study day, because you did turn up.",
    imageSrc: "/assets/device-8.png",
    imageAlt:
      "Ittekimasu review screen showing the undo control after a rating",
  },
  {
    altName: "Card browser",
    eyebrow: "Fix it later",
    heading: "Change an answer without re-reviewing.",
    body: "Browse the cards you have seen, deck by deck, and correct a difficulty you gave in a hurry. A correction spends no daily allowance and moves no streak — and pressing the same button twice changes nothing further.",
    imageSrc: "/assets/device-9.png",
    imageAlt:
      "Ittekimasu seen-cards browser showing a card expanded with rating options",
  },
  {
    altName: "Offline",
    eyebrow: "On the plane",
    heading: "Answers given offline are not lost.",
    body: "Decks are cached on the device, and ratings are queued and sent when you are back on a connection — they survive the app being closed. The one screen that says so is a banner, not a failed request.",
    imageSrc: "/assets/device-10.png",
    imageAlt:
      "Ittekimasu review screen offline, showing the banner that answers will sync later",
  },
  {
    altName: "Listen",
    eyebrow: "Say it out loud",
    heading: "Hear the word, not just read it.",
    body: "Every card and every character in the kana chart can be spoken with a Japanese voice, using the enhanced voices already on your iPhone. In the chart it reads the character itself, so し is shi and not the English word.",
    imageSrc: "/assets/device-11.png",
    imageAlt: "Ittekimasu voice settings screen showing Japanese voice options",
  },
  {
    altName: "Reminders",
    eyebrow: "One nudge",
    heading: "A reminder at your hour, not ours.",
    body: "Pick any hour of the day, in your own timezone — half these users are not in Japan yet, and a night shift is still a schedule. It is skipped entirely on days you already studied or have nothing due.",
    imageSrc: "/assets/device-12.png",
    imageAlt: "Ittekimasu reminder time picker showing every hour of the day and Off",
  },
  {
    altName: "Plan status",
    eyebrow: "Plan",
    heading: "Know what is unlocked.",
    body: "See whether you are on the free plan or Ittekimasu Pro, how many reviews you have left today, when the subscription renews, and restore a purchase on a new phone.",
    imageSrc: "/assets/device-13.png",
    imageAlt:
      "Ittekimasu profile plan card showing the free plan limit and upgrade option",
  },
  {
    altName: "Setup",
    eyebrow: "Three questions",
    heading: "Set up in under a minute.",
    body: "Purpose, visa route, move date — and an explicit way out for people who are only here for the language. No invented visa route just to reach the decks.",
    imageSrc: "/assets/device-14.png",
    imageAlt:
      "Ittekimasu onboarding showing the purpose, visa route and move date steps",
  },
  {
    altName: "Stroke order",
    eyebrow: "How it is written",
    heading: "Every stroke, numbered in order.",
    body: "Tap any kana and see the character drawn stroke by stroke, each one numbered where it begins — and the same for the kanji on a vocabulary card. A numbered diagram rather than an animation, because you came to check something, not to wait for it.",
    imageSrc: "/assets/device-15.png",
    imageAlt:
      "Ittekimasu kana sheet showing a character with each stroke numbered in writing order",
  },
  {
    altName: "Practice",
    eyebrow: "The ones you keep missing",
    heading: "Drill the characters you choose.",
    body: "Pick characters straight off the chart — a row, a whole section, or a handful across both scripts — and shuffle them. The reading stays hidden until you tap, nothing is scored, and none of it spends a review.",
    imageSrc: "/assets/device-16.png",
    imageAlt:
      "Ittekimasu kana chart in picking mode with characters selected and a practice button",
  },
  {
    altName: "",
    eyebrow: "",
    heading: "",
    body: "",
    imageSrc: "",
    imageAlt: "",
  },
];

function hasPublicAsset(imageSrc: string) {
  return fs.existsSync(path.join(process.cwd(), "public", imageSrc));
}

export function AppleStyleFeatureCarousel() {
  const items = carouselItems.map((item) => ({
    ...item,
    hasImage: hasPublicAsset(item.imageSrc),
  }));

  return (
    <section
      aria-labelledby="more-to-love-heading"
      className="overflow-hidden py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 pb-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="font-bold text-[0.75rem] uppercase tracking-[0.28em]">
            <span className="text-brand-gradient">The small things</span>
          </p>
          <h2
            className="mt-4 font-bold text-4xl leading-[1.08] tracking-tight sm:text-5xl"
            id="more-to-love-heading"
          >
            Details that decide whether <br />
            <span className="text-brand-gradient">you keep going</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg">
            Spaced repetition only works if you come back. Most of Ittekimasu is
            about removing the reasons not to.
          </p>
        </FadeIn>
      </div>

      <AppleStyleFeatureCarouselClient items={items} />
    </section>
  );
}
