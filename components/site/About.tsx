import { Reveal } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/Eyebrow";
import { CoffeeDecor } from "@/components/site/CoffeeDecor";

const PILLARS = [
  {
    number: "01",
    title: "Technical Training",
    description: "Barista skills, brewing methods, coffee knowledge",
  },
  {
    number: "02",
    title: "Practical Exposure",
    description: "Studio sessions with industry-standard equipment",
  },
  {
    number: "03",
    title: "Professional Standards",
    description: "Café operations, hospitality, service discipline",
  },
  {
    number: "04",
    title: "Entrepreneurship",
    description: "Business fundamentals for aspiring café owners",
  },
] as const;

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden scroll-mt-32 border-b border-hairline"
    >
      <CoffeeDecor
        variant="bean"
        rotate={12}
        drift={40}
        className="-right-6 top-12 h-48 w-48 text-espresso/[0.04]"
      />
      <div className="relative mx-auto grid max-w-content grid-cols-1 gap-12 px-6 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
        {/* Left column */}
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow>About the Academy</Eyebrow>
            <h2 className="mt-5 max-w-md font-serif text-[32px] font-normal leading-[1.1] tracking-tight text-espresso md:text-[40px]">
              Bridging classroom learning and real café careers.
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
              To provide practical, industry-oriented coffee and café training
              that enhances employability, entrepreneurship and professional
              skills.
            </p>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted">
              Our vision is to become a recognized centre of excellence for
              coffee education and skill development in Odisha — promoting
              quality coffee, skilled professionals, and sustainable livelihood
              opportunities.
            </p>
          </Reveal>
        </div>

        {/* Right column */}
        <div className="lg:col-span-6">
          <ul>
            {PILLARS.map((pillar, index) => (
              <Reveal
                as="li"
                key={pillar.number}
                delay={index * 0.08}
                className={
                  index === 0
                    ? "flex gap-6 py-5"
                    : "flex gap-6 border-t border-hairline py-5"
                }
              >
                <span className="font-serif text-[28px] font-normal leading-none text-caramel">
                  {pillar.number}
                </span>
                <div>
                  <h3 className="text-[16px] font-medium text-espresso">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-muted">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
