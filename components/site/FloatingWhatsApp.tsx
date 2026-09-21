import { MessageCircle } from "lucide-react";

import { whatsappLink } from "@/lib/site";

/**
 * Persistent floating WhatsApp action, fixed to the bottom-right corner.
 * On-palette (caramel) with a Lucide chat icon and the single permitted
 * subtle shadow plus a hairline ring for definition.
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(
        "Hi, I'd like to know more about the courses at Academy of Coffee Culture.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-caramel text-white shadow-subtle ring-1 ring-black/5 transition-transform duration-200 hover:scale-105"
    >
      <MessageCircle className="size-7" strokeWidth={1.5} aria-hidden="true" />
    </a>
  );
}
