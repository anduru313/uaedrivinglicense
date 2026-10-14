import type { Metadata } from "next";
import { Mail, MessageCircle, ShieldCheck } from "@/components/icons";
import { PageIntro, Breadcrumbs, DisclosureBox, SourceNote } from "@/components/page-shell";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { getPageTitle, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: getPageTitle("Contact"),
  description: "-",
};

export default function ContactPage() {
  return (
    <main className="bg-slate-50 pb-20 text-slate-900">
      <PageIntro
        eyebrow="Contact"
        title="Contact the site"
        description="Use the WhatsApp CTA for a general enquiry about Dubai or UAE licence information. The operator contact details are listed below."
      >
        <div className="mt-8">
          <WhatsAppCTA label="Start a WhatsApp enquiry" topic="UAE driving licence information" detail="Hi, I would like general information about the Dubai driving licence process and my next steps." className="px-5 py-3" />
        </div>
      </PageIntro>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact" }]} />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">General contact details</h2>
            <div className="mt-5 space-y-4 text-sm text-slate-700">
              <div className="flex items-center gap-3"><MessageCircle className="h-5 w-5 text-green-600" aria-hidden="true" /><a href={`https://wa.me/${siteConfig.whatsAppNumber}`} target="_blank" rel="noopener noreferrer" className="font-medium text-slate-900">{siteConfig.whatsAppDisplay}</a></div>
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-blue-700" aria-hidden="true" /><a href={`mailto:${siteConfig.contactEmail}`} className="font-medium text-slate-900">{siteConfig.contactEmail}</a></div>
              <div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-green-600" aria-hidden="true" /><span>{siteConfig.operatorName}</span></div>
            </div>
          </div>

          <div className="space-y-6">
            <DisclosureBox />
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-slate-900">Retention and purpose</h3>
              <p className="text-sm leading-7 text-slate-700">Use only the minimum necessary information when responding to enquiries. Do not request sensitive personal documents in the open web form or via WhatsApp. This site is informational and should not be used to share confidential identity documents.</p>
              <SourceNote source="https://u.ae/" checked="2026-10-12" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
