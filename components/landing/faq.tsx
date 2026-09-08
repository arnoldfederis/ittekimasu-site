import { FadeIn } from "@/components/common/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HOME_FAQ_ITEMS } from "@/lib/seo";

/**
 * Rendered from the same HOME_FAQ_ITEMS the page's FAQPage JSON-LD is built from. This
 * component used to keep its own copy of the questions, which meant the answers Google was
 * shown and the answers on the page could quietly disagree.
 */
export function FAQ() {
  return (
    <section className="border-t bg-muted/30 py-24" id="faq">
      <div className="mx-auto max-w-3xl">
        <FadeIn className="mb-14 px-6 text-center">
          <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">
            Common questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Quick answers about Ittekimasu.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Accordion className="border-0 px-2 md:px-0">
            {HOME_FAQ_ITEMS.map(({ question, answer }) => (
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
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-10 px-6 text-center text-muted-foreground text-sm">
            More answers on the{" "}
            <a
              className="text-primary underline underline-offset-3 hover:text-primary/80"
              href="/contact"
            >
              contact page
            </a>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
