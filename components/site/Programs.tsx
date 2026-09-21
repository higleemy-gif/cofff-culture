import { Coffee, Croissant, MessageCircle, type LucideIcon } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/Eyebrow";
import { CoffeeDecor } from "@/components/site/CoffeeDecor";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";

type Course = {
  icon: LucideIcon;
  duration: string;
  title: string;
  description: string;
  covers: string[];
  whatsappMessage: string;
};

// Kept as a shared source so Cafe Master (which is Coffee Master + pastry &
// bakery) stays in sync automatically when the coffee modules change.
const COFFEE_MASTER_COVERS = [
  "Bean origins (theory)",
  "Brewing methods",
  "Coffee making",
  "Latte art",
  "Coffee fundamentals & tasting",
] as const;

const COURSES: Course[] = [
  {
    icon: Coffee,
    duration: "7-Day Course",
    title: "Coffee Master",
    description:
      "A one-week intensive covering the full craft behind the bar — from the machine to the finished cup.",
    covers: [...COFFEE_MASTER_COVERS],
    whatsappMessage:
      "Hi, I'm interested in the Coffee Master 7-Day course at Academy of Coffee Culture.",
  },
  {
    icon: Croissant,
    duration: "2-Week Course",
    title: "Cafe Master",
    description:
      "A two-week program that extends coffee craft into pastry and bakery, for a broader café skill set.",
    covers: [
      ...COFFEE_MASTER_COVERS,
      "Pastry fundamentals",
      "Basic bakery",
      "Café-ready technique",
    ],
    whatsappMessage:
      "Hi, I'm interested in the Cafe Master 2-Week course (coffee, pastry & bakery) at Academy of Coffee Culture.",
  },
];

export function Programs() {
  return (
    <section
      id="programs"
      className="relative overflow-hidden scroll-mt-32 border-b border-hairline"
    >
      <CoffeeDecor
        variant="coffee"
        rotate={8}
        drift={52}
        className="-right-12 top-6 h-72 w-72 text-caramel/[0.05]"
      />
      <div className="relative mx-auto max-w-content px-6 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Our Courses</Eyebrow>
          <h2 className="mt-5 max-w-lg font-serif text-[32px] font-normal leading-[1.1] tracking-tight text-espresso md:text-[40px]">
            Two courses, built around real café skills.
          </h2>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted">
            Choose a one-week barista intensive, or a two-week program that adds
            pastry and bakery. Enquire on WhatsApp for dates and fees.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {COURSES.map((course, index) => {
            const Icon = course.icon;
            return (
              <Reveal
                as="article"
                key={course.duration}
                delay={index * 0.08}
                className="flex flex-col border border-hairline bg-white p-8"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    className="size-6 text-espresso"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span className="border border-hairline px-3 py-1 text-[12px] font-medium uppercase tracking-strip text-caramel">
                    {course.duration}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-[24px] font-medium text-espresso">
                  {course.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {course.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {course.covers.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 bg-caramel"
                      />
                      <span className="text-[15px] text-body">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-2">
                  <Button asChild variant="caramel" className="w-full sm:w-auto">
                    <a
                      href={whatsappLink(course.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Enquire about the ${course.title} ${course.duration} on WhatsApp`}
                    >
                      <MessageCircle aria-hidden="true" />
                      Enquire on WhatsApp
                    </a>
                  </Button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
