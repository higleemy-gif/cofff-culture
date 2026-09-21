import Link from "next/link";

import { PROGRAM_OPTIONS } from "@/lib/enquiry";

const PHONES = [
  "+91 76089 23069",
  "+91 99567 56715",
  "+91 89848 02064",
] as const;
// TODO (client): Confirm the academy's social URLs before launch.

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
] as const;

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-32 bg-espresso text-white/80">
      <div className="mx-auto max-w-content px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Academy */}
          <div>
            <div className="font-serif text-[19px] font-medium text-white">
              Academy of Coffee Culture
            </div>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-white/70">
              Professional coffee and café training focused on employability,
              entrepreneurship, and industry-ready skills.
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-white/70">
              A skill-development initiative based in Bhubaneswar, Odisha.
            </p>
            <p className="mt-4 text-[13px] text-white/60">
              Reg. No. 791600085/2016
            </p>
          </div>

          {/* Column 2 — Programs */}
          <div>
            <h2 className="text-[13px] font-medium uppercase tracking-strip text-white/60">
              Programs
            </h2>
            <ul className="mt-4 space-y-2.5">
              {PROGRAM_OPTIONS.map((program) => (
                <li key={program.value}>
                  {/* TODO (client): Point to individual program detail pages
                      once built. For now they scroll to the Programs section. */}
                  <Link
                    href="#programs"
                    className="text-[14px] text-white/80 transition-colors hover:text-caramel"
                  >
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h2 className="text-[13px] font-medium uppercase tracking-strip text-white/60">
              Contact
            </h2>
            <address className="mt-4 space-y-2.5 text-[14px] not-italic text-white/80">
              {/* TODO (client): Replace with the academy's full street address. */}
              <p className="leading-relaxed">
                Plot No. 109, near Greenwood Palace
                <br />
                Bomikhal, Bhubaneswar
                <br />
                Odisha 751010
              </p>
              {PHONES.map((phone) => (
                <p key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="transition-colors hover:text-caramel"
                  >
                    {phone}
                  </a>
                </p>
              ))}
            </address>
          </div>

          {/* Column 4 — Follow */}
          <div>
            <h2 className="text-[13px] font-medium uppercase tracking-strip text-white/60">
              Follow
            </h2>
            <ul className="mt-4 space-y-2.5">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-white/80 transition-colors hover:text-caramel"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-[13px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Academy of Coffee Culture. All rights reserved.</p>
          <p>Bhubaneswar, Odisha, India</p>
        </div>
      </div>
    </footer>
  );
}
