# Which screenshot goes where

Fourteen slots, all under `public/assets/`, all referenced by filename from code. Drop a file
in with the right name and the page picks it up — no code change.

**These are NOT the App Store screenshots.** The store wants 1290×2796 with no device frame;
this site wants a **framed device mockup** at roughly **1419×2796**, because the page renders
the image as-is with no phone drawn around it. Same raw captures, different treatment: export
the store versions first, then frame the same captures for here.

The carousel checks whether each file exists and renders a styled placeholder for the ones
that do not, so you can ship with gaps and fill them in later — a missing file is a designed
empty state, not a broken image.

## The slots

| File | Where it appears | Screen to capture | Must be true in the shot |
|---|---|---|---|
| `device-1.png` | Hero, and the OG/Twitter share card | **Checklist tab**, top | Several tasks visible with dates, a couple ticked. This is the single most-seen image on the site — it also gets baked into every link preview. |
| `device-2.png` | Showcase 1, "Every step, dated against your move" | **Checklist tab**, scrolled to show category headers | Two or more categories in frame, so "grouped by category" is visibly true |
| `device-3.png` | Showcase 2, "Kana first" | **Kana chart**, hiragana, top | Segmented control + the full gojūon table |
| `device-4.png` | Showcase 3, "The app decides what you see today" | **Review**, card revealed | All four ratings with their intervals readable |
| `device-5.png` | Showcase 4, "The Japanese the counter will use" | **Ward Office deck** — card list or a card mid-review | Recognisably officialdom: 在留カード, 住民登録, 国民健康保険. Needs premium (see below) |
| `device-6.png` | Carousel, "Study grid" | **Profile**, framed on the grid | Filled squares and a streak. Worthless empty |
| `device-7.png` | Carousel, "Intervals" | **Review**, card revealed | Same as device-4 but framed tighter on the rating row |
| `device-8.png` | Carousel, "Undo" | **Review**, just after rating | The undo control visible |
| `device-9.png` | Carousel, "Card browser" | **Cards ▸ a deck**, one row expanded | The four correction buttons and their intervals |
| `device-10.png` | Carousel, "Offline" | **Review** with the device offline | The offline banner at the bottom |
| `device-11.png` | Carousel, "Listen" | **Settings ▸ Voice** | The installed Japanese voices listed |
| `device-12.png` | Carousel, "Reminders" | **Reminder time** picker | An hour selected, and enough of the 24-hour list in frame that it reads as a full day |
| `device-13.png` | Carousel, "Plan status" | **Profile**, plan card | Free plan card with the daily limit and Upgrade — or the Pro card if you'd rather show the paid state |
| `device-14.png` | Carousel, "Setup" | **Onboarding**, visa route step | The route options, including the "coming soon" ones |

## Order to shoot in

Premium state changes what several screens show, and two of them only exist while you are
**not** premium. So:

1. **Free account first** — device-1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14. That is
   everything except the Ward Office slot.
2. Flip premium on:
   ```bash
   PGPASSWORD=postgres psql -h localhost -U postgres -d ittekimasu -v email="'dev.arnoldfederis@gmail.com'" -v premium=true -f ../ittekimasu/apps/mobile/screenshots/premium-toggle.sql
   ```
3. **device-5** (Ward Office), and device-13 again if you want the Pro plan card instead.
4. Flip premium back to `false`.

Before any of it, set the status bar to Apple's 9:41 and a full battery — the command is in
`apps/mobile/screenshots/GUIDE.md` in the app repo. It resets when the simulator reboots.

## Getting the offline shot (device-10)

There is no debug toggle for it, and **stopping the API server will not do it**: the app
drives its online state from `expo-network`'s `isInternetReachable`, so a dead server still
counts as "online" — you get failed requests, not the banner. The device has to actually lose
the internet, and the simulator uses the Mac's connection.

1. Get the app to the **review screen first**, with a card revealed. The JS bundle is already
   loaded at that point, so losing Metro afterwards does not matter.
2. Cut the Mac's Wi-Fi:
   ```bash
   networksetup -setairportpower en0 off
   ```
3. Wait a couple of seconds. The banner slides up from the bottom — bottom, not top, because
   the review screen is a modal with no tab bar under it.
4. Capture the shot.
5. Put it back:
   ```bash
   networksetup -setairportpower en0 on
   ```

**Do not reload the app while offline** — the dev client cannot reach Metro and you will get
the "could not connect to development server" screen instead of your app.

The same trick gets you the paused-state screens if you ever want them: the profile rows for
move date and reminder time disable themselves offline, and the learn tab says the decks are
not saved on this device yet if it has never loaded them.

## Also swappable, same idea

Neutral filenames, so replacing the artwork never touches code:

- `public/icon.png` — header and footer logo
- `public/site-image-512x512.png` — the OG card's icon and the JSON-LD organisation logo
- `public/favicon.ico`, `favicon-16/32/48.png`, `apple-touch-icon.png`, `android-chrome-192/512.png`

The OG card at `app/opengraph-image.tsx` composes `site-image-512x512.png` and
`assets/device-1.png` at request time, so both of those get used twice. Check
`/opengraph-image` in a browser after swapping either one.
