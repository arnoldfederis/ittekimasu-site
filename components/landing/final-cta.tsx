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
          Free to start. Pro adds N4, N3 and the ward office, with no cap on
          daily reviews.
        </p>
      </FadeIn>
    </section>
  );
}
