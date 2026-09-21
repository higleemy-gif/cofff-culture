"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { MessageCircle } from "lucide-react";

import { EnquirySchema, type EnquiryInput, PROGRAM_OPTIONS } from "@/lib/enquiry";
import { whatsappLink } from "@/lib/site";
import { CoffeeDecor } from "@/components/site/CoffeeDecor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/site/Reveal";

// Shared field styling for inputs on the dark espresso band.
const darkFieldClass =
  "border-white/20 bg-transparent text-white placeholder:text-white/50 focus-visible:border-caramel";
// Error text uses a warm off-white rather than red, per the palette rules.
const errorClass = "mt-1.5 text-[13px] text-[#F5D6C6]";

export function EnquiryCTA() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(EnquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
      website: "",
    },
  });

  const programValue = watch("program");

  const onSubmit = (values: EnquiryInput) => {
    // Honeypot: a filled "website" field indicates a bot. Silently show the
    // confirmation without forwarding anything.
    if (values.website && values.website.length > 0) {
      setSubmitted(true);
      return;
    }

    const programLabel =
      PROGRAM_OPTIONS.find((option) => option.value === values.program)
        ?.label ?? values.program;

    const lines = [
      "New enquiry — Academy of Coffee Culture",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Course: ${programLabel}`,
    ];
    if (values.message && values.message.trim().length > 0) {
      lines.push(`Message: ${values.message.trim()}`);
    }

    // Forward the enquiry to the academy's WhatsApp with the details prefilled.
    window.open(
      whatsappLink(lines.join("\n")),
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  };

  return (
    <section
      id="enquiry"
      className="relative overflow-hidden scroll-mt-32 bg-espresso text-white"
    >
      <CoffeeDecor
        variant="coffee"
        rotate={-8}
        drift={44}
        className="-bottom-12 -right-10 h-80 w-80 text-white/[0.05]"
      />
      <div className="relative mx-auto grid max-w-content grid-cols-1 gap-12 px-6 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
        {/* Left column */}
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="font-serif text-[32px] font-normal leading-[1.1] tracking-tight text-white md:text-[40px]">
              Start your coffee career.
            </h2>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-white/80">
              Tell us a little about yourself and the course you&rsquo;re
              interested in. Your details open in WhatsApp so you can send them
              to us in one tap, and our team will reply directly there.
            </p>
          </Reveal>
        </div>

        {/* Right column — form */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            {submitted ? (
              <div
                role="status"
                className="rounded-[4px] border border-white/20 p-8"
              >
                <h3 className="font-serif text-[24px] font-normal text-white">
                  Thank you for your enquiry.
                </h3>
                <p className="mt-3 text-[16px] leading-relaxed text-white/80">
                  WhatsApp should now be open with your details. Send the
                  message and our team will reply to you there. If it did not
                  open, message us directly at +91 76089 23069.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Honeypot — visually hidden, not announced, off the tab order. */}
                <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register("website")}
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Full name */}
                  <div className="sm:col-span-1">
                    <Label htmlFor="name" className="text-white/90">
                      Full name
                    </Label>
                    <Input
                      id="name"
                      autoComplete="name"
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`mt-2 ${darkFieldClass}`}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p id="name-error" className={errorClass}>
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="sm:col-span-1">
                    <Label htmlFor="phone" className="text-white/90">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      aria-invalid={errors.phone ? "true" : "false"}
                      aria-describedby={
                        errors.phone ? "phone-error" : undefined
                      }
                      className={`mt-2 ${darkFieldClass}`}
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p id="phone-error" className={errorClass}>
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Program interest */}
                  <div className="sm:col-span-2">
                    <Label htmlFor="program" className="text-white/90">
                      Program interest
                    </Label>
                    <Select
                      value={programValue}
                      onValueChange={(value) =>
                        setValue("program", value as EnquiryInput["program"], {
                          shouldValidate: true,
                        })
                      }
                    >
                      <SelectTrigger
                        id="program"
                        aria-invalid={errors.program ? "true" : "false"}
                        aria-describedby={
                          errors.program ? "program-error" : undefined
                        }
                        className={`mt-2 ${darkFieldClass} data-[placeholder]:text-white/50`}
                      >
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                      <SelectContent>
                        {PROGRAM_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.program && (
                      <p id="program-error" className={errorClass}>
                        {errors.program.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <Label htmlFor="message" className="text-white/90">
                      Message{" "}
                      <span className="font-normal text-white/50">
                        (optional)
                      </span>
                    </Label>
                    <Textarea
                      id="message"
                      maxLength={500}
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                      className={`mt-2 ${darkFieldClass}`}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p id="message-error" className={errorClass}>
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    type="submit"
                    variant="caramel"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    <MessageCircle aria-hidden="true" />
                    Send enquiry on WhatsApp
                  </Button>
                  <p className="mt-3 text-[13px] text-white/60">
                    Submitting opens WhatsApp with your details ready to send.
                  </p>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
