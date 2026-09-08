import Image from "next/image";
import { AppStoreBadge } from "@/components/common/app-store-badge";
import { FadeIn } from "@/components/common/motion";
import { PhoneMockup } from "@/components/common/phone-mockup";
import { deviceBlurDataURL } from "@/lib/image-placeholders";

export function Hero() {
  return (
    <section className="overflow-hidden pt-24 pb-0">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <FadeIn>
          <p className="mb-5 font-jp text-brand-accent text-sm tracking-[0.3em]">
            行ってきます
          </p>
          <h1 className="font-bold text-5xl leading-[1.07] tracking-tight sm:text-6xl lg:text-7xl">
            Move to Japan
            <span className="text-brand-gradient"> knowing what's next</span>.
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Ittekimasu turns your visa route and move date into a dated
            checklist, then teaches the Japanese you will actually use — kana,
            JLPT vocabulary, and the words that come up at the ward office.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <AppStoreBadge isPriority={true} />
            <a
              className="font-medium text-muted-foreground text-sm underline-offset-4 transition-colors hover:text-foreground hover:underline"
              href="#how-it-works"
            >
              See how it works
            </a>
          </div>
          <p className="mt-4 text-muted-foreground text-xs">
            Free: your whole checklist, both kana charts and JLPT N5.
          </p>
        </FadeIn>
      </div>

      <FadeIn
        className="relative mt-16 flex justify-center px-6 pb-0"
        delay={0.3}
      >
        <div className="pointer-events-none absolute top-1/2 left-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />
        <PhoneMockup className="relative">
          <Image
            alt="Ittekimasu checklist screen showing tasks dated against a move to Japan"
            blurDataURL={deviceBlurDataURL}
            className="h-auto w-65 sm:w-75"
            height={2796}
            placeholder="blur"
            priority
            quality={85}
            sizes="(max-width: 640px) 260px, 300px"
            src="/assets/device-1.png"
            width={1419}
          />
        </PhoneMockup>
      </FadeIn>
    </section>
  );
}
