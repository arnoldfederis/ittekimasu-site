import { AppStoreBadge } from "@/components/common/app-store-badge";
import { FadeIn } from "@/components/common/motion";

export function FinalCTA() {
  return (
    <section className="border-t py-28">
      <FadeIn className="mx-auto max-w-2xl px-6 text-center">
        <p className="mb-5 font-jp text-brand-accent text-sm tracking-[0.3em]">
          行ってきます
        </p>
        <h2 className="mb-6 text-balance font-bold text-4xl tracking-tight sm:text-5xl lg:text-6xl">
          Say it when you{" "}
          <span className="text-brand-gradient">actually mean it</span>.
        </h2>

        <AppStoreBadge className="h-14" />

        <p className="mt-5 text-muted-foreground text-sm">
          {/*
            "No daily review limit", not "no cap on daily reviews". The looser phrasing
            reads as "nothing is metered", and new cards are still paced at 10 a deck and
            30 a day on Pro — deliberately, because that is what spaced repetition is. What
            Pro removes is the 20-a-day cap on reviewing cards you have already met.
          */}
          Free to start. Pro adds N4, N3 and the ward office, with no daily
          review limit.
        </p>
      </FadeIn>
    </section>
  );
}
