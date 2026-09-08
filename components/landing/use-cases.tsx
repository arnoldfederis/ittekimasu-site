import {
  BanknoteIcon,
  BriefcaseIcon,
  BuildingIcon,
  HouseIcon,
  LanguagesIcon,
  PlaneIcon,
} from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/common/motion";
import { IMMIGRATION_AGENCY_URL } from "@/lib/seo";

/**
 * The checklist's six categories, in the app's own order. `example` is a task of the kind
 * that category holds, and `when` is roughly where it falls relative to the move — the app
 * dates every task from the user's own move date, so these are illustrations, not promises.
 */
const CATEGORIES = [
  {
    icon: BuildingIcon,
    label: "Visa & immigration",
    example: "Certificate of Eligibility",
    when: "before you fly",
  },
  {
    icon: HouseIcon,
    label: "Housing",
    example: "Guarantor and the lease",
    when: "before you fly",
  },
  {
    icon: BanknoteIcon,
    label: "Banking & money",
    example: "Open a Japanese account",
    when: "first weeks",
  },
  {
    icon: BriefcaseIcon,
    label: "Work admin",
    example: "Pension and health insurance",
    when: "first weeks",
  },
  {
    icon: LanguagesIcon,
    label: "Language",
    example: "Ward-office vocabulary",
    when: "start now",
  },
  {
    icon: PlaneIcon,
    label: "Logistics",
    example: "Residence card at the airport",
    when: "arrival day",
  },
];

export function UseCases() {
  return (
    <section className="py-20" id="checklist-categories">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
            The parts of a move that catch people out.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Six categories, each task dated from the day you land — including
            the ones that only start once you are there.
          </p>
        </FadeIn>

        <Stagger
          className="grid grid-cols-2 gap-3 sm:grid-cols-3"
          staggerDelay={0.07}
        >
          {CATEGORIES.map(({ icon: Icon, label, example, when }) => (
            <StaggerItem key={label}>
              <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border bg-card p-5 text-center transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex size-10 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-primary/10">
                  <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">{label}</p>
                  <p className="mt-0.5 text-muted-foreground text-xs">
                    {example}
                  </p>
                  <p className="mt-1 text-brand-ink-subtle text-xs">{when}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/*
          The disclaimer sits with the checklist, not only in the footer. This is the section
          that could read as immigration guidance, so it is the section that has to say it is
          not.
        */}
        <FadeIn className="mx-auto mt-10 max-w-2xl">
          <p className="rounded-2xl bg-brand-accent-tint px-5 py-4 text-center text-muted-foreground text-sm leading-relaxed">
            Ittekimasu is a planning tool, not immigration advice. Confirm every
            requirement with the{" "}
            <a
              className="text-primary underline underline-offset-3 hover:text-primary/80"
              href={IMMIGRATION_AGENCY_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Immigration Services Agency of Japan
            </a>{" "}
            and your employer's HR.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
