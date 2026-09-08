import {
  BugIcon,
  ClockIcon,
  MailIcon,
  MessageSquareIcon,
  SmartphoneIcon,
} from "lucide-react";
import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  buildMetadata,
  FAQ_ITEMS,
  SITE_NAME,
  SUPPORT_EMAIL,
  siteUrl,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Ittekimasu for support, feedback, subscription questions, and bug reports.",
  canonical: "/contact",
});

/*
 * The full question list lives in lib/seo.ts, where the home page takes the first six for
 * its FAQ and its JSON-LD. Keeping a second copy here is how the same question ends up with
 * two different answers on two pages.
 */
const COMMON_QUESTIONS = FAQ_ITEMS;

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${SITE_NAME}`,
  url: `${siteUrl}/contact`,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: SUPPORT_EMAIL,
  },
};

function ContactCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border backdrop-blur-sm">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-primary-tint text-primary">
          {icon}
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-1.5 text-muted-foreground text-sm">
      {items.map((item) => (
        <li className="flex items-start gap-2" key={item}>
          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ContactPage() {
  return (
    <>
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: trusted static JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
        type="application/ld+json"
      />
      <LegalPageShell
        intro="Need help with Ittekimasu, or spotted a wrong reading on a card? Send a note and we'll do our best to help."
        title="Contact Ittekimasu"
      >
        <section className="grid gap-4 sm:grid-cols-2">
          <ContactCard icon={<MailIcon className="size-5" />} title="Support">
            <p className="mb-3 text-muted-foreground text-sm">
              For app support, subscription questions, bug reports, or feedback.
            </p>
            <a
              className="inline-flex items-center gap-1.5 font-medium text-primary text-sm underline underline-offset-3 hover:text-primary/80"
              href={`mailto:${SUPPORT_EMAIL}`}
            >
              {SUPPORT_EMAIL}
            </a>
          </ContactCard>

          <ContactCard
            icon={<SmartphoneIcon className="size-5" />}
            title="Subscription Help"
          >
            <p className="mb-2 text-muted-foreground text-sm">
              Subscriptions are managed by Apple.
            </p>
            <BulletList
              items={[
                "Manage or cancel: iPhone Settings → Apple Account → Subscriptions → Ittekimasu",
                "Or use Restore Purchases in Settings inside the app",
                "Still need help? Email us",
              ]}
            />
          </ContactCard>

          <ContactCard
            icon={<MessageSquareIcon className="size-5" />}
            title="Feedback"
          >
            <p className="text-muted-foreground text-sm">
              Have an idea, a visa route we should cover, or a card that reads
              wrong? We'd love to hear it. Email us at{" "}
              <a
                className="text-primary underline underline-offset-3 hover:text-primary/80"
                href={`mailto:${SUPPORT_EMAIL}`}
              >
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          </ContactCard>

          <ContactCard
            icon={<BugIcon className="size-5" />}
            title="Bug Reports"
          >
            <p className="mb-2 text-muted-foreground text-sm">
              Please include the following when reporting a bug:
            </p>
            <BulletList
              items={[
                "Device model",
                "iOS version",
                "What happened",
                "Steps to reproduce",
                "Screenshot if helpful",
              ]}
            />
          </ContactCard>
        </section>

        <div className="flex items-center gap-3 rounded-2xl bg-brand-accent-tint px-5 py-4">
          <ClockIcon className="size-4 shrink-0 text-brand-accent" />
          <p className="text-muted-foreground text-sm">
            We try to respond as soon as possible, but response times may vary.
          </p>
        </div>

        <section id="common-questions">
          <h2 className="mb-1 font-bold text-2xl tracking-tight">
            Common Questions
          </h2>
          <p className="mb-8 text-muted-foreground">
            Quick answers to questions about Ittekimasu.
          </p>

          <Accordion className="border-0">
            {COMMON_QUESTIONS.map(({ question, answer }) => (
              <AccordionItem key={question} value={question}>
                <AccordionTrigger className="cursor-pointer text-left">
                  {question}
                </AccordionTrigger>
                <AccordionContent>
                  <p>{answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 rounded-2xl bg-muted/40 px-6 py-5 text-center">
            <p className="text-muted-foreground text-sm">
              Still have a question?{" "}
              <a
                className="font-medium text-primary underline underline-offset-3 hover:text-primary/80"
                href={`mailto:${SUPPORT_EMAIL}`}
              >
                Email {SUPPORT_EMAIL}
              </a>
            </p>
          </div>
        </section>
      </LegalPageShell>
    </>
  );
}
