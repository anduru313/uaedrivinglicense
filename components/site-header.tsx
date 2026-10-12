import Link from "next/link";
import { CarFront, Menu } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";
import { WhatsAppCTA } from "@/components/whatsapp-cta";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Go to homepage">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
            <CarFront className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <div className="text-lg font-bold tracking-tight text-slate-900">{siteConfig.siteName}</div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{siteConfig.targetEmirate}</div>
          </div>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/about/" className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-950">
            About
          </Link>
          <WhatsAppCTA label="WhatsApp" topic="opening a driving file in Dubai" detail="Please guide me through the next steps." className="px-4 py-2 text-sm" />
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
          aria-label="Open the main menu"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
