/**
 * Shared site/contact constants and helpers.
 */

// WhatsApp enquiry number, in full international format (91 = India) as
// required by the wa.me deep-link scheme.
export const WHATSAPP_NUMBER = "917608923069";

/**
 * Build a wa.me deep link, optionally pre-filling the chat with a message.
 */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
