import Link from "next/link";

import { Reveal } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/Eyebrow";
import { CoffeeDecor } from "@/components/site/CoffeeDecor";

export function FacultyTeaser() {
  return (
    <section
      id="faculty"
      className="relative overflow-hidden scroll-mt-24 border-b border-hairline"
    >
      <CoffeeDecor
        variant="coffee"
        rotate={6}
        drift={40}
        className="-right-10 top-1/2 h-64 w-64 -translate-y-1/2 text-espresso/[0.04]"
      />
      <div className="relative mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Faculty &amp; Approach</Eyebrow>
          <h2 className="mt-5 font-serif text-[28px] font-normal leading-[1.1] tracking-tight text-espresso md:text-[32px]">
            Taught by people who work the bar.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-muted">
            Our instructors come from working café backgrounds and bring current
            industry practice into every session. We prioritize disciplined
            technique, consistency, and the professional standards that cafés
            hire for.
          </p>
          {/* TODO (client): Link to the Faculty page. */}
          <Link
            href="#"
            className="mt-6 inline-block text-[15px] font-medium text-caramel transition-opacity hover:opacity-80"
          >
            Meet the faculty &rarr;
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
