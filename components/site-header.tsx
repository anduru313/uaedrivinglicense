import Image from "next/image";
import Link from "next/link";
import { Menu } from "@/components/icons";
import { navItems, siteConfig } from "@/lib/site";
import { WhatsAppCTA } from "@/components/whatsapp-cta";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Go to homepage">
          <Image src="/uae-driving-guide-mark.svg" alt="" width={48} height={48} priority />
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

        <details className="group relative md:hidden">
          <summary
            aria-label="Main menu"
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-slate-200 text-slate-700 [&::-webkit-details-marker]:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-full z-50 mt-2 flex w-64 flex-col rounded-xl border border-slate-200 bg-white p-2 text-sm font-medium text-slate-700 shadow-lg"
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2.5 hover:bg-slate-50 hover:text-slate-950">
                {item.label}
              </Link>
            ))}
            <Link href="/about/" className="rounded-lg px-3 py-2.5 hover:bg-slate-50 hover:text-slate-950">About</Link>
            <div className="border-t border-slate-100 px-2 pt-2">
              <WhatsAppCTA label="WhatsApp" topic="opening a driving file in Dubai" detail="Please guide me through the next steps." className="w-full px-4 py-2 text-sm" />
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
