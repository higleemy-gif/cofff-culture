import { Reveal } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/Eyebrow";
import { CoffeeDecor } from "@/components/site/CoffeeDecor";

const BENEFITS = [
  {
    title: "Hands-on training hours",
    description: "Every module includes bar-time on industry equipment.",
  },
  {
    title: "Industry-standard equipment",
    description:
      "Espresso machines, grinders, and brewers used in working cafés.",
  },
  {
    title: "Career & entrepreneurship support",
    description: "Guidance for placements and for opening your own café.",
  },
] as const;

export function WhyUs() {
  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <CoffeeDecor
        variant="bean"
        rotate={-14}
        drift={46}
        className="-bottom-8 right-4 h-52 w-52 text-caramel/[0.05]"
      />
      <div className="relative mx-auto grid max-w-content grid-cols-1 gap-12 px-6 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
        {/* Left column */}
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow>Why This Academy</Eyebrow>
            <blockquote className="mt-6 max-w-xl font-serif text-[28px] font-normal italic leading-tight text-espresso md:text-[32px]">
              &ldquo;We train people the way cafés actually run — on the bar,
              under real service pressure, with real standards.&rdquo;
            </blockquote>
            <p className="mt-4 text-[14px] text-muted">— The Academy approach</p>
          </Reveal>
        </div>

        {/* Right column */}
        <div className="lg:col-span-6">
          <Reveal delay={0.1}>
            <div>
              {BENEFITS.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={
                    index === 0
                      ? "py-5"
                      : "border-t border-hairline py-5"
                  }
                >
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-2 shrink-0 bg-caramel"
                    />
                    <div>
                      <h3 className="text-[16px] font-medium text-espresso">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-[14px] leading-relaxed text-muted">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
