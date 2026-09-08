"use client";

import * as React from "react";
import { ProgressiveImage } from "@/components/common/progressive-image";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel";
import { deviceBlurDataURL } from "@/lib/image-placeholders";
import { cn } from "@/lib/utils";

const CAROUSEL_OPTS = {
  align: "start" as const,
  containScroll: false as const,
  dragFree: false,
  loop: false,
  watchDrag: true,
};

type CarouselFeatureItem = {
  altName: string;
  eyebrow: string;
  heading: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  hasImage: boolean;
};

function DeviceFrame({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[22rem] rounded-[2.35rem] border border-black/8 bg-[#1c1b17] p-2 shadow-[0_18px_48px_rgba(28,27,23,0.18)] dark:border-white/10 dark:bg-[#14130f] dark:shadow-[0_24px_64px_rgba(0,0,0,0.45)]">
      <div className="flex items-center justify-center pt-1 pb-2">
        <div className="h-1.5 w-22 rounded-full bg-white/14" />
      </div>
      <div className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-card">
        {children}
      </div>
      <span className="sr-only">{title}</span>
    </div>
  );
}

function ScreenshotPlaceholder({ item }: { item: CarouselFeatureItem }) {
  return (
    <DeviceFrame title={item.altName}>
      <div className="flex min-h-[28rem] flex-col justify-between bg-[image:var(--carousel-panel-bg)] p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-medium text-[0.62rem] text-brand-ink-subtle uppercase tracking-[0.24em]">
              {item.eyebrow}
            </p>
            <h3 className="mt-2 font-semibold text-foreground text-lg">
              {item.altName}
            </h3>
          </div>
          <div className="rounded-full border bg-card/75 px-3 py-1 text-muted-foreground text-xs backdrop-blur-md">
            Preview
          </div>
        </div>

        <div className="mt-6 grid flex-1 gap-3">
          <div className="rounded-[1.35rem] bg-brand-gradient p-[1px]">
            <div className="flex min-h-36 flex-col justify-end rounded-[calc(1.35rem-1px)] bg-card/90 p-4">
              <div className="h-3 w-18 rounded-full bg-primary/40" />
              <div className="mt-3 h-6 w-2/3 rounded-full bg-muted" />
              <div className="mt-2 h-4 w-1/2 rounded-full bg-muted/70" />
            </div>
          </div>

          {/*
            Stand-ins for the four rating buttons, in the app's own rating colours: Again is
            neutral ink, Hard amber, Good green, Easy teal. No red — "Again" is a scheduling
            signal, not a wrong answer.
          */}
          <div className="grid grid-cols-2 gap-3">
            {[
              "bg-muted",
              "bg-brand-accent-tint",
              "bg-brand-positive/20",
              "bg-brand-primary-tint",
            ].map((tone) => (
              <div className={`rounded-[1.1rem] p-3 ${tone}`} key={tone}>
                <div className="h-3 w-10 rounded-full bg-card/80" />
                <div className="mt-3 h-12 rounded-[0.85rem] bg-card/65" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-[1.2rem] border bg-card/75 p-4">
          <div className="h-4 w-24 rounded-full bg-primary/30" />
          <div className="mt-2 h-3 w-2/3 rounded-full bg-muted" />
        </div>
      </div>
    </DeviceFrame>
  );
}

function ScreenshotPresentation({ item }: { item: CarouselFeatureItem }) {
  if (!item.hasImage) {
    return <ScreenshotPlaceholder item={item} />;
  }

  return (
    <ProgressiveImage
      alt={item.altName}
      blurDataURL={deviceBlurDataURL}
      className="h-auto w-65 sm:w-75"
      height={2796}
      placeholder="blur"
      quality={85}
      sizes="(max-width: 640px) 260px, 300px"
      src={item.imageSrc}
      width={1419}
    />
  );
}

export function AppleStyleFeatureCarouselClient({
  items,
}: {
  items: CarouselFeatureItem[];
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [layoutWidth, setLayoutWidth] = React.useState<{
    carouselWidth?: number;
    controlsWidth: number;
    innerWidth?: number;
  }>({
    carouselWidth: undefined,
    controlsWidth: 350,
    innerWidth: undefined,
  });

  React.useEffect(() => {
    if (!api) return;
    const root = api.rootNode();
    if (root) {
      root.style.touchAction = "pan-y";
    }
    api.reInit();
  }, [api]);

  React.useEffect(() => {
    const updateLayoutWidth = () => {
      const { innerWidth } = window;

      if (innerWidth < 1024) {
        setLayoutWidth({
          carouselWidth: undefined,
          controlsWidth: 350,
          innerWidth,
        });
      } else {
        setLayoutWidth({
          carouselWidth: (innerWidth * 1820) / 2560,
          controlsWidth: (innerWidth * 350) / 2560,
          innerWidth,
        });
      }

      api?.reInit();
    };

    updateLayoutWidth();
    window.addEventListener("resize", updateLayoutWidth);

    return () => {
      window.removeEventListener("resize", updateLayoutWidth);
    };
  }, [api]);

  return (
    <div className="w-full">
      <div
        className="mr-0 ml-auto flex flex-col gap-6 px-6 lg:px-0 2xl:px-6 2xl:pr-0"
        style={{
          maxWidth: "100%",
          width: layoutWidth.carouselWidth
            ? `${layoutWidth.carouselWidth}px`
            : undefined,
        }}
      >
        <Carousel
          aria-label="Supporting Ittekimasu features"
          className="w-full"
          opts={CAROUSEL_OPTS}
          setApi={setApi}
        >
          <CarouselContainer
            api={api}
            controlsWidth={layoutWidth.controlsWidth}
            innerWidth={layoutWidth.innerWidth}
            items={items}
          />
        </Carousel>
      </div>
    </div>
  );
}

function CarouselContainer({
  items,
  controlsWidth,
  api,
  innerWidth,
}: {
  items: CarouselFeatureItem[];
  controlsWidth: number;
  api: CarouselApi | undefined;
  innerWidth: number | undefined;
}) {
  const isMobile = innerWidth !== undefined && innerWidth < 1024;
  useCarousel(); // keep context alive for CarouselPrevious / CarouselNext
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const visibleItems = items.slice(0, -1);
  const lastRealIndex = visibleItems.length - 1;

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const nextIndex = api.selectedScrollSnap();

      if (nextIndex > lastRealIndex) {
        api.scrollTo(lastRealIndex);
        setSelectedIndex(lastRealIndex);
        return;
      }

      setSelectedIndex(nextIndex);
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, lastRealIndex]);

  const disableNext = selectedIndex >= lastRealIndex;

  return (
    <>
      <CarouselContent className="">
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;

          if (isLastItem && isMobile) return null;

          return (
            <CarouselItem
              aria-hidden={isLastItem}
              className={cn(
                "flex pl-[16px] lg:basis-[60%] xl:basis-[60%] 2xl:basis-[58%]",
                isLastItem ? "hidden lg:flex" : "",
              )}
              key={item.altName}
            >
              {isLastItem ? null : (
                <article className="grid w-full overflow-hidden rounded-[2rem] border bg-card/70 backdrop-blur-2xl md:min-h-[42rem] 2xl:grid-cols-[0.92fr_1.08fr]">
                  <div className="flex h-full flex-col justify-between p-7 sm:p-8 lg:p-12">
                    <div>
                      <p className="font-medium text-[0.75rem] uppercase tracking-[0.28em]">
                        <span className="text-brand-gradient">
                          {item.eyebrow}
                        </span>
                      </p>
                      <h3 className="mt-4 max-w-sm font-semibold text-[2rem] text-foreground leading-[1.08] sm:text-[2.15rem]">
                        {item.heading}
                      </h3>
                      <p className="mt-5 max-w-md text-base text-muted-foreground leading-relaxed sm:text-lg">
                        {item.body}
                      </p>
                    </div>

                    <div className="mt-6 inline-flex w-fit rounded-full border bg-card/72 px-4 py-2 text-sm shadow-[0_10px_30px_rgba(28,27,23,0.08)] backdrop-blur-xl lg:mt-8">
                      <span className="text-brand-gradient font-bold">
                        {item.altName}
                      </span>
                    </div>
                  </div>

                  <div className="order-first flex min-h-96 items-center justify-center bg-muted/40 p-6 sm:min-h-[26rem] sm:p-8 lg:order-none lg:min-h-0 lg:p-10">
                    <ScreenshotPresentation item={item} />
                  </div>
                </article>
              )}
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <div
        className="mx-auto mt-6 flex flex-col justify-end gap-4 2xl:pr-8"
        style={{
          maxWidth: "100%",
          width: `${controlsWidth}px`,
        }}
      >
        <div className="flex items-center justify-center gap-3 lg:justify-end">
          {visibleItems.map((item, index) => {
            const isActive = index === selectedIndex;

            return (
              <button
                aria-label={`Go to ${item.altName}`}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  isActive
                    ? "w-7 bg-brand-gradient"
                    : "w-2.5 bg-border hover:bg-brand-ink-subtle",
                )}
                key={item.altName}
                onClick={() => {
                  api?.scrollTo(index);
                  setSelectedIndex(index);
                }}
                type="button"
              />
            );
          })}
        </div>
      </div>

      <div
        className="mx-auto mt-6 flex flex-col justify-end gap-4 2xl:pr-8"
        style={{
          maxWidth: "100%",
          width: `${controlsWidth}px`,
        }}
      >
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-end">
          <div className="flex items-center justify-center gap-3 md:justify-end">
            <CarouselPrevious
              aria-label="Previous feature"
              className="static bg-card/72 text-foreground shadow-[0_10px_30px_rgba(28,27,23,0.12)] backdrop-blur-xl hover:bg-card"
            />
            <CarouselNext
              aria-label="Next feature"
              className="static bg-card/72 text-foreground shadow-[0_10px_30px_rgba(28,27,23,0.12)] backdrop-blur-xl hover:bg-card"
              disabled={disableNext}
            />
          </div>
        </div>
      </div>
    </>
  );
}
