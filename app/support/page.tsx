import { ArrowLeftIcon, MailIcon } from "lucide-react";
import type { Metadata } from "next";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { buttonVariants } from "@/components/ui/button";
import { buildMetadata, SUPPORT_EMAIL } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Support",
  description:
    "Troubleshooting for Ittekimasu — reminders, missing reviews, restoring Ittekimasu Pro, offline answers, and resetting progress.",
  canonical: "/support",
});

/*
 * Troubleshooting, deliberately. Product questions ("what is Pro?") live on /contact, which
 * renders the shared FAQ_ITEMS list — this page is for when something is not behaving.
 */
const FAQS = [
  {
    q: 'My deck says "All caught up" but I\'ve barely started it.',
    a: "Ittekimasu introduces at most 10 brand-new cards a day per deck, and 30 across all of them, so a deck is not exhausted in one sitting. The deck screen tells you how many cards you have never seen and when the next scheduled card is due. Everything already due always comes back on its day.",
  },
  {
    q: "Why is there nothing to review today?",
    a: "That is spaced repetition working. Your first good answer on a card schedules it six days out, so clearing a deck buys you quiet days. Your streak is not broken by a day with nothing due, and the learn tab tells you the date the deck comes back.",
  },
  {
    q: "My daily reminder did not arrive.",
    a: "Check that notifications are allowed for Ittekimasu in iOS Settings, and that a Focus mode is not filtering it. The reminder is also skipped on purpose if you already studied that day or have nothing due — a nudge towards an empty session is how a push channel gets muted.",
  },
  {
    q: "I answered cards on a plane. Where did they go?",
    a: "They were queued on the device and sent when you were back online — they survive the app being closed. Because the server records a review when it arrives, those answers count towards the day they synced. If you went past the free daily limit while offline, the app tells you how many replayed answers were rejected.",
  },
  {
    q: "I tapped the wrong rating.",
    a: "Tap Undo on the review screen to take back the last answer. If you have already moved on, open the deck from the cards screen, expand the card, and change its difficulty there — that is a correction, so it spends no daily review and does not move your streak.",
  },
  {
    q: "I paid but the premium decks are still locked.",
    a: "Premium is confirmed by our server rather than by the app alone, which usually takes a few seconds. If it has not unlocked after that, open Settings and tap Restore Purchases. If it still will not unlock, email support with the Apple Account you purchased on.",
  },
  {
    q: "How do I start a deck over?",
    a: 'Open the deck from the cards screen and use the menu in the top right to remove every seen card — the deck is taught again from the beginning, and your streak and study history are untouched. To erase the streak and study history as well, use "Start learning over" in Settings.',
  },
  {
    q: "I picked the wrong visa route.",
    a: "Rebuild the checklist from your profile. Rebuilding replaces the existing tasks, which means completion state is discarded — the right trade for a checklist built from the wrong route.",
  },
  {
    q: "How do I delete my account?",
    a: "Settings, then Delete Account. It removes your checklist, card progress, streak, study history and reminder settings from our database. It cannot be undone.",
  },
  {
    q: "How do I request a refund?",
    a: "Refunds are handled by Apple. Visit reportaproblem.apple.com or open your purchase history in the App Store.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function SupportPage() {
  return (
    <>
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: trusted static JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        type="application/ld+json"
      />
      <Header />
      <main className="mx-auto max-w-2xl px-6 py-16">
        {/* Back */}
        <a
          className="mb-10 inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-primary"
          href="/"
        >
          <ArrowLeftIcon className="size-3.5" />
          Back to home
        </a>

        <h1 className="font-bold text-3xl tracking-tight">Support</h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Something not behaving? Start here. For questions about what
          Ittekimasu does and what Pro includes, see the{" "}
          <a
            className="text-primary underline underline-offset-3 hover:text-primary/80"
            href="/contact"
          >
            contact page
          </a>
          .
        </p>

        {/* Contact CTA */}
        <div className="mt-8 flex items-center gap-4 rounded-2xl border bg-muted/30 px-6 py-5">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <MailIcon className="size-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-sm">Email support</p>
            <p className="text-muted-foreground text-sm">
              For bug reports, questions, or feedback.
            </p>
          </div>
          <a
            className={buttonVariants({ size: "sm" })}
            href={`mailto:${SUPPORT_EMAIL}`}
          >
            Send email
          </a>
        </div>

        {/* FAQ */}
        <div className="mt-12 space-y-8 border-t pt-10">
          <h2 className="font-semibold">Common questions</h2>

          <div className="space-y-6">
            {FAQS.map(({ q, a }) => (
              <div key={q}>
                <p className="font-medium text-sm">{q}</p>
                <p className="mt-1.5 text-muted-foreground text-sm leading-relaxed">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-12 flex flex-wrap gap-4 border-t pt-8 text-sm">
          <a
            className="text-muted-foreground hover:text-primary"
            href="/privacy"
          >
            Privacy Policy
          </a>
          <a className="text-muted-foreground hover:text-primary" href="/terms">
            Terms of Use
          </a>
          <a
            className="text-muted-foreground hover:text-primary"
            href="/contact"
          >
            Contact
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
