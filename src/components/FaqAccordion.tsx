import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";

interface Faq {
    question: string;
    answer: string;
}

interface Props {
    faqs: Faq[];
}

export default function ({ faqs }: Props) {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
            defaultValue="item-1"
        >
            {
                faqs.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        className="bg-card border border-border rounded-lg overflow-hidden animate-scale-in"
                        value={`faq-${index}`}
                    >
                        <AccordionTrigger className="px-6 text-lg font-semibold text-foreground pr-4">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className="px-6 pb-4 text-muted-foreground leading-relaxed">
                                {faq.answer}
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    );
}