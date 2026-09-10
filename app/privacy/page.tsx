import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { buildMetadata, SUPPORT_EMAIL } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Ittekimasu — how the app handles your account, relocation checklist, study progress, subscriptions, reminders, and support requests.",
  canonical: "/privacy",
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

export default function PrivacyPage() {
  return (
    <LegalPageShell
      effectiveDate="Effective date: August 28, 2026"
      intro="This Privacy Policy explains what Ittekimasu stores about you, where it is stored, and who else touches it. Unlike a purely on-device app, Ittekimasu keeps your checklist and your study progress on a server so they survive a new phone — so this page is specific about what that means."
      title="Privacy Policy"
    >
      <Section title="Your Account">
        <Body>
          Ittekimasu uses Sign in with Apple or Sign in with Google, handled by
          Firebase Authentication. There is no email-and-password option, so
          Ittekimasu never sees, stores, or resets a password. From the sign-in
          provider we receive:
        </Body>
        <BulletList
          items={[
            "A unique account identifier, which is the identity we key everything to",
            "Your email address — if you use Apple's Hide My Email, we only ever see the private relay address",
            "Your display name, if the provider returns one",
          ]}
        />
      </Section>

      <Section title="What Ittekimasu Stores on Its Server">
        <Body>
          The following is stored in Ittekimasu's own database so that it
          follows you to a new device:
        </Body>
        <BulletList
          items={[
            "Your chosen visa route and target move date",
            "Your checklist tasks and which ones you have completed, with completion dates",
            "Which cards you have reviewed, how you rated them, and when each is next due",
            "Your study streak, longest streak, and the dates you studied with a count of reviews for each",
            "Your reminder hour and timezone, if you turn reminders on",
            "Your subscription status for Ittekimasu Pro",
          ]}
        />
        <Body>
          Review history is deliberately shallow: only the most recent answer
          for each card is kept, along with a date and a count for each day you
          studied. Ittekimasu does not keep a permanent log of every answer you
          have ever given.
        </Body>
      </Section>

      <Section title="What Stays on Your Device">
        <Body>
          So that the app works on a plane or an underground train, your decks
          and recent responses are cached on the device, and answers given
          offline are queued locally until a connection returns. Card audio uses
          the Japanese voices already installed in iOS; nothing about
          text-to-speech is sent to a server.
        </Body>
      </Section>

      <Section title="Information Collected Automatically">
        <Body>Ittekimasu has no advertising and no advertising trackers.</Body>
        <BulletList
          items={[
            "Apple may collect device and purchase information through the App Store, according to Apple's privacy policy.",
            "Ittekimasu uses RevenueCat to validate purchases and manage subscription status. RevenueCat receives your account identifier, purchase status, product identifiers, and entitlement status.",
            "Ittekimasu uses OneSignal to deliver the daily reminder. OneSignal receives your account identifier, a push token, and the reminder hour you chose.",
            "Ittekimasu uses Sentry for crash and error reporting. It is configured not to attach personal information to reports, and it is disabled entirely in development builds.",
            "Standard server logs record requests to the Ittekimasu API, including timestamps and IP addresses, and are used to keep the service running and secure.",
          ]}
        />
      </Section>

      <Section title="How We Use Information">
        <BulletList
          items={[
            "Build and show your checklist, dated against your move",
            "Decide which cards are due today and schedule the next review",
            "Keep your streak and the study grid on your profile",
            "Send the one daily reminder you asked for, at the hour you chose in your own timezone",
            "Unlock and restore Ittekimasu Pro",
            "Diagnose crashes and keep the service running",
            "Respond to support requests",
          ]}
        />
      </Section>

      <Section title="Notifications">
        <Body>
          Ittekimasu asks for notification permission only after you have
          finished a review session, never on first launch. If you allow it, the
          daily reminder defaults to 8pm in your timezone and can be changed or
          switched off at any time from your profile. Turning notifications off
          in iOS Settings stops them regardless of what the app is set to.
        </Body>
      </Section>

      <Section title="Subscriptions">
        <Body>
          Ittekimasu Pro is purchased through the Apple App Store and billed by
          Apple. RevenueCat processes the purchase events and tells the
          Ittekimasu server whether your subscription is active. Ittekimasu
          never receives your payment card details.
        </Body>
      </Section>

      <Section title="Support Requests">
        <Body>
          If you contact support, we receive whatever you choose to send — your
          email address, your message, and any details needed to help. Support
          messages are used only to answer you and to fix the problem you
          reported.
        </Body>
      </Section>

      <Section title="Data Sharing">
        <Body>
          Ittekimasu does not sell personal data and does not share it for
          advertising. Data is shared only with the services needed to run the
          app — Google Firebase for sign-in, RevenueCat for subscriptions,
          OneSignal for the daily reminder, Sentry for crash reports, and the
          hosting provider that runs the Ittekimasu server — or where required
          by law.
        </Body>
      </Section>

      <Section title="Deleting Your Data">
        <Body>
          You can delete your account from Settings inside the app. It takes
          effect immediately and there is no waiting period.
        </Body>
        <Body>Deleting your account removes:</Body>
        <BulletList
          items={[
            "Your checklist, card progress, streak, study history and reminder settings, from the Ittekimasu database",
            "Your sign-in record with Google Firebase, including the email address and name it held — so signing in again creates a genuinely new account",
            "Your notification record with OneSignal, including the device token used to deliver reminders",
          ]}
        />
        {/*
          Retaining anything after an erasure request has to be stated, and the reason has to
          be a real one. This is the honest version: the record is kept because Apple requires
          purchases to remain restorable and because someone may still be billed after
          deleting the account — not because it is convenient to keep.
        */}
        <Body>
          One thing is deliberately kept: the record of your subscription held
          by Apple and RevenueCat. Apple requires purchases to remain
          restorable, and a subscription continues to bill until it is cancelled
          through Apple — so that record has to outlive the account, or a
          payment would exist with nothing tying it to anything. It holds no
          study data. Cancel from iPhone Settings, then your Apple Account, then
          Subscriptions.
        </Body>
        <Body>
          Crash reports carry no account identifier, so there is nothing in them
          to attach to you or to delete. You can also reset your learning
          progress on its own, from Settings, without deleting your account.
        </Body>
      </Section>

      <Section title="Children">
        <Body>
          Ittekimasu is not directed at children under 13 and does not knowingly
          collect information from them. The Terms of Use require you to be at
          least 13 to hold an account.
        </Body>
        <Body>
          If you believe a child under 13 has created an account, email{" "}
          {SUPPORT_EMAIL} and we will delete the account and everything stored
          with it.
        </Body>
      </Section>

      <Section title="Not Immigration Advice">
        <Body>
          The checklist is a planning tool, not immigration guidance, and the
          Ward Office deck is vocabulary, not legal instruction. Confirm every
          requirement with the Immigration Services Agency of Japan and with
          your employer before acting on it.
        </Body>
      </Section>

      <Section title="Changes to This Policy">
        <Body>
          This Privacy Policy may be updated from time to time. The effective
          date above will be updated when it is.
        </Body>
      </Section>

      <Section title="Contact">
        <Body>
          Questions about this Privacy Policy? Contact us at{" "}
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
            href="/terms"
          >
            read the Ittekimasu Terms of Use
          </Link>
          .
        </Body>
      </Section>
    </LegalPageShell>
  );
}
