"use client";

import Image from "next/image";
import { AppStoreBadge } from "@/components/common/app-store-badge";
import { ThemeSwitcher } from "@/components/common/theme-switcher";
import { iconBlurDataURL } from "@/lib/image-placeholders";
import { APP_ICON_PATH, SITE_NAME } from "@/lib/seo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/50 border-b bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          className="flex items-center gap-2 font-bold text-xl tracking-tight"
          href="/"
        >
          <Image
            alt="Ittekimasu app icon"
            blurDataURL={iconBlurDataURL}
            className="size-8 rounded-[10px]"
            height={128}
            placeholder="blur"
            priority
            quality={85}
            src={APP_ICON_PATH}
            width={128}
          />
          {SITE_NAME}
        </a>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <AppStoreBadge isPriority={true} />
        </div>
      </div>
    </header>
  );
}
