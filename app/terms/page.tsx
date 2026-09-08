import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import {
  buildMetadata,
  IMMIGRATION_AGENCY_URL,
  SUPPORT_EMAIL,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description:
    "Terms of Use for Ittekimasu, a Japan relocation checklist and Japanese spaced-repetition app for iPhone.",
  canonical: "/terms",
});

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-muted-foreground text-sm leading-relaxed">{children}</p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 text-muted-foreground text-sm">
      {items.map((item) => (
        <li className="flex items-start gap-2" key={item}>
          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TermsPage() {
  return (
    <LegalPageShell
      effectiveDate="Effective date: August 28, 2026"
      intro="These Terms of Use explain how you may use Ittekimasu, an iPhone app that plans a move to Japan and teaches Japanese with spaced repetition."
      title="Terms of Use"
    >
      <Section title="About Ittekimasu">
        <Body>
          Ittekimasu builds a checklist from the visa route and move date you
          give it, and teaches Japanese vocabulary and kana using the SM-2
          spaced repetition algorithm. It keeps your checklist and study
          progress on its server so they survive a new device.
        </Body>
      </Section>

      <Section title="Not Immigration, Legal, or Tax Advice">
        <Body>
          This is the most important term on this page. The checklist is a
          planning aid assembled from common experience — it is not immigration
          guidance, legal advice, tax advice, or an official source of any kind,
          and it is not affiliated with the Japanese government. Requirements
          differ by visa route, municipality, employer and individual
          circumstance, and they change. Always confirm what applies to you with
          the{" "}
          <Link
            className="text-primary underline underline-offset-3 hover:text-primary/80"
            href={IMMIGRATION_AGENCY_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            Immigration Services Agency of Japan
          </Link>
          , your employer's HR department, and where necessary a qualified
          professional. The Ward Office deck teaches vocabulary, not procedure.
        </Body>
      </Section>

      <Section title="Learning Content">
        <Body>
          Deck content is provided for study and is not guaranteed to be free of
          errors or to match any official JLPT word list. Ittekimasu is a study
          aid, not a certification, and does not guarantee any examination
          result.
        </Body>
      </Section>

      <Section title="Your Account">
        <Body>
          You sign in with Apple or Google. You are responsible for keeping that
          account secure — anyone who can sign in as you can see your checklist
          and your progress. You can delete your account, and everything the
          server holds for it, from Settings inside the app.
        </Body>
      </Section>

      <Section title="Your Responsibilities">
        <Body>When you use Ittekimasu, you agree to:</Body>
        <BulletList
          items={[
            "Use the app for lawful purposes only",
            "Keep your device and Apple or Google account secure",
            "Not attempt to copy, reverse engineer, or interfere with the app or its server",
            "Not redistribute deck content as your own",
            "Not misuse the app in ways that could harm others or the service",
          ]}
        />
      </Section>

      <Section title="Free Plan">
        <Body>
          The free plan includes the complete checklist for your visa route, the
          Hiragana, Katakana and JLPT N5 decks, twenty reviews a day, streaks,
          and the daily reminder. New cards are introduced at a limited rate for
          everyone, free and paid alike — that is pacing, not a paywall. Free
          features may change over time.
        </Body>
      </Section>

      <Section title="Subscriptions and Ittekimasu Pro">
        <Body>
          Ittekimasu Pro unlocks the JLPT N4, JLPT N3 and Ward Office decks and
          removes the daily review limit.
        </Body>
        <BulletList
          items={[
            "Subscriptions are purchased through the Apple App Store. Billing is handled by Apple.",
            "A 7-day free trial is offered; it converts to a paid subscription unless you cancel before it ends.",
            "Your subscription renews automatically unless you cancel before the renewal date.",
            "To cancel: open iPhone Settings, tap your Apple Account, then Subscriptions, then Ittekimasu.",
            "Pricing and available plans may vary by country and may change over time.",
            "Ittekimasu uses RevenueCat to manage subscription status and unlock Pro features.",
            "You can restore purchases in the app if an active subscription is not recognised.",
            "If your subscription lapses, your progress is not deleted. Premium decks lock again and the daily review limit returns.",
          ]}
        />
      </Section>

      <Section title="Reminders and Notifications">
        <Body>
          Ittekimasu can send one daily reminder at an hour you choose in your
          own timezone. Reminders are only delivered if you grant notification
          permission, and they are skipped on days when you have already studied
          or have nothing due. Delivery depends on Apple's and OneSignal's
          services and is not guaranteed.
        </Body>
      </Section>

      <Section title="Offline Use">
        <Body>
          Reviews answered without a connection are queued on the device and
          sent when a connection returns. Because the server records a review
          when it arrives, an answer given offline counts towards the day it
          syncs. If you exceed the free daily limit while offline, the rejected
          answers are reported to you when they replay.
        </Body>
      </Section>

      <Section title="App Changes">
        <Body>
          Ittekimasu will change over time. Features, decks, checklist content
          and plan limits may be added, updated, or removed.
        </Body>
      </Section>

      <Section title="Limitation of Liability">
        <Body>
          Ittekimasu is provided as-is. To the extent allowed by law, the
          developer is not responsible for any loss or damage arising from use
          of the app — including missed deadlines, missed reminders, refused
          applications, data loss, service interruptions, or issues with
          subscriptions handled by Apple. Decisions about your move are yours,
          made on official information, not on this app.
        </Body>
      </Section>

      <Section title="Contact">
        <Body>
          Questions about these Terms? Contact us at{" "}
          <Link
            className="text-primary underline underline-offset-3 hover:text-primary/80"
            href={`mailto:${SUPPORT_EMAIL}`}
          >
            {SUPPORT_EMAIL}
          </Link>
          .
        </Body>
        <Body>
          You can also{" "}
          <Link
            className="text-primary underline underline-offset-3 hover:text-primary/80"
            href="/privacy"
          >
            read the Ittekimasu Privacy Policy
          </Link>{" "}
          or{" "}
          <Link
            className="text-primary underline underline-offset-3 hover:text-primary/80"
            href="/contact"
          >
            contact support
          </Link>
          .
        </Body>
      </Section>
    </LegalPageShell>
  );
}
