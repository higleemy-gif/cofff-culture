import { z } from "zod";

/**
 * Program options shared between the enquiry form's <Select> and the
 * server-side zod validation. Keeping a single source of truth avoids drift
 * between the client and the API contract.
 */
export const PROGRAM_OPTIONS = [
  { value: "coffee-master-7day", label: "Coffee Master — 7 Days" },
  { value: "cafe-master-2week", label: "Cafe Master — 2 Weeks" },
] as const;

export const PROGRAM_VALUES = [
  "coffee-master-7day",
  "cafe-master-2week",
] as const;

export const EnquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(80, "Name is too long"),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  program: z.enum(PROGRAM_VALUES, {
    errorMap: () => ({ message: "Select a program" }),
  }),
  message: z.string().trim().max(500, "Message is too long").optional(),
  // Honeypot: real users never see or fill this field, so it must be empty.
  website: z.string().max(0).optional(),
});

export type EnquiryInput = z.infer<typeof EnquirySchema>;
