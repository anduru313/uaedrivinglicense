import type { Metadata } from "next";
import { Building2, Info, ShieldCheck } from "lucide-react";
import { PageIntro, Breadcrumbs, SourceNote, DisclosureBox } from "@/components/page-shell";
import { getPageTitle, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: getPageTitle("About"),
  description: "Learn the purpose, operator identity, and disclosure information for this independent UAE driving licence information website.",
};

export default function AboutPage() {
  return (
    <main className="bg-slate-50 pb-20 text-slate-900">
      <PageIntro
        eyebrow="About the site"
        title="About this website"
        description="This website is designed to help people understand the general process for a UAE driving licence, especially the information and file-opening journey in Dubai. It is an independent information website intended to provide useful background, navigation, and helpful resources before a user makes a formal decision."
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About" }]} />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="mb-4 flex items-center gap-3 text-xl font-semibold text-slate-900"><Building2 className="h-5 w-5 text-blue-700" aria-hidden="true" /> Operator details</div>
            <p className="text-sm leading-7 text-slate-700">Operator name: <strong>{siteConfig.operatorName}</strong></p>
            <p className="mt-3 text-sm leading-7 text-slate-700">This site is set up as a general information website using placeholders until formal business details are confirmed. It does not claim to be an official UAE government service, an authorised driving institute, or a licensed service provider unless a valid authorisation exists and is disclosed.</p>
            <div className="mt-6 rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              <div className="mb-2 flex items-center gap-2 font-semibold text-slate-900"><Info className="h-4 w-4 text-green-600" aria-hidden="true" /> Purpose</div>
              <p>{siteConfig.operatorDescription}</p>
            </div>
          </div>

          <div className="space-y-6">
            <DisclosureBox />
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-xl font-semibold text-slate-900"><ShieldCheck className="h-5 w-5 text-green-600" aria-hidden="true" /> Disclosure</div>
              <p className="text-sm leading-7 text-slate-700">Because rules and service arrangements may change, all content is informational and should be checked against official sources before making a decision, paying for a service, or submitting documentation.</p>
              <SourceNote source="https://u.ae/" checked="2026-10-12" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
