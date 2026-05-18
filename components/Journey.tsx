'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const milestones = [
  {
    year: "2002",
    details: "Born in Ankara, Turkey.",
  },
  {
    year: "2012",
    details: "Qualified to compete in my first regional and international fencing tournaments, securing several notable achievements.",
  },
  {
    year: "2016",
    details: "Earned admission to Vali Muammer Guler Social Sciences High School, on the basis of my TEOG examination results.",
  },
  {
    year: "2021",
    details: "Graduated from high school with a cumulative average of 80,54, achieving 97,83 in final-year Mathematics.",
  },
  {
    year: "2024",
    details: "Commenced my undergraduate studies in Computer Science at University of Surrey.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="flex flex-row justify-center items-center py-20 px-[100px] gap-[100px] min-h-screen"
    >
      <div className="flex justify-center items-center">
        <h2 className="text-[30px] font-medium text-foreground whitespace-nowrap">
          My Journey
        </h2>
      </div>
      <Accordion defaultValue={[0]} className="flex max-w-[600px] w-full flex-col gap-7">
        {milestones.map((m, index) => (
          <AccordionItem
            key={m.year}
            value={index}
            className={`group/journey relative flex flex-row rounded-lg overflow-hidden bg-[var(--muted)] border-none hover:-translate-y-1 hover:shadow-lg transition-all duration-300 w-[85%] ${index % 2 === 0 ? 'self-start' : 'self-end'}`}
          >
            <div className="w-[3px] bg-[var(--accent)] shrink-0" />
            <div className="relative flex flex-col w-full overflow-hidden">
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[95px] font-bold leading-none text-[var(--foreground)] opacity-[0.07] pointer-events-none select-none transition-opacity duration-300 group-data-[open]/journey:opacity-0">
                {m.year}
              </span>
              <AccordionTrigger className="relative pl-5 pr-5 py-4 hover:no-underline">
                <span className="text-[20px] font-semibold opacity-0 transition-opacity duration-300 group-data-[open]/journey:opacity-100">
                  {m.year}
                </span>
              </AccordionTrigger>
              <AccordionContent className="relative pl-5 pr-5">
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  {m.details}
                </p>
              </AccordionContent>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
