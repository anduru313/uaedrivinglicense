import Link from "next/link";
import { Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 text-xl font-bold text-white">{siteConfig.siteName}</div>
          <p className="max-w-sm text-sm text-slate-300">
            Independent guidance for Dubai and UAE driving licence enquiries, with clear links to official RTA and government information.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-300">
            <ShieldCheck className="h-4 w-4 text-green-400" aria-hidden="true" />
            <span>{siteConfig.disclosures.operator}</span>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Quick links</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><Link href="/open-driving-file-dubai/" className="hover:text-white">Open a driving file</Link></li>
            <li><Link href="/dubai-driving-license-cost/" className="hover:text-white">Licence costs</Link></li>
            <li><Link href="/driving-license-requirements-uae/" className="hover:text-white">Requirements</Link></li>
            <li><Link href="/driving-license-faq/" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Official sources</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            {siteConfig.officialLinks.map((item) => (
              <li key={item.label}><a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">{item.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Contact</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-green-400" aria-hidden="true" /><a href={`https://wa.me/${siteConfig.whatsAppNumber}`} className="hover:text-white">{siteConfig.whatsAppDisplay}</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-green-400" aria-hidden="true" /><a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-white">{siteConfig.contactEmail}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 {siteConfig.siteName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy-policy/" className="hover:text-white">Privacy policy</Link>
            <Link href="/terms-and-disclaimer/" className="hover:text-white">Terms & disclaimer</Link>
            <Link href="/contact/" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
