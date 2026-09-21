"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/images/logo.png";

// On this single-page site the nav scrolls to on-page sections. Each href
// matches an id rendered by the corresponding section component.
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Admissions", href: "#enquiry" },
  { label: "Faculty", href: "#faculty" },
  { label: "Contact", href: "#contact" },
] as const;

const WORDMARK = "Academy of Coffee Culture";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-white transition-colors",
        scrolled ? "border-b border-hairline" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-[84px] max-w-content items-center justify-between px-6">
        <Link
          href="/"
          className="inline-flex items-center rounded-[4px]"
          aria-label={`${WORDMARK} — home`}
        >
          <Image
            src={logo}
            alt={WORDMARK}
            priority
            sizes="64px"
            className="h-16 w-auto"
          />
        </Link>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="relative text-[15px] font-medium text-espresso transition-colors hover:text-caramel after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-caramel after:transition-all after:duration-200 hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            {/* TODO (client): Link to the admissions / enquiry destination. */}
            <Link href="#enquiry">Enquire Now</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="inline-flex size-10 items-center justify-center rounded-[4px] text-espresso"
              >
                <Menu className="size-6" strokeWidth={1.5} />
              </button>
            </SheetTrigger>
            <SheetContent title="Navigation menu">
              <div className="font-serif text-[18px] font-medium tracking-tight text-espresso">
                {WORDMARK}
              </div>
              <nav aria-label="Mobile" className="mt-2 flex-1">
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <li key={link.label}>
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          className="block py-3 text-[17px] font-medium text-espresso transition-colors hover:text-caramel"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <SheetClose asChild>
                <Button asChild className="w-full">
                  <Link href="#enquiry">Enquire Now</Link>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
