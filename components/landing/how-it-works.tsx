import { FadeIn, Stagger, StaggerItem } from "@/components/common/motion";

const STEPS = [
  {
    step: "1",
    title: "Tell it your route and your date",
    description:
      "Your visa route and target move date become a checklist with a date on every task. Not moving? Choose the language-only path and go straight to the decks.",
  },
  {
    step: "2",
    title: "Clear a few cards a day",
    description:
      "Read the kana chart until the characters stick, then start the vocabulary decks. A session is short on purpose — due cards first, at most ten new ones per deck, and every answer tells you when the card comes back.",
  },
  {
    step: "3",
    title: "Land able to read the counter",
    description:
      "The checklist runs past your arrival, so the ward office, the bank and the phone contract are already on it — in the words you have been practising.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-muted/30 py-24" id="how-it-works">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto mb-14 max-w-xl text-center">
          <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
            How it works.
          </h2>
        </FadeIn>

        <Stagger
          className="mx-auto grid max-w-3xl gap-10 sm:grid-cols-3"
          staggerDelay={0.1}
        >
          {STEPS.map((s) => (
            <StaggerItem key={s.step}>
              <div className="flex flex-col gap-3">
                <span className="font-bold text-4xl text-primary tabular-nums leading-none">
                  {s.step}
                </span>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
