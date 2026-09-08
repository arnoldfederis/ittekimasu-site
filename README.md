# ittekimasu-site

Marketing and legal site for **Ittekimasu**, the Japan relocation checklist + Japanese spaced-repetition iPhone app. Next.js 16 (App Router, Turbopack), Tailwind v4, shadcn, Bun.

The iOS app links here for its Privacy Policy and Terms of Use — `LEGAL_BASE_URL` in `apps/mobile/src/app/settings.tsx` is `https://ittekimasu.app`. **Those two pages must be live before the app can be submitted**; App Store Connect requires a reachable privacy URL.

## Commands

```bash
bun run dev
```

```bash
bun run build
```

`bun run check-types` typechecks.

## Content lives in one place

`lib/seo.ts` holds the product name, tagline, support email, App Store URL, keywords, footer links and the full FAQ list. The home page renders the first six questions and builds its `FAQPage` JSON-LD from the same array; `/contact` renders all of them. Editing copy there rather than in a component is what keeps the answer Google is shown and the answer on the page identical.

## Theme

`app/globals.css` carries the mobile app's palette verbatim — warm paper canvas, deep teal primary, amber accent, and **no red anywhere**, including `--destructive`. The app runs on positive reinforcement, so a red control here would be the first thing to break that promise. Change a colour in `apps/mobile/src/global.css` and it has to be changed here too.

Two utilities do the brand work: `.text-brand-gradient` and `.bg-brand-gradient`, both driven by `--brand-gradient`. Use them instead of writing a gradient inline — the previous version of this site had the same gradient copied into eight components.

`app/opengraph-image.tsx` is the exception: Satori resolves no CSS variables, so its colours are literals and have to be updated by hand alongside the palette.

## Images

Screenshots live in `public/assets/device-*.png` and the icons use neutral filenames (`icon.png`, `site-image-512x512.png`, `favicon*`, `android-chrome-*`) so the artwork can be swapped without touching code. The carousel checks whether each file exists and renders a styled placeholder for the ones that do not.

## Known gap

`package.json` runs `bunx biome`, but `@biomejs/biome` is not a dependency — `bunx` resolves an unrelated `biome` package that exits 0 without checking anything, so `bun lint`, `bun run format` and `bun run pre:push` currently do nothing. Add `@biomejs/biome` (the config targets schema 2.4.2) to fix it.
