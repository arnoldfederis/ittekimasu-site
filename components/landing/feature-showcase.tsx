import { FadeIn } from "@/components/common/motion";
import { PhoneMockup } from "@/components/common/phone-mockup";
import { ProgressiveImage } from "@/components/common/progressive-image";
import { deviceBlurDataURL } from "@/lib/image-placeholders";

const SHOWCASES = [
  {
    id: "checklist",
    eyebrow: "Your visa route",
    headline: "Every step, dated against your move.",
    body: "Pick your visa route and target move date and the checklist builds itself — visa paperwork, housing, banking, the ward office run, the things nobody warns you about. Each task carries its own date, counted from the day you land.",
    phoneFirst: false,
    muted: false,
    src: "/assets/device-2.png",
    alt: "Ittekimasu checklist grouped by category with dates relative to the move",
  },
  {
    id: "decks",
    eyebrow: "Start where you are",
    headline: "Kana first, because that is the real wall.",
    body: "Both kana syllabaries are a chart, not a deck — tap any of the 104 characters to hear it, free and with nothing counted against you. Then JLPT N5, N4 and N3 vocabulary, where the front of the card is the word as written and the back is the reading and the meaning, so you recall how to say it and not just what it means. Readings start in romaji and switch to kana the day you would rather be tested.",
    phoneFirst: true,
    muted: true,
    src: "/assets/device-3.png",
    alt: "Ittekimasu kana chart showing the hiragana table",
  },
  {
    id: "review",
    eyebrow: "Spaced repetition",
    headline: "The app decides what you see today.",
    body: "Open a deck and today's session is already decided: everything due comes back first, then at most ten cards you have never met. Clear it and the deck tells you the day it returns rather than pretending to be finished — the silence between sessions is the method, not a gap in it.",
    phoneFirst: false,
    muted: false,
    src: "/assets/device-4.png",
    alt: "Ittekimasu learn tab showing a deck with cards due today and the locked premium decks below",
  },
  {
    id: "ward-office",
    eyebrow: "Ittekimasu Pro",
    headline: "The Japanese the counter will use.",
    body: "The Ward Office deck is the vocabulary of registering your address, enrolling in health insurance, and opening a bank account — 55 cards you will not find grouped this way in a textbook. Pro also unlocks JLPT N4 and N3 and removes the daily review limit.",
    phoneFirst: true,
    muted: true,
    src: "/assets/device-5.png",
    alt: "Ittekimasu Ward Office deck showing Japanese vocabulary used at a city office",
  },
];

export function FeatureShowcase() {
  return (
    <>
      {SHOWCASES.map((s) => (
        <section
          className={`py-24 ${s.muted ? "border-y bg-muted/40" : ""}`}
          id={s.id}
          key={s.id}
        >
          <div className="mx-auto max-w-6xl px-6">
            <div
              className={`flex flex-col items-center gap-16 md:gap-20 ${
                s.phoneFirst ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Text */}
              <FadeIn className="flex-1">
                <p className="mb-3 font-medium text-sm uppercase tracking-widest">
                  <span className="text-brand-gradient">{s.eyebrow}</span>
                </p>
                <h2 className="font-bold text-4xl leading-[1.1] tracking-tight sm:text-5xl">
                  {s.headline}
                </h2>
                <p className="mt-5 max-w-md text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </FadeIn>

              {/* Phone */}
              <div className="flex flex-1 justify-center">
                <div className="relative">
                  <div className="pointer-events-none absolute top-1/2 left-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
                  <PhoneMockup className="relative">
                    <ProgressiveImage
                      alt={s.alt}
                      blurDataURL={deviceBlurDataURL}
                      className="h-auto w-65 sm:w-75"
                      height={2796}
                      placeholder="blur"
                      quality={85}
                      sizes="(max-width: 640px) 260px, 300px"
                      src={s.src}
                      width={1419}
                    />
                  </PhoneMockup>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
