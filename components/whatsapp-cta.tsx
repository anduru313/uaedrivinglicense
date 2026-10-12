import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/site";

export function WhatsAppCTA({
  label = "Chat on WhatsApp",
  topic = "UAE driving licence information",
  detail,
  variant = "primary",
  className = "",
}: {
  label?: string;
  topic?: string;
  detail?: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const href = buildWhatsAppLink(topic, detail);

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp about ${topic}`}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500",
        variant === "primary"
          ? "bg-green-600 text-white hover:bg-green-500"
          : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
        className,
      ].join(" ")}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      <span>{label}</span>
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export function FloatingWhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink("opening a driving file in Dubai")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg shadow-green-600/30 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
