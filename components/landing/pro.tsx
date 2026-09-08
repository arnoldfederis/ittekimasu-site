import { AppStoreBadge } from "@/components/common/app-store-badge";
import { FadeIn } from "@/components/common/motion";
import { PRO_NAME } from "@/lib/seo";

/*
 * Deliberately does NOT list kana or N5. Those are free, and a premium list that offers the
 * reader something they already have discredits the three lines under it — the same rule the
 * in-app paywall follows.
 */
const BENEFITS = [
  "JLPT N4 — 100 cards",
  "JLPT N3 — 100 cards",
  "Ward Office — 55 cards",
  "No daily review limit",
];

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-3.5 text-primary-foreground"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 13l4 4L19 7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
      />
    </svg>
  );
}

export function Pro() {
  return (
    <section className="py-24" id="pro">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <div className="rounded-3xl border bg-card p-10 text-center shadow-[0_24px_80px_-32px_rgba(15,110,86,0.35)] md:p-14 dark:shadow-[0_24px_80px_-32px_rgba(0,0,0,0.6)]">
            <span className="mb-5 inline-block rounded-full bg-brand-accent-tint px-4 py-1.5 font-semibold text-xs uppercase tracking-widest">
              <span className="text-brand-gradient">{PRO_NAME}</span>
            </span>

            <h2 className="mb-5 font-bold text-3xl tracking-tight sm:text-4xl">
              Two hundred and fifty-five more cards.
            </h2>

            <p className="mx-auto mb-9 max-w-lg text-muted-foreground leading-relaxed">
              The checklist, kana and JLPT N5 are free, with twenty reviews a
              day. Pro is for when twenty is not enough and N5 is behind you.
            </p>

            <ul className="mx-auto mb-8 max-w-xs space-y-3 text-left">
              {BENEFITS.map((b) => (
                <li
                  className="flex items-center gap-3 rounded-2xl bg-muted/60 px-4 py-3"
                  key={b}
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary">
                    <CheckIcon />
                  </span>
                  <span className="font-medium text-sm">{b}</span>
                </li>
              ))}
            </ul>

            <p className="mb-7 text-muted-foreground text-sm">
              $4.99 a month or $29.99 a year in the US, after a 7-day free trial
              that becomes paid unless you cancel. The App Store shows your own
              local price.
            </p>

            <AppStoreBadge
              ariaLabel={`Get ${PRO_NAME} on the App Store`}
              className="h-12"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
