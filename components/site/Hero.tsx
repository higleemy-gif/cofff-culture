import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/Eyebrow";
import { CoffeeDecor } from "@/components/site/CoffeeDecor";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <CoffeeDecor
        variant="coffee"
        rotate={-10}
        drift={44}
        className="-bottom-12 -left-10 h-56 w-56 text-espresso/[0.04]"
      />
      <div className="relative mx-auto grid max-w-content grid-cols-1 gap-12 px-6 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
        {/* Left column (7/12) */}
        <div className="lg:col-span-7 lg:pr-4">
          <Reveal>
            <Eyebrow>Professional Coffee Education</Eyebrow>
            <h1 className="mt-5 font-serif text-[40px] font-normal leading-[1.05] tracking-tight text-espresso md:text-[64px]">
              Learn the craft of coffee. Build a career in it.
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
              Academy of Coffee Culture is a professional skill-development
              institute in Odisha, training the next generation of baristas,
              café operators, and coffee entrepreneurs through practical,
              industry-oriented learning.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild>
                {/* TODO (client): Link to the Programs page. */}
                <Link href="#programs">Explore Programs</Link>
              </Button>
              <Button asChild variant="ghost">
                {/* TODO (client): Link to the downloadable brochure (PDF). */}
                <Link href="#">Download Brochure</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Right column (5/12) */}
        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            {/* TODO (client): Replace this Unsplash placeholder with real
                photography of a barista training at the Academy studio. */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[4px] border border-hairline">
              <Image
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
                alt="A barista preparing coffee at an espresso machine"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-[13px] text-muted">
              Hands-on training at the Academy studio.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
