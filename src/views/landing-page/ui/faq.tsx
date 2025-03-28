import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui/accordion";


interface FAQProps {
    question: string;
    answer: string;
    value: string;
}

const FAQList: FAQProps[] = [
    {
        question: "Is this template free?",
        answer: "Yes. It is a free NextJS Shadcn template.",
        value: "item-1",
    },
    {
        question: "Duis aute irure dolor in reprehenderit in voluptate velit?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam consectetur sapiente, iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
        value: "item-2",
    },
    {
        question:
            "Lorem ipsum dolor sit amet Consectetur natus dolor minus quibusdam?",
        answer:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis.",
        value: "item-3",
    },
    {
        question: "Excepteur sint occaecat cupidata non proident sunt?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        value: "item-4",
    },
    {
        question:
            "Enim ad minim veniam, quis nostrud exercitation ullamco laboris?",
        answer: "consectetur adipisicing elit. Sint labore.",
        value: "item-5",
    },
];

export const FAQSection = () => {
    return (
        <section id="faq" className="mx-auto md:w-[700px] px-8 sm:px-0">
            <div className="text-center mb-8">
                <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
                    FAQS
                </h2>

                <h2 className="text-3xl md:text-4xl text-center font-bold">
                    Common Questions
                </h2>
            </div>

            <Accordion type="single" collapsible className="AccordionRoot flex flex-col gap-5">
                {FAQList.map(({ question, answer, value }) => (
                    <AccordionItem key={value} value={value} className="px-2 py-1 rounded-2xl border-1 border-primary">
                        <AccordionTrigger className="text-left">
                            {question}
                        </AccordionTrigger>

                        <AccordionContent>{answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
};